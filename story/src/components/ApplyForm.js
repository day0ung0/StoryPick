import React, { useState } from "react";
import style from "../styles/applyform.module.css";

import axiosInstance from "../utils/apis";

function ApplyForm() {
    
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [stuName, setStuName] = useState('');
    const [stuDept, setStuDept] = useState('');
    const [stuGrade, setStuGrade] = useState('');

    const history = useHistory();


    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
      };   
    /*
      const handleLoginPwChange = (e) => {
        setLoginPw(e.target.value);
      };
    */
      const handleConfirmPwdChange = (e) => {
        setConfirmPwd(e.target.value);
      };
      const handleStuNameChange = (e) => {
        setStuName(e.target.value);
      };
      const handleStuDeptChange = (e) => {
        setStuDept(e.target.value);
      };



      const authJoin = () => {
        const data = {
          loginId : loginId,
          loginPw : loginPw,
          stuName : stuName,
          stuDept : stuDept,
          stuGrade : stuGrade
        }

      axiosInstance.post('/api/signup', data)
      .then(resp => {
        const cookies = document.cookie;
        console.log(cookies)
        alert('회원가입이 완료되었습니다');
        history.push('/signin')
      })
      .catch(err => {
          console.log(err)
      })
  };


    return(

        <div className={style.wrapper}>
            <h2>회원 가입</h2>

                <div className={style.item_wrapper}>
                    <div>ID</div><input type="text" placeholder="아이디" label for='ID' value={loginId} onChange={handleLoginIdChange}/>
                </div>
    
    
                <div className={style.item_wrapper}>
                    <div>PWD</div><input type="password" placeholder="비밀번호" value={loginPw} onChange={(e) => setLoginPw(e.target.value)}/>
                    <button type="submit">중복 확인</button>             
                </div>

                <div className={style.item_wrapper}>
                    <div>PWD 재입력</div><input type="password" placeholder="비밀번호 재입력" value={confirmPwd} onChange={handleConfirmPwdChange}/>
                </div>
                
                <div className={style.item_wrapper}>
                    <div>이름</div><input type="text" placeholder="이름" value={stuName} onChange={handleStuNameChange}/>
                </div>
                
                <div className={style.item_wrapper}>
                    <div>학부(과)</div><input type="text" placeholder="학부 또는 학과" value={stuDept} onChange={handleStuDeptChange}/>
                </div>
                
                <div className={style.item_wrapper}>
                    <div>학년</div><input type="text" placeholder="학년" value={stuGrade} onChange={(e) => setStuGrade(e.target.value)}/>
                </div>


                <button type="submit" onClick={authJoin}>회원 가입</button>             
        </div>

        
        
    );
}

export default ApplyForm;


