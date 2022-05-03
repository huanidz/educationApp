import '../resources/styles/componentStyle/HexagonCard.css'
import '../resources/styles/globalStyle/common.css'

function HexagonCard (props) {
    // ${props.isLeft ? 'is-left' : 'is-right'}
    // console.log(props.isLeft);
    return (
        <div className={`hex-card-wrapper ${props.isLeft ? 'justify-content-flex-start' : 'justify-content-flex-end'}`}>
            <div className={`hex-card hex-card-${props.size}`}>
                <div className={`hex-card-squarebox ${props.isLeft ? 'is-left' : 'is-right'}`}>

                </div>
            </div>
        </div>
    )
}

export default HexagonCard;