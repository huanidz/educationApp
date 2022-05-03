import '../resources/styles/componentStyle/SimpleCard.css'
import '../resources/styles/globalStyle/common.css'

function SimpleCard (props) {

    const CSS_inline = {
        width: props.width,
    }

    const dummyData = {
        img: 'https://www.svgrepo.com/show/383742/security-protection-fire-alarm.svg',
        heading: 'Unknown Heading',
        text: 'This is temporary text to show It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
    }

    const dataPassing = props.data;

    return (
        <>
            <div className="card-wrapper" style={CSS_inline}>
                <div className="card-content flex-column-container">
                    <div className="card-img" style={{
                        backgroundImage: `url(${dataPassing.img || dummyData.img})`
                    }}></div>
                    <div className="card-heading">{dataPassing.heading || dummyData.heading}</div>
                    <div className="card-text">{dataPassing.text || dummyData.text}</div>
                </div>
            </div>
        </>
    )
}

export default SimpleCard;