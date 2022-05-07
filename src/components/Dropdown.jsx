import {useState} from 'react'
import '../resources/styles/componentStyle/Dropdown.css'

function Dropdown(props) {

    const [isActive, setIsActive] = useState(false);

    const items = props.data ? props.data : [];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=>{setIsActive(!isActive)}}>{props.heading}</div>
            {isActive && (
                items.map((item)=>{
                    return <div className="dropdown-item">{item}</div>
                })
            )}
        </div>
    )
}

export default Dropdown;