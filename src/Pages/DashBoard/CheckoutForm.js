import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { total, email, _id } = order;
    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'Post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [total])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error?.message);
        } else {
            // console.log(paymentMethod);
            setCardError('');
            setTransactionId(paymentMethod.id);
            // ('tefhghgh',paymentMethod.id.id);
        }
        setSuccess('')
        setProcessing(true);
        //confirm cardpayment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        } else {
            setCardError('');
            console.log(paymentIntent);
            setSuccess('Congrats! Your Payment is success');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);

            //
            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-success my-4' type="submit" disabled={!stripe || transactionId}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <p className='text-success'>{success}</p>}
            {transactionId && <div>
                <p className='text-red-500 text-center text-xl'>Congrats Man</p>
                <p className='text-success text-xl text-center'>transactionId :<span className='text-red-500'>{transactionId}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;