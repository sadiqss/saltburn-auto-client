import React, { useEffect, useState } from 'react';
import Product from './Product';
import useParts from '../../hooks/useParts';

const Products = () => {
    const [parts, setParts] = useParts();
    // const [parts, setParts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/parts')
    //         .then(res => res.json())
    //         .then(data => setParts(data));
    // }, [])
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <Product
                        key={part._id}
                        part={part}
                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Products;