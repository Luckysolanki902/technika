import styles from "./compstyles/menu.module.css"

import React from 'react'

const Menu = ({ text, border }) => {
    return (
        <div className={border ? styles.menu : styles.bor} >{text}</div>
    )
}

export default Menu