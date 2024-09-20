import React,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../../datas'
import {Link} from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './UsersList.css'
export default function UsersList() {

   const [userDatas,setUserDatas]=useState(userRows)
     
    const userDelete=(id)=>{
      setUserDatas(userDatas.filter(user=>user.id != id))
    }
      const columns=[
        {
          field:'id',
          headerName:'ID',
          width:90,
        },
        {
          field:'user',
          headerName:'User',
          width:200, 
          renderCell:(params)=>{
            return (
           
              <Link to='/' className='link'>
             <div className='userListUser'>
              <img src={params.row.avatar} className='userListImg' alt="" />
              {params.row.username}
             </div>
             </Link>
         
            )
          }

        },
        {
          field:'email',
          headerName:'Email',
          width:200,
        },
        {
          field:'status',
          headerName:'Status',
          width:120,
        },
        {
          field:'transactions',
          headerName:'Transaction',
          width:160,
        },
        {
          field:'action',
          headerName:'Action',
          width:150,
          renderCell:(params)=>{
            return(
              <div className='action'>
              <Link to={`/user/${params.row.id}`} className='link' >
              <button className='userListEdit'>Edit</button>
              </Link>
              <DeleteOutlineIcon
              className='userListDelete'
              onClick={()=>userDelete(params.row.id)}
              />
              </div>

            )
          }
        },
      ]

  return (
    <div className='userList'>
     <DataGrid
      rows={userDatas}
      columns={columns}
      disableRowSelectionOnClick
      pageSize={2}

     />
    </div>
  )
}
