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
    const [listChapter, setListChapter] = useState([]); 
    const [listLesson, setListLesson] = useState([]);
    const [videoUrl, setVideoUrl] = useState("")

    useEffect(()=>{
        axios.get(`https://huy-huan.herokuapp.com/course/${courseid}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res=>{

            setCourseName(res.data.nameCourse);
            setListChapter(res.data.listChapter);

            res.data.listChapter.forEach((chapter, index)=>{
                axios.get(`https://huy-huan.herokuapp.com/chapter/${chapter.id}`,{headers: {
                    "Access-Control-Allow-Origin": "*"
                }}).then((response)=>{
                    setListLesson((prev) => {
                        var ids = new Set(prev.map(d => d.id));
                        var merged = [...prev, ...response.data.listLesson.filter(d => !ids.has(d.id))];
                        return merged;
                    });
                }).catch((e)=>{
                    console.log(e);
                })
            });

            return res;
        })
        .then(res=>{
            axios.get(`https://huy-huan.herokuapp.com/lesson/${lessonid}`,{headers: {
                "Access-Control-Allow-Origin": "*"
            }})
            .then((response)=>{
                setVideoUrl(response.data.linkvideo);
                console.log(response.data.linkvideo);
            })
        });

    },[courseid, lessonid])


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
                        {
                            listChapter.map((chapter)=>{
                                var lessonInside = listLesson.filter((lesson)=>{
                                    return lesson.chapter_id === chapter.id;
                                })
                                return <DropdownLearn key={chapter.id} heading={chapter.nameChapter} data={lessonInside} courseId={courseid} />
                            })
                        }
                    </div>
                </div>

                <div className="lesson-video-area">
                    <div className="lesson-video">
                        <Iframe 
                            // url="http://www.youtube.com/embed/xDMP3i36naA" 
                            url={videoUrl}
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