import Link from "next/link";
import styles from "./compstyles/menu.module.css";
import React from 'react';
import { useRouter } from "next/router";



const Menu = ({ text, href, hide }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <Link href={href} style={{ display: hide ? 'none' : 'block', textDecoration: 'none' }}className={isActive ? styles.menu : styles.bor}>
            {text}
        </Link>
    );
};

export default Menu;
