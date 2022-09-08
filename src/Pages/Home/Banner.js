import React from 'react';
import img from '../../img/winter-woment-tshirt.jpg'

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 bg-base-300 gap-5 py-10 '>
            <div className='mt-12  text-left ml-10'>
                <h2 className='text-5xl mt-10'>Hello Guys,</h2>
                <h2 className='text-5xl font-bold'>Welcome to you here</h2>
                <h2 className='text-3xl  pt-8'>Our Winter Collection Available Now.Please click the button for visit our new collection</h2>
                <button className='btn btn-outline bg-info text-white  mt-5'>Explore Now</button>
            </div>
            <div className=''>
                <img src={img} style={{width:"450px"} } alt=''></img>
            </div>
        </div>
    );
};

export default Banner;