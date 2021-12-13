import React, { useState } from 'react'
import './userList.scss'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import { userRows } from '../../DummyData';
import {Link} from 'react-router-dom'



export default function UserList() {
  const [data, setData] = useState(userRows)


  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }  


    const columns = [
        { field: 'id',
         headerName: 'ID',
          width: 90 
        },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            )
          },
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'transactions',
          headerName: 'Transaction Volume',
          width: 350,
        },
        // {
        //   field: "action",
        //   headerName: 'Action',
        //   width: 150,
        //   renderCell: (params) => {
        //     return (
        //       <>
        //       <Link to={'/user/' + params.row.id}>
        //       <button className="userListEdit">Edit</button>
        //       </Link>
        //       <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}   />
        //       </>
        //     )
        //   }
        // }
      ];
      
     
    return (
        <div className="userList">
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
