'use client'

import React from 'react'
import styles from './booster.module.scss'
import BoosterCabinetTabs from '@/components/BoosterCabinetTabs/BoosterCabinetTabs'

const page = () => {
  return (
    <div className={styles.member}>
        <div className="container">
            <div className={styles.body}>
                <div className={styles.main}>
                    <div className={styles.heading}>
                        <div className={styles.welcome}>Добро пожаловать,</div>
                        <div className={styles.username}>BoosterName</div>
                    </div>
                </div>
            </div>
        </div>
            <div className={styles.tabWrapper}>
                <BoosterCabinetTabs />
            </div>  
    </div>
  )
}

export default page
