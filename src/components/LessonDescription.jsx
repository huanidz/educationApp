import "../resources/styles/componentStyle/LessonDescription.css"

import {useState} from 'react'
import LessonDocument from "../subComponents/LessonDocument"
import LessonExam from "../subComponents/LessonExam"
import { useEffect } from "react"

function LessonDescription(props) {

    const [contentRender, setContentRender] = useState(<div style={{'margin':'16px', 'fontSize':'1.6rem'}}>Xin chao ban den voi bai hoc</div>)
    const [documentData, setDocumentData] = useState([{}]);
    const [questionData, setQuestionData] = useState([{}]);


    useEffect(()=>{
        setDocumentData(props.documents);
        setQuestionData(props.questions);
        // setContentRender(<div style={{'margin':'16px', 'fontSize':'1.6rem'}}>Xin chao ban den voi bai hoc</div>)
        setContentRender(<LessonDocument data={props.documents}/>)
    },[props.documents, props.questions])

    return (
        <div className="desc-wrapper">
            <ul className="desc-navigation">
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonDocument data={documentData}/>)}}>Documents</li>
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonExam data={questionData}/>)}}>Exam</li>
            </ul>
            <div className="desc-content">
                {contentRender}
            </div>
        </div>
    )
}

export default LessonDescription;