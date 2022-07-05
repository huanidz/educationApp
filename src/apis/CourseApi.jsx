import axios from "axios";
import { useNavigate } from "react-router-dom";
import CourseAction from "../components/CourseComponents/CourseAction";
import baseUrl from "./common";

async function getAllCourse(){
    return await axios.get(baseUrl+"course", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((response)=>{
        return response.data;
    })
}

async function getCourseById(id){
    return axios.get(baseUrl+"course/"+id, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(res=>res.data);
}


export default getCourseById;