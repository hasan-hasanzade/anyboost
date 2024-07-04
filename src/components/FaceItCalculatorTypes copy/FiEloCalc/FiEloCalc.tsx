'use client'

import React, { useState } from 'react';
import styles from '../../Calculator/calculator.module.scss';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

const FiEloCalc = () => {
  const [options, setOptions] = useState({
    noAccountTransfer: false,
    solo: false,
    steamOffline: false,
    priority: false,
    express: false,
    stream: false,
  });

  const [currentRating, setCurrentRating] = useState(0);
  const [desiredRating, setDesiredRating] = useState(0);
  const basePrice = 0;

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

  const getRatingImage = (rating) => {
    if (rating >= 2001) return images[10];
    if (rating >= 1751) return images[9];
    if (rating >= 1531) return images[8];
    if (rating >= 1351) return images[7];
    if (rating >= 1201) return images[6];
    if (rating >= 1051) return images[5];
    if (rating >= 901) return images[4];
    if (rating >= 751) return images[3];
    if (rating >= 501) return images[2];
    if (rating >= 100) return images[1];
    return images[0];
  };

  const calculatePrice = () => {
    let price = basePrice;
    if (options.priority) price += 200;
    if (options.express) price += 300;
    if (options.stream) price += 100;
    const eloDifference = Math.max(0, desiredRating - currentRating) / 25 * 500;
    price += eloDifference;
    return price;
  };

  const handleOptionChange = (option: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleAddCurrentRating = () => {
    setCurrentRating((prevRating) => {
      const newRating = prevRating + 25;
      setDesiredRating((desired) => Math.max(desired, newRating));
      return newRating;
    });
  };

  const handleSubtractCurrentRating = () => {
    setCurrentRating((prevRating) => {
      const newRating = Math.max(0, prevRating - 25);
      setDesiredRating((prevDesired) => Math.max(newRating, prevDesired - 25));
      return newRating;
    });
  };

  const handleAddDesiredRating = () => {
    setDesiredRating((prevRating) => prevRating + 25);
  };

  const handleSubtractDesiredRating = () => {
    setDesiredRating((prevRating) => Math.max(currentRating, prevRating - 25));
  };

  return (
    <div className={styles.body}>
      <div className={styles.calcs}>
        <div className={styles.item}>
          <Image
            src={getRatingImage(currentRating)}
            width={70}
            height={70}
            quality={100}
            alt="уровень"
          />
          <div className={styles.currentRating}>
            <div className={styles.currentCalc}>
              <button className={styles.subtract} onClick={handleSubtractCurrentRating}>-25</button>
              <div className={styles.center}>
                <div className={styles.currentTitle}>ТЕКУЩИЙ РЕЙТИНГ</div>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    value={currentRating}
                    readOnly
                  />
                  <span className={styles.span}>
                    ELO
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={handleAddCurrentRating}>+25</button>
            </div>
          </div>
        </div>
        <div className={styles.arrow}>
          <Image src="/calc/straight.svg" alt="стрелка" width={42} height={40} />
        </div>
        <div className={styles.item}>
          <div className={styles.desiredRating}>
            <div className={styles.desiredCalc}>
              <button className={styles.subtract} onClick={handleSubtractDesiredRating}>-25</button>
              <div className={styles.center}>
                <div className={styles.desiredTitle}>Желаемый Рейтинг</div>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    value={desiredRating}
                    readOnly
                  />
                  <span className={styles.span}>
                    ELO
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={handleAddDesiredRating}>+25</button>
            </div>
          </div>
          <Image
            src={getRatingImage(desiredRating)}
            width={70}
            height={70}
            quality={100}
            alt="уровень"
          />
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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
                <Image className={styles.switchTooltip} src='/calc/info.svg' width={14} height={14} alt='информация' />
              </a>
              <Tooltip anchorSelect=".tooltip" style={{ backgroundColor: "rgba(73, 113, 255, 1)" }} place="top">
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

export default FiEloCalc;
