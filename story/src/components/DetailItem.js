import React from "react";
import styles from "../styles/detailItem.module.css"
import enjoymokoko from "../img/enjoymokoko.jpg"; 


function DetailItem() {
    return(
        <div className={styles.wrapper}>
            <div><img src={enjoymokoko} alt="모코코다"className={styles.imageDetail}/></div>
            <div>
                <h1>책제목</h1>
                <h3>저자</h3>
                <h4>책 정보..등등..</h4>
                <button>도서신청</button>
            </div>
            
        </div>
    );
}

export default DetailItem;