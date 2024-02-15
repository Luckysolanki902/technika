import React from 'react'
import styles from './thankyou.module.css'
import Link from 'next/link'
const index = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'100vw' }}>
            <div className={styles.heading}>
                Ordered Successfully!
            </div>
            <Link href={'/'} className={styles.homelink}>Back To Homepage</Link>
        </div>
    )
}

export default index