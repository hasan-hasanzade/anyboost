import React from "react";
import styles from "./Newordertable.module.scss";
import Link from "next/link";
import {
  useGetNewOrdersForBoosterQuery,
  useTakeOrderForBoosterMutation,
} from "@/store/services/ordersApi";

const NewOrderTable = () => {
  const { data } = useGetNewOrdersForBoosterQuery();

  const [takeOrder] = useTakeOrderForBoosterMutation();

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
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr className={styles.tableRow} key={index}>
              <td>{row.id}</td>
              <td>{getDate(row.createdAt)}</td>
              <td>{row.system}</td>
              <td>{row.type}</td>
              <td>{row.current}</td>
              <td>{row.goal}</td>
              <td>
                <button
                  onClick={() => takeOrder(row.id)}
                  className={styles.btn}
                >
                  Взять заказ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewOrderTable;
