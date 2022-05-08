import React, { useState } from "react";
import "../resources/styles/componentStyle/CrudTable.css"

function CrudTable ({data, columns}) {

    const [itemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [items] = useState(data);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    //Paging
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    //Handle Prev-Next page
    const PrevButton = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const NextButton = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }

    //Handle Actions API CALL ***
    const handleEditItem = (identifier=null) => {

    }

    const handleDeleteItem = (identifier=null) => {

    }


    return (
        <div>
            <table className="crud-table">
                <thead className="crud-table-head">
                    <tr>
                        {columns.map((col, index) => {
                            return (<td className="crud-table-row-data thead-data" key={index}>
                                {col}
                                </td>)
                        })}
                    </tr>
                </thead>
                <tbody className="crud-table-body">
                        {
                            currentItems.map((item, index) => {
                                return <tr className="crud-table-row" key={index}>
                                    {columns.map((col, i) => {
                                        return <td className="crud-table-row-data tbody-data" key={i}>
                                            {
                                                col !== 'actions' ?
                                                item[col] : <>
                                                    <button className="crud-btn-edit" onClick={handleEditItem}>
                                                        Edit
                                                    </button>
                                                    <button className="crud-btn-delete" onClick={handleDeleteItem}>
                                                        Delete
                                                    </button>
                                                </> 
                                            }
                                        </td>
                                    })}
                                </tr>
                            })
                        }
                </tbody>
            </table>
            <button onClick={PrevButton}>Prev</button>
            <button onClick={NextButton}>Next</button>
        </div>
    )
}

export default CrudTable;