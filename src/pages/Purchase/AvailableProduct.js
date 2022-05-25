import React, { useEffect, useState } from 'react';
import Part from './Part';
import PurchaseModal from './PurchaseModal';

const AvailableProduct = () => {
    const [products, setProducts] = useState([]);
    const [part, setPart] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {products.map(product => <Part
                    key={product._id}
                    product={product}
                    setPart={setPart}
                ></Part>)}
            </div>
            {part && <PurchaseModal
                part={part}
                setPart={setPart}
            ></PurchaseModal>}
        </div>
    );
};

export default AvailableProduct;