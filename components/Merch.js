import styles from './compstyles/merch.module.css';
import style from "./compstyles/team.module.css";
import React from 'react'

const data = [
    '/images/merch/noteopen.webp',
    '/images/merch/keychain3.jpg',
    '/images/merch/cup2.jpg',
]

const Merch = ({ isMerchandisePage }) => {
    return (
        <>
            <div className={styles.main2}>
                {
                    data.map((item, index) => (
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
        </>
    )
}

export default Merch