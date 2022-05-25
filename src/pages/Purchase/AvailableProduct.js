import React, { useEffect, useState } from 'react';
import Part from './Part';

const AvailableProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {products.map(product => <Part
                    key={product._id}
                    product={product}
                ></Part>)}
            </div>

        </div>
    );
};

export default AvailableProduct;