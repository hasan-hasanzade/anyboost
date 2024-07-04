import React from 'react';
import Link from 'next/link';
import styles from './regularbutton.module.scss';

type RegularButtonProps = {
    title: string;
};

const RegularButton: React.FC<RegularButtonProps> = ({ title }) =>{
  return (<Link className={styles.btn} href='#'>{title}</Link>)
}

export default RegularButton