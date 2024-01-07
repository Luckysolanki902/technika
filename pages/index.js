import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <Sidebar />
    </div>
  )
}
