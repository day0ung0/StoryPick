import React, { useContext, useState } from "react";
import style from "../styles/login.module.css";

import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axiosInstance from "../utils/apis";

function Login() {
    const {isLogin, setIsLogin} = useContext(AuthContext);
    const [loginId, setLoginId] = useState("");
    const [loginPwd, setLoginPwd] = useState("");
    const history = useHistory();


    function handleClick() {
        const data ={
            loginId : loginId,
            loginPwd : loginPwd
        };

        axiosInstance.post('/api/signin', data)
        .then(resp => {
            setIsLogin(true)
            history.push('/')
        })
        .catch(error => {
            console.error("Error는 : " + error);
            console.log("로그인이 실패하였습니다");
        });
    };





    return(
        <div className={style.wrapper}>
            <h2>로그인</h2>
            <div className={style.item_wrapper}>
                <div>ID</div><input type="text" placeholder="ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            </div>

            <div className={style.item_wrapper}>
                <div>PWD</div><input type="password" placeholder="PWD" value={loginPwd} onChange={(e) => setLoginPwd(e.target.value)} />
            </div>

            <div className={style.item_wrapper}>
                <button onClick={handleClick}>로그인</button>
                <button><Link to={'/join'}>회원 가입</Link></button>
            </div>
        </div>

    );
}


export default Login;