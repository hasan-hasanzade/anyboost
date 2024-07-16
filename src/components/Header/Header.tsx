'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkButton from '../DarkButton/DarkButton';
import RegularButton from '../RegularButton/RegularButton';
import styles from './header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.logo}>
            <Link href='/'>
              <Image src='/logo.svg' alt='лого' width={153} height={32} />
            </Link>
          </div>
          <button className={styles.burgerMenu} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <DarkButton title='Для участников' link='/login' onClick={closeMenu} />
            {/* <RegularButton title='Личный кабинет' link='/login' onClick={closeMenu} />
            <DarkButton title='Выйти' link='/login' onClick={closeMenu} /> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
