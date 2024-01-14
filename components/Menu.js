import styles from "./compstyles/menu.module.css"

import React from 'react'

const Menu = ({ text, border, hide }) => {
    return (
        <div style={{display: hide ? 'none': 'block'}} className={border ? styles.menu : styles.bor} >{text}</div>
    )
}

export default Menu