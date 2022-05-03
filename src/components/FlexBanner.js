import '../resources/styles/globalStyle/common.css'
import '../resources/styles/componentStyle/FlexBanner.css'

function FlexBanner (props) {

    const CSS_inline = props.style;

    const checkReverse = (CSS_inline.flexDirection === "row-reverse");

    return (
        <>
            <div className="flex-banner bor-radius-8" style={CSS_inline}>
                <div className={`flex-banner-text-wrapper ${checkReverse ? 'align-item-flex-end' : ''}`}>
                    <h1 className={`flex-banner-heading ${checkReverse ? 'text-align-right' : 'text-align-left'}`}>Master Java and Become a Java Developer</h1>
                    <h4 className={`flex-banner-description ${checkReverse ? 'text-align-right' : 'text-align-left'}`}>Sed turpis nibh, eleifend vel enim quis, posuere convallis tortor. Etiam dapibus, ligula a gravida imperdiet, orci arcu volutpat turpis, et ullamcorper</h4>
                    <button className={`flex-banner-button bor-radius-8 ${props.hideButton ? 'display-none' : ''}`} >
                        Xem lộ trình
                    </button>
                </div>
                <div className={`flex-banner-img`} style={{
                        backgroundImage: `url(${props.imgData})`
                    }}></div>
            </div>
        </>
    )
}

export default FlexBanner;