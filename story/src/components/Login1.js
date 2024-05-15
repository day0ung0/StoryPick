import React from "react";
import styles from "../styles/login.module.css"

function Login() {
    return(
        <div className={styles.wrapper}>
        <h2>로그인</h2>
        <div className={styles.item_wrapper}>
            <div>ID</div><input type="text" placeholder="ID"/>
        </div>

        <div className={styles.item_wrapper}>
            <div>PWD</div><input type="password" placeholder="PWD"/>
        </div>

        <div className={styles.item_wrapper}>
            <button>로그인</button>
        </div>
    </div>

    );
}

export default Login;