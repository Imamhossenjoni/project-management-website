import React from 'react';
import { Link } from 'react-router-dom';
import women from '../../img/women-cata.webp'
import man from '../../img/men-cata.webp'
import shoes from '../../img/shoes-cata.webp'
import watch from '../../img/pink-watched.jpg'

const Catagory = () => {
    // style={{ backgroundImage: `url(${img})`
    return (
        <div>
            <h2 className='py-12 text-info text-5xl font-bold'>Available Catagory</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1' style={{ height: '500px' }}>
                <div style={{ backgroundImage: `url(${women})`, backgroundRepeat: 'no-repeat', height: '500px', backgroundSize: 'cover', }}>
                    <button className='btn my-12 btn-outline'>Women</button>
                </div>

                <div className='grid lg:grid-cols-2  sm:grid-cols-2 '>
                    <div className=''>
                        <div style={{ backgroundImage: `url(${man})`, backgroundRepeat: 'no-repeat', height: '250px', backgroundSize: 'cover', }}>
                            <button style={{marginLeft:'30px'}} className='btn btn-outline mb-0 mt-12'><Link to='/men'>Men</Link></button>
                        </div>
                        <div style={{ backgroundImage: `url(${shoes})`, backgroundRepeat: 'no-repeat', height: '250px', backgroundSize: 'cover', }}>
                            <button className='btn btn-outline  my-12 ml-2'>Shoes</button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${watch})`, backgroundRepeat: 'no-repeat', height: '500px', backgroundSize: 'cover', }}>
                        <button  className='btn btn-outline  my-12 ml-2'>Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;