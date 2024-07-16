"use client";

import React from "react";
import styles from "./member.module.scss";
import Link from "next/link";
import MemberCabinetTabs from "@/components/MemberCabinetTabs/MemberCabinetTabs";
import { useGetMeQuery } from "@/store/services/userApi";

const page = () => {
  const { data: user } = useGetMeQuery();
  return (
    <div className={styles.member}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.main}>
            <div className={styles.heading}>
              <div className={styles.welcome}>Добро пожаловать,</div>
              <div className={styles.username}>{user?.email || ""}</div>
            </div>
            <div className={styles.content}>
              <div className={styles.review}>
                <div className={styles.text}>Оставить отзыв бустеру</div>
                <Link href="#" className={styles.link}>
                  оставить отзыв
                </Link>
              </div>
              <div className={styles.support}>
                <div className={styles.text}>Поддержка</div>
                <Link href="#" className={styles.linkSupport}>
                  Написать
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabWrapper}>
        <MemberCabinetTabs user={user} />
      </div>
    </div>
  );
};

export default page;
