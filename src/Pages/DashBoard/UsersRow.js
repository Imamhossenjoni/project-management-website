import React, { useEffect } from 'react';
import { resolvePath } from 'react-router-dom';

const UsersRow = ({ user }) => {
    const { email, role } = user;
    
    //make admin
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UsersRow;