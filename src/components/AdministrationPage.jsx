import React , {useState} from 'react';

import "../resources/styles/componentStyle/AdminPage.css"
import CrudTable from "./CrudTable";

function AdministrationPage(){

    // const [tableDatas, setTableDatas] = useState([]);

    const dummy = [
        {
            id: 0,
            courseName: 'Java',
        },
        {
            id: 1,
            courseName: 'PHP',
        },
        {
            id: 2,
            courseName: 'Python',
        },
        {
            id: 3,
            courseName: 'C#',
        },
    ]

    const col = ['id', 'courseName', 'actions']

    return (
        <div className="admin-page-wrapper">
            <div className="admin-sidebar-wrapper">
                <ul className="admin-sidebar-list">
                    <li className="admin-sidebar-list-item">
                        <a className="admin-sidebar-link">General</a>
                    </li>
                    <li className="admin-sidebar-list-item">
                        <a className="admin-sidebar-link">Course</a>
                    </li>
                    <li className="admin-sidebar-list-item">
                        <a className="admin-sidebar-link">User</a>
                    </li>
                    <li className="admin-sidebar-list-item">
                        <a className="admin-sidebar-link">Reports</a>
                    </li>
                </ul>
            </div>
            <div className="admin-content">
                <h1 className="admin-content-heading">Heading</h1>
                <div className="admin-content-header" style={{display: 'flex', justifyContent: 'space-between', marginTop: '16px'}}>
                    <div>
                        <span>Tìm kiếm</span>
                        <input className="admin-content-search"></input>
                    </div>
                    <button className="admin-btn-create">Create</button>
                </div>
                <CrudTable data={dummy} columns={col}/>
            </div>
        </div>
    )
}

export default AdministrationPage;