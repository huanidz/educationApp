import React from 'react'

function EditAndDeleteButton({onEditEvent, onDeleteEvent, style, disableEdit, disableDelete}) {

    return (
        <div style={style}>
            {disableEdit ? null : <button style={{marginRight:'4px'}} onClick={onEditEvent}>Edit</button> }
            {disableDelete ? null : <button onClick={onDeleteEvent}>Delete</button>}
        </div>
    )
}

export default EditAndDeleteButton