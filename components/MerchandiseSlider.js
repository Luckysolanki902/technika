import React from 'react';
import Image from 'next/image';
import styles from './compstyles/merchandiseslider.module.css';
import Link from 'next/link';

const merchandiseItems = [
  {
    itemName: 'diary',
    imageSrc: '/images/merch/noteopen.webp',
    price: '₹39',
  },
  {
    itemName: 'keychain',
    imageSrc: '/images/merch/keychain3.jpg',
    price: '₹39',
  },
  {
    itemName: 'coffeemug',
    imageSrc: '/images/merch/cup2.jpg',
    price: '₹39',
  },
  {
    itemName: 'pen',
    imageSrc: '/images/merch/pen2.jpg',
    price: '₹39',
  },
];

const MerchandiseSlider = () => {
  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        {merchandiseItems.map((item, index) => (
          <div className={styles.slide} key={index}>
            <Link href={`/merchandiseform/${item.itemName}`} style={{ textDecoration: 'none' }}>
              <Image className={styles.image} src={item.imageSrc} width={1170 / 3} height={2080 / 3} alt='' />
              <div className={styles.details}>
                {/* You can display other details here */}
                <p className={styles.keemat}>{item.price}</p>
                <p className={styles.buy}>Buy Now</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchandiseSlider;
