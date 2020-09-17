import React from 'react'
import styles from './style.module.css'

export default function FooterInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.firstTip}>
                <p>Designed by yuan</p>
            </div>
            <div className={styles.lastTip}>
                <p>本站主要用于学习记录,如有疑问可以联系邮箱: 
                    <a href="mailto:1014420122@qq.com"> nocodeyuan@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
