import "../resources/styles/componentStyle/LessonDescription.css"

import {useState} from 'react'
import LessonDocument from "../subComponents/LessonDocument"
import LessonComment from "../subComponents/LessonComment"

function LessonDescription() {

    const [contentRender, setContentRender] = useState(<LessonDocument/>)

    return (
        <div className="desc-wrapper">
            <ul className="desc-navigation">
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonDocument/>)}}>Documents</li>
                <li className="desc-nav-item" onClick={(e)=>{setContentRender(<LessonComment/>)}}>Comments</li>
            </ul>
            <div className="desc-content">
                {contentRender}
            </div>
        </div>
    )
}

export default LessonDescription;