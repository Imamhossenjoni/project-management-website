import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L48NRLXEGLi8pbOdnQMwfBXU7UJzNgJkk13E4BFR2BKlGmSNgI42W9pLrhoA25TVKDshd5ws0rpvJRNVXhlrXuG00CO8kJgqy');
    const { id } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className='items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Pay for {order?.product}</h2>
                    <p>Your have to pay total ${order.total}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl my-12 ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;