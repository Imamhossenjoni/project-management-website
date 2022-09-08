import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
    /////use for reactQuery
    // const { data:users, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5000/user`)
    //     .then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h3 className='text-info text-3xl text-center font-bold'>Total Users:{users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users?.map(user=><UsersRow key={user?._id} user={user}></UsersRow>)}
                    </tbody>
                </table>
            </div>

        </div>


    );
};

export default AllUsers;