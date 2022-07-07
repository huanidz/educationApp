import "../resources/styles/subComponentStyle/LessonComment.css"
import "../resources/styles/componentStyle/ExamPage.css"

function LessonExam(props) {

    const dummyExams = ['bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.','bai viet nay rat la hay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti.',
    'Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis.', 'Praesent ultricies sed leo non mollis. Phasellus et felis aliquet, fringilla nulla eget, rhoncus lacus. Sed nec sollicitudin elit, mattis pulvinar ipsum.'];

    return (
        <div className="exam-wrapper">
            <div className="exam-list">
                {dummyExams.map((exam, index)=> {
                    return <Question questionName={exam} id={index}/>
                })}
            </div>
        </div>
    )
}

export default LessonExam;

// Question Component
function Question(props){
    return(
        <div className="question-box">
            <h3 className="question-name">{props.questionName}</h3>
            <ul>
                <li><input type="radio" name={`question-${props.id}`}/>answer 1</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 2</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 3</li>
                <li><input type="radio" name={`question-${props.id}`}/>answer 4</li>
            </ul>
        </div>
    )
}