import React, { useEffect, useState } from 'react'
import { getAlluser } from '../service/UserService'

export default function EnquireList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAlluser()
        .then(res => {
          setUsers(res.data)
        })
    },[])
  return (
    <>
    <h1>Enquire List</h1>
    {users?.map((val) =>
        <div key={val.id}> 
            <span>{val.userName}</span>------<span>{val.email}</span>
        </div>
        )}
    </>
  )
}
