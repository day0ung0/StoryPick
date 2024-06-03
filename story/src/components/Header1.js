import React from 'react';
import styles from "../styles/header.module.css"
import { Link } from 'react-router-dom';

function Header1() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.teamName}><Link to="/"className={styles.linkStyle}>스토리픽</Link></div>
            <div><Link to="/auth"className={styles.linkStyle}>회원가입</Link></div>
        </div>

    );
}

export default Header1;