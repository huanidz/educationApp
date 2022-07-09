import React , {useState, useEffect} from 'react';

import "../resources/styles/componentStyle/AdminPage.css"
import CustomizedTables from './Admin/tablechappter';
import FormDialog from './Admin/cuchapter'

const AdministrationPageChapter = () =>{
    const [data,setData] = useState([]);

    const getData = async () => {
        const res = await fetch("https://huy-huan.herokuapp.com/chapter");
        const datas = await res.json();
        console.log('data', datas);
        setData(datas);
        console.log('a',data)
    }
    if(data.length<1){
        getData();
        }else{
            console.log('cmt1',data);
        }
    useEffect(() => {
    getData();
    },[])


    const handleedit = () =>{
     console.log('handleedit')
    }
    const handledelete = () =>{
        console.log('handledelete')
       }
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
          
                {/* <CrudTable data={dummy} columns={col}/> */}
                <FormDialog reload={getData}/>

                <CustomizedTables handledit={handleedit} handledelete={handledelete} datatb={data}/>
            </div>
        </div>
    )
}

export default AdministrationPageChapter;