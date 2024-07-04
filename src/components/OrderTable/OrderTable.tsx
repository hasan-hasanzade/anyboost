import React from 'react';
import styles from './ordertable.module.scss';
import Link from 'next/link';

const OrderTable = () => {
    const data = [
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', goal: 'Звезда 1', src: '/inputs/mute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе', goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', goal: 'Звезда 1', src: '/inputs/mute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе', goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', goal: 'Звезда 1', src: '/inputs/mute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе', goal: '5700 ELO', src: '/inputs/unmute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'Faceit', type: 'Напарники калибровка', status: 'Выполнен', goal: 'Звезда 1', src: '/inputs/mute.svg' },
        { id: '123456789', date: '01.02.2024', system: 'CS2', type: 'По рангу', status: 'В процессе', goal: '5700 ELO', src: '/inputs/unmute.svg' },
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
                        <th>Статус</th>
                        <th>Цель</th>
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
                            <td>{row.status}</td>
                            <td>{row.goal}</td>
                            <td><Link href='/chat'><img src={row.src} alt="" /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;
