import React, { useState } from 'react';
import styles from './ordertable.module.scss';
import Link from 'next/link';

const OrderTable = () => {
    const initialData = [
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
        { id: '223456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '323456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
        { id: '423456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '523456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
        { id: '623456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '723456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен',current: "Серебро 1" , goal: 'Звезда 1', src: '/inputs/unmute.svg' },
        { id: '823456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе',current: "2300 ELO" , goal: '5700 ELO', src: '/inputs/unmute.svg' },
    ];

    const [data, setData] = useState(initialData);

    const handleComplete = (id) => {
        setData(data.map(row => 
            row.id === id ? { ...row, status: 'Выполнен' } : row
        ));
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
                        <th>Текущий</th>
                        <th>Цель</th>
                        <th>Статус</th>
                        <th>Чат</th>
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
                            <td>
                                {row.status === 'В процессе' ? (
                                    <button className={styles.btn} onClick={() => handleComplete(row.id)}>Сдать заказ</button>
                                ) : (
                                    row.status
                                )}
                            </td>
                            <td><Link href='/chat'><img src={row.src} alt="" /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;
