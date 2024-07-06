'use client'

import React, { useState } from 'react';
import styles from '../../Calculator/calculator.module.scss';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import Link from 'next/link';

const PremierCalc = () => {
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
  const [errorMessage, setErrorMessage] = useState('');

  const basePrice = 0;

  const calculatePrice = () => {
    let price = basePrice;
    const eloDifference = Math.max(0, desiredRating - currentRating);

    const ratingRanges = [
        { max: 10000, price: 0.55 },
        { max: 15000, price: 0.78 },
        { max: 25000, price: 1.1 },
        { max: 35000, price: 2.3 },
    ];

    if (eloDifference > 0) {
        let remainingDifference = eloDifference;
        let currentThreshold = currentRating;

        for (let i = 0; i < ratingRanges.length; i++) {
            const range = ratingRanges[i];
            const rangeMax = Math.min(range.max, desiredRating);
            if (currentThreshold < rangeMax) {
                const rangeDifference = rangeMax - currentThreshold;
                price += rangeDifference * range.price;
                currentThreshold = rangeMax;
                remainingDifference -= rangeDifference;
            }
            if (remainingDifference <= 0) break;
        }
    }

    if (options.noAccountTransfer) price *= 1.2;
    if (options.solo) price *= 1.55;
    if (options.priority) price *= 1.25;
    if (options.express) price *= 1.6;
    if (options.stream) price *= 1.15;
    if (options.steamOffline) price *= 1.0;

    return price.toFixed(2);
};

  const handleOptionChange = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleAddCurrentRating = () => {
    setCurrentRating((prevRating) => {
      if (prevRating === 29800) {
        const newRating = prevRating;
        setDesiredRating((desired) => Math.max(desired));
        return newRating;
      } else {
        const newRating = prevRating + 200;
        setDesiredRating((desired) => Math.max(desired, newRating + 200));
        return newRating;
      }
      
    });
  };

  const handleSubtractCurrentRating = () => {
    setCurrentRating((prevRating) => {
      const newRating = Math.max(0, prevRating - 200);
      setDesiredRating((prevDesired) => Math.max(newRating + 200, prevDesired));
      return newRating;
    });
  };

  const handleAddDesiredRating = () => {
    if (desiredRating === 30000) {
      setDesiredRating((prevRating) => Math.max(currentRating, prevRating));
    } else {
      setDesiredRating((prevRating) => Math.max(currentRating + 200, prevRating + 200));
    }
    setErrorMessage('');
  };

  const handleSubtractDesiredRating = () => {
    if (currentRating === 30000) {
      setDesiredRating((prevRating) => Math.max(currentRating, prevRating));
    } else {
      setDesiredRating((prevRating) => Math.max(currentRating + 200, prevRating - 200));
    }
  };


  const handleCurrentRatingChange = (e) => {
    const numericValue = parseInt(e.target.value) || 0;
    const value = Math.max(0, Math.min(30000, numericValue));
  
    if (/^[0-9]{0,5}$/.test(value.toString())) {
      setCurrentRating(value);
      if (value === 30000) {
        setDesiredRating((desired) => Math.max(desired, value));
      } else {
        setDesiredRating((desired) => Math.max(desired, value + 200));
      }
      setErrorMessage('');
    }
  };

  const handleDesiredRatingChange = (e) => {
    const value = e.target.value.trim();
    if (value === '') {
      setDesiredRating(currentRating + 200);
      setErrorMessage('Желаемый рейтинг не может быть пустым.');
    } else {
      const numericValue = parseInt(value);
      if (isNaN(numericValue) || numericValue < currentRating || numericValue > 35000) {
        setErrorMessage('Желаемый рейтинг должен быть числом между текущим рейтингом и 35000.');
      } else if (numericValue < currentRating + 200) {
        setErrorMessage('Минимальный заказ 25 Elo.');
      } else {
        setDesiredRating(numericValue);
        setErrorMessage('');
      }
    }
  };

  const handleDesiredRatingInputChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]{0,5}$/.test(value)) {
      setDesiredRating(value);
      setErrorMessage('');
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.calcs}>
        <div className={styles.item}>
          <div className={styles.currentRating}>
            <div className={styles.currentCalc}>
              <button className={styles.subtract} onClick={handleSubtractCurrentRating}>-200</button>
              <div className={styles.center}>
                <div className={styles.currentTitle}>ТЕКУЩИЙ РЕЙТИНГ</div>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    value={currentRating}
                    onChange={handleCurrentRatingChange}
                  />
                  <span className={styles.span}>
                    ELO
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={handleAddCurrentRating}>+200</button>
            </div>
          </div>
        </div>
        <div className={styles.arrow}>
          <Image src="/calc/straight.svg" alt="стрелка" width={42} height={40} />
        </div>
        <div className={styles.itemPremier}>
          <div className={styles.desiredRating}>
            <div className={styles.desiredCalc}>
              <button className={styles.subtract} onClick={handleSubtractDesiredRating}>-200</button>
              <div className={styles.center}>
                <div className={styles.desiredTitle}>Желаемый Рейтинг</div>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    value={desiredRating}
                    onChange={handleDesiredRatingInputChange}
                    onBlur={handleDesiredRatingChange}
                  />
                  <span className={styles.span}>
                    ELO
                  </span>
                </div>
              </div>
              <button className={styles.add} onClick={handleAddDesiredRating}>+200</button>
            </div>
          </div>
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
          <div className={styles.priceContent}>
              <div className={styles.priceText}>
                ИТОГОВАЯ ЦЕНА:
              </div>
              <div className={styles.price}>
                {calculatePrice()} ₽
              </div>
          </div>
          <div className={styles.submit}>
            <Link href='/checkout' >ЗАКАЗАТЬ БУСТ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierCalc;
