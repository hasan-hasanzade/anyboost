import React from 'react';
import Link from 'next/link';
import styles from './darkbutton.module.scss'

type DarkButtonProps = {
    title: string;
};

const DarkButton: React.FC<DarkButtonProps> = ({ title }) =>{
  return (
    <div className="button">
        <Link className={styles.btn} href='#'>{title}</Link>
    </div>
  )
}

export default DarkButton