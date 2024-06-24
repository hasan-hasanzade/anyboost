import React from 'react';
import Link from 'next/link';
import styles from './regularbutton.module.scss';

type RegularButtonProps = {
    title: string;
};

const RegularButton: React.FC<RegularButtonProps> = ({ title }) =>{
  return (
    <div className="button">
        <Link className={styles.btn} href='#'>{title}</Link>
    </div>
  )
}

export default RegularButton