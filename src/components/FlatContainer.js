import '../resources/styles/componentStyle/HexagonCard.css'
import '../resources/styles/componentStyle/FlatContainer.css';
import '../resources/styles/globalStyle/common.css'

function FlatContainer({Children}) {
    return (
        <>
            <div className="flat-container">
                <div className="flat-container-buying">
                    <div className="flat-container-buying-image">
                        {/* Image */}
                    </div>
                    <p className="flat-container-buying-text">
                        This is text to show,<br/> This is text to show, This is text to show
                    </p>
                    <button className="flat-container-buying-button">Bắt đầu học</button>
                </div>
                <div className="flat-container-hex-wrapper margin-32">
                    <HexagonCard isLeft size="150"/>
                    <HexagonCard isRight size="150"/>
                    <HexagonCard isLeft size="150"/>
                    <HexagonCard isRight size="150"/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#143F6B" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#00529a" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path fill="url(#grad1)" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            
        </>
    )
};

function HexagonCard (props) {
    return (
        <div className={`hex-card-wrapper ${props.isLeft ? 'justify-content-flex-start' : 'justify-content-flex-end'}`}>
            <div className={`hex-card hex-card-${props.size}`}>
                <div className={`hex-card-squarebox ${props.isLeft ? 'is-left' : 'is-right'}`}>

                </div>
            </div>
        </div>
    )
};

export default FlatContainer;