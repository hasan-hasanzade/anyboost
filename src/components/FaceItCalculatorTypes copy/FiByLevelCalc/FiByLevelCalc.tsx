'use client'

import React, { useState } from 'react';
import styles from '../../Calculator/calculator.module.scss';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

const FiByLevelCalc = () => {
  const [options, setOptions] = useState({
    noAccountTransfer: false,
    solo: false,
    steamOffline: false,
    priority: false,
    express: false,
    stream: false,
  });

  const [currentRatingIndex, setCurrentRatingIndex] = useState(0);
  const [desiredRatingIndex, setDesiredRatingIndex] = useState(0);
  const [price, setPrice] = useState(0);

  const basePrice = 0;
  const calculatePrice = () => {
    let price = basePrice;
    if (options.priority) price += 200;
    if (options.express) price += 300;
    if (options.stream) price += 100;
    price += (desiredRatingIndex - currentRatingIndex) * 700; // Calculate price based on desired rating
    return price;
  };

  const handleOptionChange = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const elo = [
    "Без уровня",
    "1 уровень",
    "2 уровень",
    "3 уровень",
    "4 уровень",
    "5 уровень",
    "6 уровень",
    "7 уровень",
    "8 уровень",
    "9 уровень",
    "10 уровень"
  ];

  const images = [
    "/calc/faceit/0.png",
    "/calc/faceit/1.png",
    "/calc/faceit/2.png",
    "/calc/faceit/3.png",
    "/calc/faceit/4.png",
    "/calc/faceit/5.png",
    "/calc/faceit/6.png",
    "/calc/faceit/7.png",
    "/calc/faceit/8.png",
    "/calc/faceit/9.png",
    "/calc/faceit/10.png",

  ];

  const handleCurrentRatingChange = (direction) => {
    setCurrentRatingIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return 0;
      if (newIndex >= elo.length) return elo.length - 1;
      setDesiredRatingIndex(newIndex); // Update desired rating to match the current rating
      return newIndex;
    });
  };

  const handleDesiredRatingChange = (direction) => {
    setDesiredRatingIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < currentRatingIndex) return currentRatingIndex;
      if (newIndex >= elo.length) return elo.length - 1;
      setPrice((prevPrice) => prevPrice + 700 * direction); // Update price
      return newIndex;
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.calcs}>
        <div className={styles.item}>
          <Image src={images[currentRatingIndex]} width={70} height={70} quality={100} alt="звания" />
          <div className={styles.currentRating}>
            <div className={styles.currentCalc}>
              <button className={styles.subtract} onClick={() => handleCurrentRatingChange(-1)}>-</button>
              <div className={styles.center}>
                <div className={styles.currentTitle}>ТЕКУЩИЙ РЕЙТИНГ</div>
                <div className={styles.inputWrapper}>
                  <span className={styles.span}>
                    {elo[currentRatingIndex]}
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={() => handleCurrentRatingChange(1)}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.arrow}>
          <Image src="./calc/straight.svg" alt="стрелка" width={42} height={40} />
        </div>
        <div className={styles.item}>
          <div className={styles.desiredRating}>
            <div className={styles.desiredCalc}>
              <button className={styles.subtract} onClick={() => handleDesiredRatingChange(-1)}>-</button>
              <div className={styles.center}>
                <div className={styles.desiredTitle}>Желаемый Рейтинг</div>
                <div className={styles.inputWrapper}>
                  <span className={styles.span}>
                    {elo[desiredRatingIndex]}
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={() => handleDesiredRatingChange(1)}>+</button>
            </div>
          </div>
          <Image src={images[desiredRatingIndex]} width={70} height={70} quality={100} alt="звания" />
        </div>
      </div>
<div className={styles.switches}>
<div className={styles.switchBody}>
    <div className={styles.column}>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.noAccountTransfer}
            onChange={() => handleOptionChange('noAccountTransfer')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>БЕЗ ПЕРЕДАЧИ АККАУНТА</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.solo}
            onChange={() => handleOptionChange('solo')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>В соло</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.steamOffline}
            onChange={() => handleOptionChange('steamOffline')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>STEAM OFFLINE</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    </div>
    <div className={styles.column}>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.priority}
            onChange={() => handleOptionChange('priority')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>Priority</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.express}
            onChange={() => handleOptionChange('express')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>Экспресс</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    <label className={styles.switchLabel}>
        <input
            className={styles.switch}
            type="checkbox"
            checked={options.stream}
            onChange={() => handleOptionChange('stream')}
        />
        <span className={styles.slider}></span>
        <span className={styles.switchTitle}>Стрим</span>
        <a className="tooltip">
            <Image className={styles.switchTooltip} src='./calc/info.svg' width={14} height={14} alt='информация'></Image>
        </a>
        <Tooltip anchorSelect=".tooltip" style={{backgroundColor: "rgba(73, 113, 255, 1)"}} place="top">
            Описание
        </Tooltip>
    </label>
    </div>
</div>
<div className={styles.priceColumn}>
    <div className={styles.priceText}>
        ИТОГОВАЯ ЦЕНА:
    </div>
    <div className={styles.price}>
       {calculatePrice()} ₽
    </div>
    <button className={styles.submit}>ЗАКАЗАТЬ БУСТ</button>
</div>
</div>
    </div>
  );
};

export default FiByLevelCalc;


