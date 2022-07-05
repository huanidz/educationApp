import '../resources/styles/componentStyle/LessonPage.css'
import '../resources/styles/globalStyle/common.css'

import DropdownLearn from './DropdownLearn';
import Iframe from 'react-iframe';
import LessonDescription from './LessonDescription';
import NavBar from './NavBar';
import {useParams, useNavigate} from 'react-router-dom';
import getCourseById from '../apis/CourseApi';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function LessonPage(props) {
    
    let {courseid,lessonid} = useParams();
    const [courseName, setCourseName] = useState("");

    useEffect(()=>{
        axios.get("https://huy-huan.herokuapp.com/course/1", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res=>{
            setCourseName(res.data.nameCourse);
        });
    },[])

    const dummyData = [
        {
            sectionId: 0,
            sectionName: "Section 1",
            lessonList: [
                'Lesson 1.1', 'Lesson 1.2', 'Lesson 1.3', 'Lesson 1.4', 'Lesson 1.5'
            ]
        },
        {
            sectionId: 1,
            sectionName: "Section 2",
            lessonList: [
                'Lesson 2.2', 'Lesson 2.2', 'Lesson 2.3', 'Lesson 2.4', 'Lesson 2.5'
            ]
        },
        {
            sectionId: 2,
            sectionName: "Section 3",
            lessonList: [
                'Lesson 3.3', 'Lesson 3.2', 'Lesson 3.3', 'Lesson 3.4', 'Lesson 3.5'
            ]
        },
        {
            sectionId: 3,
            sectionName: "Section 4",
            lessonList: [
                'Lesson 4.3', 'Lesson 4.2', 'Lesson 4.3', 'Lesson 4.4', 'Lesson 4.5'
            ]
        },
        {
            sectionId: 4,
            sectionName: "Section 3",
            lessonList: [
                'Lesson 3.3', 'Lesson 3.2', 'Lesson 3.3', 'Lesson 3.4', 'Lesson 3.5'
            ]
        },
        {
            sectionId: 5,
            sectionName: "Section 3",
            lessonList: [
                'Lesson 3.3', 'Lesson 3.2', 'Lesson 3.3', 'Lesson 3.4', 'Lesson 3.5'
            ]
        },
        {
            sectionId: 6,
            sectionName: "Section 3",
            lessonList: [
                'Lesson 3.3', 'Lesson 3.2', 'Lesson 3.3', 'Lesson 3.4', 'Lesson 3.5'
            ]
        },
    ]

    return (
        <>
            <NavBar/>
            <div className="lesson-wrap">
                <div className="lesson-list-area">
                    <div className="lesson-progression-track">
                        <h2 className="lesson-course-name">{courseName}</h2>

                    </div>
                    <div className="lesson-video-list">
                        {dummyData.map((section)=>{
                            return <DropdownLearn key={section.sectionId} heading={section.sectionName} data={section.lessonList}/>
                        })}
                    </div>
                </div>

                <div className="lesson-video-area">
                    <div className="lesson-video">
                        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA" 
                            width='100%'
                            height='100%' 
                        />
                    </div>
                    <div className="lesson-description">
                        <LessonDescription />
                    </div>
                </div>

            </div>
        </>
    )
}

export default LessonPage;