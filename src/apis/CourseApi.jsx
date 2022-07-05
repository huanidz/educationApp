import axios from "axios";
import baseUrl from "./common";

function getAllCourse(){
    axios.get(baseUrl+"course", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((response)=>{
        console.log(response);
    })
}

export default getAllCourse;