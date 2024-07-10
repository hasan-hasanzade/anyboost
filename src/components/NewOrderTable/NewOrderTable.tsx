import React from 'react';
import styles from './Newordertable.module.scss';
import Link from 'next/link';

const NewOrderTable = () => {
    const data = [
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка',current: "Серебро 1" , goal: 'Звезда 1', },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу',current: "Серебро 1" , goal: '5700 ELO',},
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка',current: "Серебро 3" , goal: 'Звезда 1', },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу',current: "Серебро 1" , goal: '5700 ELO',},
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка',current: "Серебро 3" , goal: 'Звезда 1', },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу',current: "Серебро 1" , goal: '5700 ELO',},
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка',current: "Серебро 1" , goal: 'Звезда 1', },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу',current: "Серебро 1" , goal: '5700 ELO',},
    ];

    return (
        <div className="table-container">
            <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Дата</th>
                        <th>Система</th>
                        <th>Тип</th>
                        <th>Текущий</th>
                        <th>Цель</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr className={styles.tableRow} key={index}>
                            <td>{row.id}</td>
                            <td>{row.date}</td>
                            <td>{row.system}</td>
                            <td>{row.type}</td>
                            <td>{row.current}</td>
                            <td>{row.goal}</td>
                            <td><button className={styles.btn}>Взять заказ</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewOrderTable;
