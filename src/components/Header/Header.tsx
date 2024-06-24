import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkButton from '../DarkButton/DarkButton';
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.body}>
                <div className="logo">
                    <Link className='link' href='/'>
                        <Image src='./logo.svg' alt='лого' width={153} height={32}></Image>
                    </Link>
                </div>
                <DarkButton title='Для участников' />
            </div>
        </div>
    </header>
  )
}

export default Header

