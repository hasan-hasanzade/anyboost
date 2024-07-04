'use client'

import React, { useState } from 'react';
import styles from './register.module.scss';
import Link from 'next/link';

const Register = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  const [isPhoneOrEmailFocused, setPhoneOrEmailFocused] = useState(false);


  const clearPhoneOrEmail = () => {
    setPhoneOrEmail('');
  };

  return (
    <div className={styles.register}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.welcome}>Добро пожаловать,</div>
            <div className={styles.text}>Укажи свой номер телефона или почту</div>
          </div>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <label className={`${styles.label} ${(isPhoneOrEmailFocused || phoneOrEmail) ? styles.active : ''}`}>
                Номер телефона или почта
              </label>
              <input
                className={styles.input}
                type="text"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                onFocus={() => setPhoneOrEmailFocused(true)}
                onBlur={() => setPhoneOrEmailFocused(false)}
              />
              {phoneOrEmail && (
                <img
                  src="/inputs/clear.svg"
                  className={styles.clearIcon}
                  onClick={clearPhoneOrEmail}
                  alt="clear input"
                />
              )}
            </div>
            <div className={styles.switches}>
              <div className={styles.switchBody}>
                  <div className={styles.column}>
                    <label className={styles.switchLabel}>
                        <input
                            className={styles.switch}
                            type="checkbox"
                        />
                        <span className={styles.slider}></span>
                        <span className={styles.switchTitle}>Участник</span>
                    </label>
                    <label className={styles.switchLabel}>
                        <input
                            className={styles.switch}
                            type="checkbox"
                        />
                        <span className={styles.slider}></span>
                        <span className={styles.switchTitle}>Бустер</span>
                    </label>
                  </div>
              </div>
            </div>
            <Link href='/register-success' className={styles.btn}>Продолжить</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
