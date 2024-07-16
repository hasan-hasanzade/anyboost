"use client";

import React, { useEffect, useState } from "react";
import styles from "./chat.module.scss";
import { socket } from "@/lib/socket";
import { useGetMessagesByOrderIdQuery } from "@/store/services/chatApi";
import { useGetMeQuery } from "@/store/services/userApi";
import { io } from "socket.io-client";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [text, setText] = useState("");

  const { data: messages, refetch } = useGetMessagesByOrderIdQuery(
    searchParams.orderId as string
  );
  const { data: user } = useGetMeQuery();
  useEffect(() => {
    const socket1 = io("http://localhost:3001", {
      query: {
        chatId: searchParams.orderId,
      },
    });
    const onMessage = (data) => {
      refetch();
    };
    socket1.on("message", onMessage);

    return () => {
      socket1.off("message", onMessage);
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit("message", {
      senderId: user?.id,
      orderId: searchParams.orderId,
      text,
    });
    setText("");
  };

  const getDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleString("ru", {
        month: "long",
        day: "numeric",
        timezone: "UTC",
      }) + ` в ${date.getHours()}:${date.getMinutes()}`
    );
  };

  return (
    <div className={styles.chat}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.orderNumber}>
              Чат по заказу {searchParams.orderId},
            </div>
            <div className={styles.name}>{user?.email}, бустер</div>
          </div>
          <div className={styles.chatBody}>
            {messages?.length > 0 &&
              [...messages].reverse().map((m) =>
                m.senderId === user?.id ? (
                  <div className={styles.sentMessage}>
                    <div className={styles.sentText}>{m.text}</div>
                    <div className={styles.date}>{getDate(m.createdAt)}</div>
                  </div>
                ) : (
                  <div className={styles.incomingMessage}>
                    <div className={styles.incomingText}>{m.text}</div>
                    <div className={styles.date}>{getDate(m.createdAt)}</div>
                  </div>
                )
              )}
          </div>
          <div className={styles.chatActions}>
            <textarea
              className={styles.textArea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введите текст сообщения"
            ></textarea>
            <button onClick={handleSendMessage} className={styles.sendBtn}>
              <img src="./inputs/arrow-up.svg" alt="" />
            </button>
          </div>
          <div className={styles.attention}>
            Не переходите в другие мессенджеры, в ином случае мы не сможем
            помочь вам в решении проблем, если таковые возникнут
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
