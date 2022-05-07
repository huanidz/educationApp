import "../resources/styles/subComponentStyle/LessonDocument.css"

function LessonDocument(props) {

    const dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dictum tortor pretium facilisis. Phasellus vehicula congue ex eu aliquam. Suspendisse potenti. Curabitur mattis enim sit amet turpis tempus, et fringilla dolor finibus. Ut sit amet tristique arcu, ut scelerisque felis. Curabitur augue risus, venenatis id ex at, laoreet facilisis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nunc risus, aliquet ac posuere aliquam, pulvinar ornare diam. Integer in auctor nisl. Donec quis tellus a tortor cursus vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra metus nulla. Vivamus nec est et odio viverra lacinia. Phasellus at mollis nisi, sit amet pulvinar arcu. Sed finibus, augue a scelerisque sollicitudin, ex sem vehicula purus, ut fermentum justo est a enim. Curabitur non dapibus tortor, eget accumsan lacus.";

    return (
        <div className="document-wrapper">
            <p className="document-content">{dummy}</p>
        </div>
    )
}

export default LessonDocument;