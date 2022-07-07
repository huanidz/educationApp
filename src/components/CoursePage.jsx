import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../resources/styles/componentStyle/CoursePage.css';
import "../resources/styles/globalStyle/common.css";
import NavBar from './NavBar';


function CoursePage(props){

    let {courseid} = useParams();
    let navigate = useNavigate();

    const [course, setCourse] = useState({});

    useEffect(()=>{
        axios.get(`https://huy-huan.herokuapp.com/course/${courseid}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response)=>{
            setCourse(response.data);
        });
    },[courseid])

    const toLessonPage = () => {
        if (typeof course.listChapter !== 'undefined' && course.listChapter.length === 0) {
            navigate(`../course/${courseid}/lesson/${0}`);
        }else{
            navigate(`../course/${courseid}/lesson/${course.listChapter[0].id ? course.listChapter[0].id : 0}`);
        }
    }

    return (<>
        <NavBar/>
        <div className="course-page">
            <div className='course-wrapper'>
                <div className='course-name'>{course.nameCourse}</div>
                <div style={{'backgroundImage':`url(${course.image})`}} className='course-image'></div>
                <div className='course-desc'>{course.description}</div>
                <div className='course-btn-wrapper'>
                    <button onClick={toLessonPage} className='btn-learn'>Học</button>
                </div>
            </div>
        </div>
    </>)
}

export default CoursePage;