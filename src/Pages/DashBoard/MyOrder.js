import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrder = () => {
    const {id}=useParams();
    const [test,setTest]=useState([]);
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user?.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user,test]);
    const handleDelete=id=>{
        const proceed=window.confirm('Are You Sure?');
        if(proceed){
            fetch(`http://localhost:5000/order/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast('Your item deleted');
                alert('Deleted Successfully');
                setTest(data);
            })
        }
    }
    return (
        <div>
            <h2>{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Order/No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order Item</th>
                            <th>Order Ps</th>
                            <th>Total Bill</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.product}</td>
                            <td>{order?.order}</td>
                            <td>{(order.total && !order?.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-xs'>Pay Now</button></Link>}
                            {(order?.total && order.paid)&& <span className='text-success'>Paid</span>}
                            </td>
                            <td>{order.mobile}</td>
                            <td>{order.address}</td>
                            <td><button className='btn btn-sm' onClick={handleDelete(order?._id)}>Delete</button></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;