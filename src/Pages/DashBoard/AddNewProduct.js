import React from 'react';

const AddNewProduct = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const price = event.target.price.value;
        const item = {};
        fetch("http://localhost:5000/mens", {
            // https://i.ibb.co/X5YPPNf/15s-du1087tu-01-228x228.jpg
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your services added')
                console.log(data);

            })
    }
    return (
        <div className=''>
            <h2 className='py-3 font-bold text-3xl text-info  py-5 '>Please Add New Items: </h2>
            <div className='justify-center'>
                <form onSubmit={handleAddItem}>
                    <input type="text" placeholder="Product Name" name='name' class="input input-bordered my-2 w-full max-w-xs " /><br />
                    <input type="number" placeholder="Enter Product Price" name='price' class="input input-bordered w-full my-2 max-w-xs " /><br />
                    <input type="number" placeholder="minimum" name='available' class="input input-bordered w-full my-2 max-w-xs " /><br />
                    <input type="number" placeholder="Enter Your Minimum order" name='minimum' class="input input-bordered w-full my-2 max-w-xs " /><br />
                    <input type="text" placeholder="Enter Product img URL" name='img' class="input input-bordered w-full my-2 max-w-xs " /><br />
                    <input type="submit" value='Add Item' class="input input-bordered btn-info text-white text-2xl text-white font-bold w-full my-2 max-w-xs " /><br />
                </form>
                
            </div>
        </div>
    );
};

export default AddNewProduct;