import React from 'react'
import styles from './chat.module.scss'

const page = () => {
  return (
    <div className={styles.chat}>
      <div className="container">
        <div className={styles.content}>
            <div className={styles.heading}>
                <div className={styles.orderNumber}>
                    Чат по заказу 123456789,
                </div>
                <div className={styles.name}>
                    Loremipsum, бустер
                </div>
            </div>
            <div className={styles.chatBody}>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.date}>21 апреля в 12:34</div>
                </div>
            </div>
            <div className={styles.chatActions}>
                <textarea className={styles.textArea} placeholder='Введите текст сообщения'></textarea>
                <button className={styles.sendBtn}>
                    <img src="./inputs/arrow-up.svg" alt="" />
                </button>
            </div>
            <div className={styles.attention}>Не переходите в другие мессенджеры, в ином случае мы не сможем помочь вам в решении проблем, если таковые возникнут</div>
        </div>
      </div>
    </div>
  )
}

export default page
