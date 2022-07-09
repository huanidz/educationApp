import '../resources/styles/componentStyle/LessonPage.css'
import '../resources/styles/globalStyle/common.css'

import DropdownLearn from './DropdownLearn';
import Iframe from 'react-iframe';
import LessonDescription from './LessonDescription';
import NavBar from './NavBar';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function LessonPage(props) {
    
    let {courseid,lessonid} = useParams();
    const [courseName, setCourseName] = useState("");
    const [listChapter, setListChapter] = useState([]); 
    const [listLesson, setListLesson] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");
    const [lessonContent, setLessonContent] = useState([]);
    const [lessonExam, setLessonExam] = useState([]);

    useEffect(()=>{
        

        axios.get(`https://huy-huan.herokuapp.com/course/${courseid}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res=>{
            //Reset state on params change
            setLessonContent([]);
            setLessonExam([]);
            setVideoUrl("");
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
                })
                // .then((res)=>{
                //     listLesson.forEach((lesson)=>{
                //         axios.get(`https://huy-huan.herokuapp.com/lesson/${lesson.id}`,{headers: {
                //             "Access-Control-Allow-Origin": "*"
                //         }})
                //         .then((response)=>{

                //         })
                //     })
                // })
                
                .catch((e)=>{
                    console.log(e);
                });
            });

            return res;
        })
        .then(res=>{
            axios.get(`https://huy-huan.herokuapp.com/lesson/${lessonid}`,{headers: {
                "Access-Control-Allow-Origin": "*"
            }})
            .then((response)=>{
                setVideoUrl(response.data.linkvideo);
                setLessonContent((prev) => {
                    var ids = new Set(prev.map(d => d.id));
                    var merged = [...prev, ...response.data.listContent.filter(d => !ids.has(d.id))];
                    return merged;
                });
                setLessonExam((prev) => {
                    var ids = new Set(prev.map(d => d.id));
                    var merged = [...prev, ...response.data.listQuest.filter(d => !ids.has(d.id))];
                    return merged;
                })
            });

            return res;
        });
        

    },[courseid, lessonid]);

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
                            url={videoUrl.replace("watch?v=","embed/")}
                            width='100%'
                            height='100%' 
                        />
                    </div>
                    <div className="lesson-description">
                        <LessonDescription nameLesson={listLesson.find((lesson)=>{
                            return lesson.id == lessonid;
                        })?.nameLesson} documents={lessonContent} questions={lessonExam} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default LessonPage;