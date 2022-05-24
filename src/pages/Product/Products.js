import React, { useEffect, useState } from 'react';
import engine from '../../assets/parts/engine.jpg';
import wheel from '../../assets/parts/wheel.jpg';
import transmission from '../../assets/parts/transmission.jpg';
import battery from '../../assets/parts/battery.jpg';
import radiator from '../../assets/parts/radiator.jpg';
import steering from '../../assets/parts/steering.jpg';
import Product from './Product';

const Products = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
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