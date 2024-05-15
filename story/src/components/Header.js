import React from 'react';
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import style from '../styles/header.module.css'
import { useContext } from "react-router-dom"
import axiosInstance from "../utils/apis"

export const AuthContext = createContext();


function Header() {
    const {isLogin, setIsLogin} = useContext(AuthContext);
    
    const handleLogOut = () => {
        axiosInstance.post('/api/signout')
        .then(resp => { 
            setIsLogin(false);
        })
        .catch(err => {
            console.log(err)
        })
      }
    
      const beforeBtn = <><button className={style.login} ><Link to='/signin'>로그인</Link></button>
      <button className={style.register}><Link to='/signup'>회원가입</Link></button></>;
    
      const afterBtn = <button onClick={handleLogOut}>로그아웃</button>

      

    return (
        //Header 최상단
        <div className={style.wrapper}>         
            <div className={style.teamName}>스토리픽 :-: </div>
                <div className={style.userImo}>
                    {isLogin ? afterBtn : beforeBtn}
                </div>
        </div>
    );
}

export default Header;



/* 
 <Link to='/'>
                <div>스토리픽</div>
            </Link>
<Link to ='/auth'>
                <div><FaUser/></div>
            </Link>

*/