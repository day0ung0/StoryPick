import React from "react";
import { useHistory } from "react-router-dom"


function Major() {
    const history = useHistory();
    const {stuDept, stuGrade } = props;

    return(

    <div>
        <div>학과 : {stuDept}</div>
        <div>학년 : {stuGrade}</div>
        <div>책 이름1</div>
        <div>책 이미지1</div>
        <div>책 이름2</div>
        <div>책 이미지2</div>

    </div>


    );
}

export default Major;