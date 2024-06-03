import React from 'react';
import { Link } from 'react-router-dom';

import { IoHome } from "react-icons/io5";
import styles from "../styles/menubar.module.css"


function MenuBar1() {


    return (
        //상단
        <div className={styles.wrapper}>
           <div className={styles.menu}><Link to="/major"className={styles.linkStyle}>전공 도서</Link></div>
           <div className={styles.menu}><Link to="/normal"className={styles.linkStyle}>일반 도서</Link></div>
            <div className={styles.menu}><Link to="/certification"className={styles.linkStyle}>자격증 도서</Link></div>
            <div className={styles.menu}><Link to="/applyBook"className={styles.linkStyle}>서가에 없는 도서</Link></div>
            <div><Link to="/login"className={styles.linkStyle}><IoHome /></Link></div>
        </div>
    );
}

export default MenuBar1;
