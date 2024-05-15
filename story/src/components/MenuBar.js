import React from 'react';
import { IoHome } from "react-icons/io5";
import style from "../styles/menubar.module.css";
import { Link } from 'react-router-dom';


function MenuBar() {


    return (
        //상단
        <div className={style.wrapper}>
            <Link to='/major'><div>전공 도서</div></Link>
            <Link to='/certified'><div>자격증 도서</div></Link>
            <div>서가에 없는 도서</div>
            <Link to='/mypage'><div className={style.homeIcon}><IoHome /></div></Link>
        </div>
    );
}

export default MenuBar;





/*

<Link to='/'>
                    <div>전공 도서</div>
                </Link>

<Link to ='/certified'>
                    <div>자격증 도서</div>
                </Link>    
                
 <Link to ='/normal'>
                    <div>일반 도서</div>
                </Link>  
 
<Link to ='/apply'>
                    <div>도서 신청</div>
                </Link>                

<Link to ='/mypage'>
                    <div><IoHome /></div>
                </Link>                
*/