import React from "react";
import { useState } from "react";
import "../resources/styles/componentStyle/ExamPage.css";

function ExamPage(){

    const [answerChoose, setAnswerChoose] = useState([]);

    return(
        <div className="exam-page">
            <h1 className="exam-page-heading">Lesson name</h1>
            <div className="exam-area">
                <Question id={1}/>
                <Question id={2}/>
                <Question id={3}/>
                <Question id={4}/>
                <Question id={5}/>
                <Question id={6}/>
            </div>
            <div className="exam-action">

            </div>
            <div style={{
                'minHeight':'54px',
                'textAlign':'center',
                'marginTop':'36px',
                'color':'#ccc',
                'userSelect':'none'
            }} className="empty-bottom">huyhuanEducationApp Contact@google.com</div>
        </div>
    )
}

export default ExamPage;

// Question Component
function Question(props){
    return(
        <div className="question-box">
            <h3 className="question-name">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ?</h3>
            <ul>
                <li><input type="radio" name={`question-${props.id}`}/>answer 1</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 2</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 3</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 4</li>
            </ul>
        </div>
    )
}