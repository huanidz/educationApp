import '../resources/styles/componentStyle/FreeContainer.css'
import '../resources/styles/globalStyle/common.css'

function FreeContainer (props){

    const CSS_inline = props.style;

    return (
        <>
            <div className={`free-container ${props.className}`} style={CSS_inline}>
                {props.children}
            </div>
        </>
    )
}

export default FreeContainer;