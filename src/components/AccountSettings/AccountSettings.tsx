"use client";
import React, { useState, useEffect } from "react";
import styles from "./settings.module.scss";
import DeleteAccPopUp from "../DeleteAccPopUp/DeleteAccPopUp";
import {
  IUser,
  useChangePasswordMutation,
  useChangeUserMutation,
} from "@/store/services/userApi";

interface IProps {
  user: IUser | undefined;
}

const AccountSettings = ({ user }: IProps) => {
  const [phone, setPhone] = useState("+87239842234");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("Username");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isPhoneFocused, setPhoneFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [changeUser] = useChangeUserMutation();
  const [changePassword] = useChangePasswordMutation();

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (user?.email) setEmail(user.email as string);
  }, [user]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const clearInput = (setFunction) => {
    setFunction("");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChangePassword = () => {
    if (password === password2) {
      changePassword({ newPassword: password }).then((_) =>
        window.location.reload()
      );
    }
  };

  return (
    <div
      className={`${styles.settings} ${isModalVisible ? styles.blurred : ""}`}
    >
      <div className="container">
        <div className={styles.content}>
          <form className={styles.form}>
            {/* <div className={styles.inputWrapper}>
              <label
                className={`${styles.label} ${
                  isPhoneFocused || phone ? styles.active : ""
                }`}
              >
                Номер Телефона
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
                  src="/inputs/edit.svg"
                  className={styles.clearIcon}
                  onClick={() => clearInput(setPhone)}
                  alt="clear input"
                />
              )}
            </div> */}
            <div className={styles.inputWrapper}>
              <label
                className={`${styles.label} ${
                  isEmailFocused || email ? styles.active : ""
                }`}
              >
                Почта
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
                  src="/inputs/edit.svg"
                  className={styles.clearIcon}
                  onClick={() => changeUser({ email })}
                  alt="clear input"
                />
              )}
            </div>
          </form>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <label
                className={`${styles.label} ${
                  isPasswordFocused || password ? styles.active : ""
                }`}
              >
                Новый Пароль
              </label>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <img
                src={`/inputs/${
                  showPassword ? "visibility_off" : "visibility"
                }.svg`}
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
                alt="toggle visibility"
              />
            </div>
            <div className={styles.inputWrapper}>
              <label
                className={`${styles.label} ${
                  isPasswordFocused || password ? styles.active : ""
                }`}
              >
                Подтверди новый Пароль
              </label>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <img
                src={`/inputs/${
                  showPassword ? "visibility_off" : "visibility"
                }.svg`}
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
                alt="toggle visibility"
              />
            </div>
            <div className={styles.switches}>
              <div className={styles.switchBody}>
                <div className={styles.column}>
                  <label className={styles.switchLabel}>
                    <input className={styles.switch} type="checkbox" />
                    <span className={styles.slider}></span>
                    <span className={styles.switchTitle}>Привязать steam</span>
                  </label>
                  <label className={styles.switchLabel}>
                    <input className={styles.switch} type="checkbox" />
                    <span className={styles.slider}></span>
                    <span className={styles.switchTitle}>
                      Включить уведомления
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.formBtns}>
          <button className={styles.btn} type="button" onClick={toggleModal}>
            Удалить аккаунт
          </button>
          <button onClick={handleChangePassword} className={styles.changeBtn}>
            Сменить Пароль
          </button>
        </div>
      </div>

      {isModalVisible && <DeleteAccPopUp onClose={toggleModal} />}
    </div>
  );
};

export default AccountSettings;
