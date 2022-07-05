import React, {useState} from 'react'
import '../resources/styles/componentStyle/Dropdown.css'
import {Link} from 'react-router-dom';

function Dropdown({data, heading, HeadingOnClickCustomEvent, ItemOnClickEvent, HeadingOptionalItem, ChildOptionalItem, IsReadyToHaveChild}) {

    const [isActive, setIsActive] = useState(false);

    const items = data ? data : [];

    return (
        <div className="dropdown">
            <div    style={{display:'flex', justifyContent:'space-between'}} 
                    className="dropdown-btn" 
                    onClick={HeadingOnClickCustomEvent ? HeadingOnClickCustomEvent : (e)=>{setIsActive(!isActive)}}>
                {heading}
                <div className='dropdown-heading-optional-item'>{HeadingOptionalItem}</div>
            </div>
            {isActive && (
                items.map((item,index)=>{
                    return (<>
                        <div style={{display:'flex', justifyContent:'space-between'}} className="dropdown-item">
                            <Link to={`/course/${index}`} >{item}</Link>
                            <div className='dropdown-child-optional-item'>{ChildOptionalItem}</div>
                        </div>
                        {IsReadyToHaveChild && (index + 1 === items.length) ? 
                            <div style={{display:'flex', justifyContent:'space-between', color: '#666'}} className="dropdown-item">
                                Click Here to have child...
                            </div> : null
                        }
                    </>)
                })
            )}
        </div>
        
    )
}

export default Dropdown;