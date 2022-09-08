import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const navigate=useNavigate();
    const {img,price,name,available,minimum,_id}=product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={img} style={{height:'150px'}} className='my-2' alt="Shoes" /></figure>
                <div class="card-body text-xl text-left">
                    <h2 class="text-2xl font-bold">{name}</h2>
                    <p className=''>Price:{price}</p>
                    <p>Available:{available}</p>
                    <p>minimum Order:{minimum}</p>
                    <div class="card-actions justify-end">
                        <button onClick={()=>navigate(`/men/${_id}`)} class="btn btn-sm btn-info text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;