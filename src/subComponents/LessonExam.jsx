import "../resources/styles/subComponentStyle/LessonComment.css"
import "../resources/styles/componentStyle/ExamPage.css"
import { useEffect, useState } from "react";
import axios from "axios";

function LessonExam(props) {

    const dummyExams = ['bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.','bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.'];

    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        setDatas(props.data);
    },[props.data, props.lessonid])

    return (
        <div className="exam-wrapper">
            <div className="exam-list">
                {datas.map((exam)=> {
                    return <Question questionName={exam.nameQuestion} id={exam.id}/>
                })}
            </div>
        </div>
    )
}

export default LessonExam;

// Question Component
function Question(props){

    const [answers, setAnswers] = useState([{}]);

    useEffect(()=>{
        axios.get(`https://huy-huan.herokuapp.com/question/${props.id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response)=>{
            setAnswers(response.data.listAnswer);
        })
        
    }, [props.id])

    const handleCorrect = (e) => {

    }

    const handleInCorrect = (e) => {

    }

    return(
        <div className="question-box">
            <h3 className="question-name">{props.questionName}</h3>
            <ul>
                {answers.map((ans)=>{
                    return ans.is_Right ? <li><input style={{'accentColor':'green'}} type="radio" name={`question-${props.id}`}/>{ans.nameOptions}</li>
                    : <li><input style={{'accentColor':'red'}} type="radio" name={`question-${props.id}`}/>{ans.nameOptions}</li>
                })}
                {/* <li><input type="radio" name={`question-${props.id}`}/>answer 1</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 2</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 3</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 4</li> */}
            </ul>
        </div>
    )
}