import React from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/item.module.css"
import enjoymokoko from "../img/enjoymokoko.jpg"; 

function Item() {
    return(
        <div className={styles.wrapper}>
            <Link to="/detailItem">
                <img src={enjoymokoko} alt="예시"className={styles.image}/>
            </Link>
            <div>책 이름</div>
        </div>
    );
}

export default Item;