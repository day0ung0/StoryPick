import React from 'react';
import { Link } from 'react-router-dom';

import { IoHome } from "react-icons/io5";
import styles from "../styles/menubar.module.css"


function MenuBar1() {


    return (
        //상단
        <div className={styles.wrapper}>
           <div><Link to="/major">전공 도서</Link></div>
           <div><Link to="/normal">일반 도서</Link></div>
            <div><Link to="/certification">자격증 도서</Link></div>
            <div><Link to="/applyBook">서가에 없는 도서</Link></div>
            <div><Link to="/login"><IoHome /></Link></div>
        </div>
    );
}

export default MenuBar1;
