import React, { useState, useEffect } from "react";

function Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} --- {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users;