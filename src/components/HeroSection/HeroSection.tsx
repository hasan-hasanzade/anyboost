import React from 'react';
import Image from 'next/image';
import DarkButton from '../DarkButton/DarkButton';
import RegularButton from '../RegularButton/RegularButton';
import styles from './herosection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <div className="container">
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.suptitle}>ПРОФЕССИОНАЛЬНЫЙ</div>
                    <h1 className={styles.title}>Бустинг Cs2</h1>
                    <p className={styles.text}>С нашим про-ресурсом беспокоиться не придется. Быстрый и надежный буст твоего аккаунта в Counter-Strike 2</p>
                    <div className={styles.buttons}>
                        <RegularButton title='Рассчитать буст' />
                        <DarkButton title='Узнать больше' />
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.terrorist}>
                    <Image src='/hero/t.png' alt='лого' width={266} height={757}></Image>
                    </div>
                    <div className={styles.counter}>
                    <Image src='/hero/ct.png' alt='лого' width={316} height={757}></Image>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection