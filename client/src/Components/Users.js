import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const obj = await axios.get('/users/')
            setUsers(obj.data);
        }
        loadUsers();
    }, [])

    return(
        <ul>
            {users.map((user) =>
                <li key={ user.id }>{ user.name }</li>
            )}
        </ul>
    )
}

export default Users;