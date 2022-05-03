import '../resources/styles/componentStyle/SexyHeading.css'
import '../resources/styles/globalStyle/common.css'

function SexyHeading (props) {

    const CSS_inline = props.style;

    return (
        <div className={`sexyheading-container`} style={CSS_inline}>
            <h1 className="sexyheading-content">
                {props.children}
            </h1>
        </div>
    )
}

export default SexyHeading;