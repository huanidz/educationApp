import "../resources/styles/componentStyle/LessonDescription.css"

import {useState} from 'react'
import LessonDocument from "../subComponents/LessonDocument"
import LessonExam from "../subComponents/LessonExam"
import { useEffect } from "react"

function LessonDescription(props) {

    const [contentRender, setContentRender] = useState(<LessonDocument/>)
    const [documentData, setDocumentData] = useState([{}]);


    useEffect(()=>{
        setDocumentData(props.documents);
    },[props.documents])

    return (
        <div className="desc-wrapper">
            <ul className="desc-navigation">
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonDocument data={documentData}/>)}}>Documents</li>
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonExam/>)}}>Exam</li>
            </ul>
            <div className="desc-content">
                {contentRender}
            </div>
        </div>
    )
}

export default LessonDescription;