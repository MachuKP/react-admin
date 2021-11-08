import { useState } from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function UserLIst() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'User',
          width: 150,
          renderCell: (params) => {
            return (
                <div className="userListItem">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          type: 'string',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
          width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
