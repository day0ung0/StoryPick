import React from "react";
import Item from "./Item";
import styles from "../styles/itembox.module.css"

function ItemBox() {
    return(

        <div className={styles.wrapper}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default ItemBox;