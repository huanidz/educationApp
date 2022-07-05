import React, { useState } from 'react'
import ReactDOM from 'react'
import "../../resources/styles/componentStyle/CourseAction/CourseAction.css"
import "../../resources/styles/globalStyle/common.css"
import Dropdown from "../Dropdown"
import EditAndDeleteButton from '../../subComponents/EditAndDeleteButton'

function CourseAction({actionType}) {

    const [action, setAction] = useState(actionType);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="course-act-wrapper">
            <div className='course-act-header'>
                <button className='course-act-btn-back'>Back</button>
                <h1 className='course-act-courseName'>Create Course</h1>
            </div>
            <div className='course-act-input-area'>
                <div className='course-act-input-fields'>
                    <label className='ca-input-label' htmlFor="inputCourseName">Course Name:</label>
                    <input className='ca-ip-text' name='inputCourseName' placeholder='enter course name here...'></input>

                    <label className='ca-input-label'>Description</label>
                    <textarea className='ca-ip-text' placeholder='enter course desc here...'></textarea>

                    <label className='ca-input-label'>Set image</label>
                    <input className='ca-ip-text' placeholder='enter image url...'></input>

                    <label className='ca-input-label'>Enable Status</label>
                    <div style={{display:'flex'}}>
                        <input type="radio" name='courseStat'/>Enable
                        <input type="radio" name='courseStat'/>Disable
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                    <div className='ca-course-img'></div>
                    <span style={{textAlign:'center'}}>course image preview</span>
                </div>
                <div className='ca-course-detail'>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail onClickEvent={()=>{setModalOpen(true);console.log("I click here");}} courseId isNew/>
                </div>
                <div className='ca-btn-main'>
                    <CourseActionButton actionType={action}/>
                </div>
            </div>
            <CourseDetailCreation isOpen={modalOpen}/>
        </div>
    )
}

export default CourseAction;

function CourseActionButton({actionType, courseId}) {
    return (
        <div>
            <button className='cab-btn' style={{marginRight:'8px'}}>Create</button>
            <button className='cab-btn'>Create &amp; Edit</button>
        </div>
    )
}

function CourseDetail({courseId, isNew, onClickEvent}) {

    //Call api from courseId to get course Data
    const data = ['Lesson 1','Lesson 2','Lesson 3','Lesson 4','Lesson 5'];

    if (!isNew)
        return (
            <>
                <Dropdown 
                    data={data} 
                    heading={"Tempo"} 
                    HeadingOptionalItem={<EditAndDeleteButton disableEdit style={{marginRight:'8px'}}/>}
                    ChildOptionalItem={<EditAndDeleteButton style={{marginRight:'8px'}}/>}
                    IsReadyToHaveChild
                />
            </>
        );
    else
        return (
            <>
                <Dropdown HeadingOnClickCustomEvent={onClickEvent} heading={"Click Here to Create new Chapter..."}/>
            </>
        );
}

function CourseDetailCreation({isOpen}){
    if(isOpen){
        return (
            <div className='cdc-modal'>
                <div style={{margin:'16px 0 0 16px'}}>Create Lesson</div>
                <div style={{margin:'16px'}} className='course-act-input-area'>
                    <div className='course-act-input-fields'>
                        <label htmlFor=''>Lesson Name</label>
                        <input className='ca-ip-text' placeholder='Enter Lesson Name...'/>

                        <label htmlFor=''>Lesson Name</label>
                        <textarea placeholder='Enter Lesson Desc...'/>

                        <label htmlFor=''>Lesson Name</label>
                        <input className='ca-ip-text' placeholder='Enter Lesson Video URl...'/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                        <div className='cdc-lesson-video'></div>
                        <span style={{textAlign:'center'}}>lesson video preview</span>
                    </div>
                </div>

                
                <div style={{padding:'-8px 16px 0'}} className='cdc-questing-detail'>
                    <label style={{paddingBottom:'8px'}} htmlFor=''>Questing</label>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail courseId/>
                    <CourseDetail courseId isNew/>
                </div>
                <div className='ca-btn-main'>
                    <CourseActionButton/>
                </div>
            </div>
        )
    }
    else return null;
}
