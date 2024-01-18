import React from 'react'
import styles from './compstyles/footer.module.css'
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {

    const youtubeLink = 'https://youtube.com/@Technika_24?si=wu_E0a1S4GhV9TEU'; // Replace with your actual YouTube channel link
    const instaLink = 'https://www.instagram.com/technika_24?igsh=ZXkzYWdkdWVhM3g1'; // Replace with your actual YouTube channel link

    const handleYoutubeClick = () => {
        window.open(youtubeLink, '_blank');
    };
    const handleInstaClick = () => {
        window.open(instaLink, '_blank');
    };

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
                <BsYoutube className={styles.social} onClick={handleYoutubeClick} />
                <FaInstagram className={styles.social} onClick={handleInstaClick} />
                <FaLinkedin className={styles.social} />
            </div>
            <div className={styles.right}>
                © Technical Sub-Council , HBTU Kanpur | Privacy Policy
            </div>
        </div>
    )
}

export default Footer