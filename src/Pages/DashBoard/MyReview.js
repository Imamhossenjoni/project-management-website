import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import {useAuthState}from 'react-firebase-hooks/auth'

const MyReview = () => {
    const [user] = useAuthState(auth);
    const handleSendReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const review = event.target.review.value;

        const sendReview = { name, email, img, review }
        console.log(sendReview);
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(sendReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Successfully send your review')
                alert('Your Review successfully send')
                event.target.reset();
            }

            )
    }
    return (
        <div className='bg-base-100 justify-center'>
            <h2 className='text-2xl py-3 text-info'>
                {
                    `Hello ${user && user.displayName ? user.displayName : "Mr/Ms"},Please Give Your Review here:`

                }
            </h2>
            <form onSubmit={handleSendReview} className='py-7'>
                <input type="text" name='name' placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs " required /><br />
                <input type="email" name='email' placeholder="abc @ gmail.com" value={user?.email} className="input input-bordered input-lg w-full max-w-xs mt-2 " required /><br />
                <input type="text" name='img' placeholder="Please Give Your Image url" className="input input-bordered input-lg w-full max-w-xs mt-2" required /><br />
                <textarea type='text' name='review' placeholder={user ? ` Dear ${user?.displayName}. Please Write Your Review ...` : `Dear Mr/Ms. Please Write Your Message...`} cols='42' rows='5' className=' rounded border w-full max-w-xs mt-2 text-center' required></textarea><br />
                <input type="submit" value='Send' className="input input-bordered btn btn-info input-lg w-full  text-white hover:bg-info hover:text-white hover:bg-secondary max-w-xs font-bold uppercase mt-2" /><br />
            </form>
        </div>
    );
};

export default MyReview;