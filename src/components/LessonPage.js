import '../resources/styles/componentStyle/LessonPage.css'

function LessonPage(props) {
    


    return (
        <>
            <div className="lesson-wrap">
                <div className="lesson-player">
                    <video id="lesson-player-video">
                        <source src="url(https://www.youtube.com/watch?v=3ykeMrCBmUs)"/>
                    </video>
                </div>

            </div>
        </>
    )
}

export default LessonPage;