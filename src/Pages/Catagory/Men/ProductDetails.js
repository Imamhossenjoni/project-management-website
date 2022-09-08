import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ProductDetails = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const { id } = useParams();
    const [depend, setDepend] = useState({});

    const [minimumError, setMinimumError] = useState(false);
    const [detail, setDetail] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/mens/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [depend, id])

    //handleOrder
    const handleOrder = event => {
        event.preventDefault();
        const name = event.target.name?.value;
        const email = event.target.email?.value;
        const product = detail?.name;
        const order = event.target.order?.value;
        const mobile = event.target.mobile?.value;
        const address = event.target.address?.value;
        const total = order * parseInt(detail?.price);
        const orderInfo = { name, email, product, order, mobile, address, total }
        fetch(`http://localhost:5000/order`, {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                // setDepend(data);
                toast('Order Successfully');
                alert('Your order Successfully')
                event.target.reset();
            })

        const stockAvailable = parseInt(detail?.available);
        const available = stockAvailable - order;
        const latestAvailable = { available: available }
        //update the data
        fetch(`http://localhost:5000/mens`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(latestAvailable)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saying from update', data);
                setDepend(data);
            })
    }
    const handleMinimumOrder = event => {
        const order = event.target.value;
        console.log(order)
        if (order<250) {
            setMinimumError('You must need to order 250 or up');
        }
        else if (order >detail?.available) {
            setMinimumError('Sorry Bro! Your order value has our stock limit.')
        }
        else {
            setMinimumError('');
        }
    }
    return (
        <div className='flex justify-center space-between grid lg:grid-cols-4 sm:grid-cols-2 gap-5 py-10'>
            <div></div>
            <div className='flex items-center justify-center my-10'>
                <div class="card w-96 bg-base-100 shadow-2xl">
                    <figure><img src={detail?.img} style={{ height: '150px' }} className='my-2' alt="Shoes" /></figure>
                    <div class="card-body text-xl text-left">
                        <h2 class="text-2xl font-bold">{detail?.name}</h2>
                        <p className=''>Price:{detail?.price}</p>
                        <p>Available:{detail?.available}</p>
                        <p>minimum Order:{detail?.minimum}</p>
                        {/* <div class="card-actions justify-end">
                        <button onClick={() => navigate(`/men/${detail._id}`)} class="btn btn-sm btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
            </div>
          
            <div className='flex justify-center items-center '>
                <div class="card card-compact w-96 bg-base-100 shadow-xl py-6">
                    <form onSubmit={handleOrder}>
                        <h2 className='text-3xl text-info py-3 font-bold my-3'>Please Fill Up Form</h2>
                        <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="email" placeholder="abc @gmail.com" name='email' value={user?.email} class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="text" placeholder="Your Selected Product" name='product' value={detail?.name} class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="number" placeholder="Minimum 250 or than order" name='order' onChange={handleMinimumOrder} class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="number" placeholder="Mobile Number" name='mobile' class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="text" placeholder="Your Address" name='address' class="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <span className='text-red-500 text-left'>{minimumError}</span>
                        <input type="submit" disabled={minimumError}  value='Order Now' placeholder="Type here" class="input bg-info text-white font-bold text-xl input-bordered w-full max-w-xs mt-2" /><br />
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default ProductDetails;