import React from 'react';

const SingleReviews = ({ singleReview}) => {
    const { name, email, review, img } = singleReview;
    return (
        <div>
            <div class="card w-96 bg-neutral shadow-2xl">
                <div class="avatar justify-center  items-center my-5 margin-auto">
                    <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='img' />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-info font-bold">{name}</h2>
                    <p className='text-sm text-base-300 font-bold'>{email}</p>
                    <q className='text-sm text-base-100'>{review}</q>
                </div>
            </div>
        </div>
    );
};

export default SingleReviews;