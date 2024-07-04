'use client'

import React, { useState } from 'react';
import styles from './checkout.module.scss';

const checkout = () => {
  const [phone, setPhone] = useState('+87239842234');
  const [email, setEmail] = useState('user@mail.tr');
  const [login, setLogin] = useState('Username');
  const [password, setPassword] = useState('asdfasdf');
  const [isPhoneFocused, setPhoneFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const clearInput = (setFunction) => {
    setFunction('');
  };


  return (
    <div className={styles.checkout}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className={styles.good}>Отлично,</div>
            <div className={styles.text}>Осталось только оплатить</div>
          </div>
          <div className={styles.body}>
            <div className={styles.contacts}>
              <div className={styles.title}>
               Контактная информация
              </div>
              <div className={styles.inputs}>
              <form className={styles.form}>
              <div className={styles.inputWrapper}>
                <label className={`${styles.label} ${(isLoginFocused || login) ? styles.active : ''}`}>
                  Ваше Имя
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  onFocus={() => setLoginFocused(true)}
                  onBlur={() => setLoginFocused(false)}
                />
                {login && (
                  <img
                    src="/inputs/clear.svg"
                    className={styles.clearIcon}
                    onClick={() => clearInput(setLogin)}
                    alt="clear input"
                  />
                )}
              </div>
              <div className={styles.inputWrapper}>
                <label className={`${styles.label} ${(isPhoneFocused || phone) ? styles.active : ''}`}>
                  Номер Телефона или Почта
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                />
                {phone && (
                  <img
                    src="/inputs/clear.svg"
                    className={styles.clearIcon}
                    onClick={() => clearInput(setPhone)}
                    alt="clear input"
                  />
                )}
              </div>
              <div className={styles.inputWrapper}>
                <label className={`${styles.label} ${(isEmailFocused || email) ? styles.active : ''}`}>
                Контакт (telegram, discord, vk)
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
                {email && (
                  <img
                    src="/inputs/clear.svg"
                    className={styles.clearIcon}
                    onClick={() => clearInput(setEmail)}
                    alt="clear input"
                  />
                )}
              </div>
              <div className={styles.inputWrapper}>
                <label className={`${styles.label} ${(isEmailFocused || email) ? styles.active : ''}`}>
                Комментарий к заказу
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
                {email && (
                  <img
                    src="/inputs/clear.svg"
                    className={styles.clearIcon}
                    onClick={() => clearInput(setEmail)}
                    alt="clear input"
                  />
                )}
              </div>
              <div className={styles.inputWrapper}>
                <label className={`${styles.label} ${(isEmailFocused || email) ? styles.active : ''}`}>
                 Промокод
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
                {email && (
                  <img
                    src="/inputs/clear.svg"
                    className={styles.clearIcon}
                    onClick={() => clearInput(setEmail)}
                    alt="clear input"
                  />
                )}
              </div>
            </form>
              </div>
            </div>
            <div className={styles.payment}>
              <div className={styles.title}>
                Платежная система
              </div>
              <div className={styles.methods}>
                <div className={styles.types}>
                  <button className={styles.item}>
                    <div className={styles.logoEnot}>
                      <img src="./checkout/enot.svg" alt="" />
                    </div>
                    <div className={styles.cards}>
                      <img src="./checkout/visa.svg" alt="" />
                      <img className={styles.mc} src="./checkout/mc.svg" alt="" />
                      <img src="./checkout/mir.svg" alt="" />
                    </div>
                  </button>
                  <button className={styles.item}>
                    <div className={styles.logoLava}>
                      <img src="./checkout/lava.svg" alt="" />
                    </div>
                    <div className={styles.cards}>
                      <img src="./checkout/visa.svg" alt="" />
                      <img className={styles.mc} src="./checkout/mc.svg" alt="" />
                      <img src="./checkout/mir.svg" alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.pay}>
                <div className={styles.totalTitle}>Итого к оплате</div>
                <div className={styles.totalOptions}>Faceit Level Boost от 2 Уровень до 3 Уровень</div>
                <div className={styles.totalPrice}>1234₽</div>
                <div className={styles.totalBtn}>Оплатить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default checkout
