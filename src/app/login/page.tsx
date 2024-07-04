'use client'

import React, { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';

const Login = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPhoneOrEmailFocused, setPhoneOrEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const clearPhoneOrEmail = () => {
    setPhoneOrEmail('');
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.welcome}>Добро пожаловать,</div>
            <div className={styles.text}>Войди в свой аккаунт</div>
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
            <div className={styles.inputWrapper}>
              <label className={`${styles.label} ${(isPasswordFocused || password) ? styles.active : ''}`}>
                Пароль
              </label>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <img
                src={`/inputs/${showPassword ? 'visibility_off' : 'visibility'}.svg`}
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
                alt="toggle visibility"
              />
            </div>
            <div className={styles.forget}>Забыли пароль?</div>
            <button className={styles.btn}>Войти</button>
            <div className={styles.info}>
              <div className={styles.account}>Нет аккаунта?</div>
              <Link href='/register' className={styles.register}>Зарегистрироваться</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
