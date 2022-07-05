import React from "react";
import "../resources/styles/componentStyle/ExamPage.css";

function ExamPage(){
    return(
        <>
            <div className="exam-page">
                <h1 className="exam-page-heading">Lesson name</h1>
                <div className="exam-area">
                    <Question/>
                </div>
            </div>
        </>
    )
}

export default ExamPage;

function Question(){
    return(
        <>
            <div className="question-box">
                <h3>Question 1</h3>
                <ul>
                    <li>answer 1</li>
                    <li>answer 2</li>
                    <li>answer 3</li>
                </ul>
            </div>
        </>
    )
}