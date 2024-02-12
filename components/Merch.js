import styles from './compstyles/merch.module.css';
import React from 'react'

const data = [
    '/merch/notebook.webp',
    '/merch/keychain.webp',
    '/merch/cup.webp',
    '/merch/keych.webp',
    '/merch/noteopen.webp',
    '/merch/notebook.webp',
    '/merch/keychain.webp',
    '/merch/cup.webp',
    '/merch/keych.webp',
    '/merch/noteopen.webp',
]

const Merch = ({ isMerchandisePage }) => {
    return (
        <div className={isMerchandisePage? styles.main2 : styles.main}>
            {
                data.map((item,index) => (
                    <div key={index}>
                        <div className={styles.box}>
                            <div className={styles.in}>
                                <img src={item} alt="" />
                            </div>
                        </div>
                        <div className={styles.buy}>
                            Buy Now
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Merch