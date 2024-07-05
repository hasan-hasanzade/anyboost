
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
  const basePrice = 0;

  const calculatePrice = () => {
    let price = basePrice;
    if (options.priority) price += 200;
    if (options.express) price += 300;
    if (options.stream) price += 100;
    const eloDifference = Math.max(0, desiredRating - currentRating) * 0.55;
    price += eloDifference;
    return price.toFixed(2);
  };

  const handleOptionChange = (option: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleAddCurrentRating = () => {
    setCurrentRating((prevRating) => {
      const newRating = prevRating + 200;
      setDesiredRating((desired) => Math.max(desired, newRating));
      return newRating;
    });
  };

  const handleSubtractCurrentRating = () => {
    setCurrentRating((prevRating) => {
      const newRating = Math.max(0, prevRating - 200);
      setDesiredRating((prevDesired) => Math.max(newRating, prevDesired - 200));
      return newRating;
    });
  };

  const handleAddDesiredRating = () => {
    setDesiredRating((prevRating) => prevRating + 200);
  };

  const handleSubtractDesiredRating = () => {
    setDesiredRating((prevRating) => Math.max(currentRating, prevRating - 200));
  };

  const handleCurrentRatingChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setCurrentRating(value);
    setDesiredRating((desired) => Math.max(desired, value));
  };

  const handleDesiredRatingChange = (e) => {
    const value = Math.max(currentRating, parseInt(e.target.value) || 0);
    setDesiredRating(value);
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
        <div className={styles.item}>
          <div className={styles.desiredRating}>
            <div className={styles.desiredCalc}>
              <button className={styles.subtract} onClick={handleSubtractDesiredRating}>-200</button>
              <div className={styles.center}>
                <div className={styles.desiredTitle}>Желаемый Рейтинг</div>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    value={desiredRating}
                    onChange={handleDesiredRatingChange}
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
