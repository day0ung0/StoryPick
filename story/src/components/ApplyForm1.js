import React from "react";
import style from "../styles/applyform.module.css"

function ApplyForm1() {
    return(
        <div className={style.wrapper}>
        <h2>회원 가입</h2>

            <div className={style.item_wrapper}>
                <div>ID</div><input type="text" placeholder="아이디"/>
            </div>


            <div className={style.item_wrapper}>
                <div>PWD</div><input type="password" placeholder="비밀번호"/>
                <button type="submit">중복 확인</button>             
            </div>

            <div className={style.item_wrapper}>
                <div>PWD 재입력</div><input type="password" placeholder="비밀번호 재입력"/>
            </div>
            
            <div className={style.item_wrapper}>
                <div>이름</div><input type="text" placeholder="이름"/>
            </div>
            
            <div className={style.item_wrapper}>
                <div>학부(과)</div><input type="text" placeholder="학부 또는 학과"/>
            </div>
            
            <div className={style.item_wrapper}>
                <div>학년</div><input type="text" placeholder="학년"/>
            </div>


            <button type="submit">회원 가입</button>             
    </div>

    );
}

export default ApplyForm1;