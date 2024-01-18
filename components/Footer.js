import React from 'react'
import styles from './compstyles/footer.module.css'
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.txt}>
                “Machines were past , Coding is present ,
                AI is future still one thing remains constant
                among all that is tech”
            </div>
            <div className={styles.tag}>
                <div className={styles.hash}>#</div>
                Technika
            </div>
            <div className={styles.soci}>
                <BsYoutube className={styles.social} />
                <FaInstagram className={styles.social} />
                <FaLinkedin className={styles.social} />
            </div>
            <div className={styles.right}>
                © Technical Sub-Council , HBTU Kanpur | Privacy Policy
            </div>
        </div>
    )
}

export default Footer