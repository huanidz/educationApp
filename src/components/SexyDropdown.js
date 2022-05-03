import '../resources/styles/componentStyle/SexyDropdown.css'
import '../resources/styles/globalStyle/common.css'

function SexyDropdown(props) {

    const CSS_inline = props.style;

    const data = props.data;

    return (
        <>
            <div className="dropdown-wrapper" style={CSS_inline}>
                <div className="dropdown-heading bor-radius-8">{data.heading || "Temporary"}</div>
                <ul className="dropdown-list">
                    {
                        data.item.map((item, index) => {
                            return <li key={index} className="dropdown-list-item bor-radius-8" style={{
                                animation: `dropdown-animation 0.1s ease-in-out ${index/11}s forwards`
                            }}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SexyDropdown;