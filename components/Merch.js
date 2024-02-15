import styles from './compstyles/merch.module.css';
import style from "./compstyles/team.module.css";
import React from 'react'
import Link from 'next/link';


const data = [
    {
        itemName: 'diary',
        imageSrc: '/images/merch/noteopen.webp',
        price: '₹49',
    },
    {
        itemName: 'keychain',
        imageSrc: '/images/merch/keychain3.jpg',
        price: '₹29',
    },
    {
        itemName: 'coffeemug',
        imageSrc: '/images/merch/cup2.jpg',
        price: '₹129',
    },
    {
        itemName: 'pen',
        imageSrc: '/images/merch/pen2.jpg',
        price: '₹12',
    },
];

const Merch = ({ isMerchandisePage }) => {
    return (
        <>
            <div className={styles.main2}>
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <Link href={`/merchandiseform/${item.itemName}`} style={{ textDecoration: 'none' }}>
                                <div className={styles.box}>
                                    <div className={styles.in}>
                                        <img src={item.imageSrc} alt="" />
                                    </div>
                                </div>
                                <div className={styles.details}>
                                    {/* You can display other details here */}
                                    <p className={styles.keemat}>{item.price}</p>
                                    <p className={styles.buy}>Buy Now</p>
                                </div>
                            </Link>

                        </div>
                    ))
                }


            </div >
        </>
    )
}

export default Merch