import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

export default function Users() {
    const[users, setUsers]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=> setUsers(result.data))
        .catch(err=> console.log(err))
    }, [])
  return (
    <div className='justify-content-center align-items-center'>
        <Link to="/createUser" className="btn btn-success"> Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project</th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((user)=>{
                    return <tr>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.project}</td>
                    <td>
                    <Link to={`/update/${user._id}`}> edit</Link>
                    <button>Delete</button>
                    </td>
                    </tr>
                })
               }
            </tbody>
        </table>
    </div>
  )
}
