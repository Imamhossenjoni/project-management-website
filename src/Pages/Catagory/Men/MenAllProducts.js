import React from 'react';
import useMensProducts from '../../../hooks/useMensProducts';
import SingleProduct from './SingleProduct';

const MenAllProducts = () => {
    const [mProducts, setMProducts] = useMensProducts();
    return (
        <div>
            <h2 className=' text-center text-info text-5xl my-8 font-bold underline'>Our New Collection</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-8'>
                {mProducts.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)}
            </div>
        </div>
    );
};

export default MenAllProducts;