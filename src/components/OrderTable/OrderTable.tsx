import React, { useState } from "react";
import styles from "./ordertable.module.scss";
import Link from "next/link";
import {
  useCompleteOrderForBoosterMutation,
  useGetOrdersForBoosterQuery,
  useGetOrdersForMemberQuery,
} from "@/store/services/ordersApi";
import { useGetMeQuery } from "@/store/services/userApi";

const OrderTable = () => {
  // const initialData = [
  //     { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
  //     { id: '223456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
  //     { id: '323456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
  //     { id: '423456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
  //     { id: '523456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
  //     { id: '623456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
  //     { id: '723456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
  //     { id: '823456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
  // ];

  // const [data, setData] = useState(initialData);

  // const handleComplete = (id) => {
  //     setData(data.map(row =>
  //         row.id === id ? { ...row, status: 'Выполнен' } : row
  //     ));
  // };

  const { data: user } = useGetMeQuery();
  const { data: boosterOrders, refetch } = useGetOrdersForBoosterQuery();
  const { data: memberOrders } = useGetOrdersForMemberQuery();

  const [completeOrder] = useCompleteOrderForBoosterMutation();

  const data = user?.isBooster ? boosterOrders : memberOrders;

  const getDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  return (
    <div className="table-container">
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата</th>
            <th>Система</th>
            <th>Тип</th>
            <th>Доп. опции</th>
            <th>Текущий</th>
            <th>Цель</th>
            <th>Статус</th>
            <th>Чат</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr className={styles.tableRow} key={index}>
              <td>{row.id}</td>
              <td>{getDate(row.createdAt)}</td>
              <td>{row.system}</td>
              <td>{row.type}</td>
              <td>Priority, В соло, Экспресс, Стрим</td>
              <td>{row.current}</td>
              <td>{row.goal}</td>
              <td>
                {row.status === "В процессе" && user?.isBooster ? (
                  <button
                    className={styles.btn}
                    onClick={() => completeOrder(row.id).then((r) => refetch())}
                  >
                    Сдать заказ
                  </button>
                ) : (
                  row.status
                )}
              </td>
              <td>
                <Link
                  href={{
                    pathname: "/chat",
                    query: {
                      orderId: row.id,
                    },
                  }}
                >
                  <img src="/inputs/unmute.svg" alt="" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
