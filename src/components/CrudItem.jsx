import React from 'react'
import "../resources/styles/subComponentStyle/CrudItem.css"

function CrudItem() {
    return (
        <div className="crud-item-wrapper">
            <h3 className="crud-item-id">1</h3>
            <h3 className="crud-item-name">temp name</h3>
            <div className="crud-item-action">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default CrudItem