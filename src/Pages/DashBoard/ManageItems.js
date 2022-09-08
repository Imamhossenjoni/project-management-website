import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageItems = () => {
    const { id } = useParams();
    const [products, setProducts] = useProducts();
    const handleDelete = id=> {
        console.log('ki o')
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('clicked', id);
            fetch(`http://localhost:5000/mens/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }

    }
    return (
        <div>
            <div className='manage-products grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    products.map(part => <div className='border mb-5 border-rounded text-left ' key={part._id}>
                        <img style={{ height: '250px' }} src={part?.img} alt=''></img>
                        <h5>Name:{part?.name}</h5>
                        <p>Price (per unit):{part?.price}</p>
                        <p>Available Quantity:{part?.available}</p>
                        <p>Minimum Order:{part?.minimum}</p>
                        <h5><button onClick={()=>handleDelete(part?._id)} className='btn btn-info btn-sm my-3 '>Delete</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItems;