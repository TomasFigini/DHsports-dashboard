import React,{ useEffect, useState} from "react";

function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/users/api')
        .then(response => response.json())
        .then(users => {
            console.log(users)
            setUsers(users)})
        .catch(error => console.log(error))
    },
    [])
}

export default Users;