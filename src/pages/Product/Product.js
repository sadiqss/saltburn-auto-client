import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ part, handlePurchase }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={part.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:{part.name}</h2>
                <h2 className="card-title">Details:{part.description}</h2>
                <h2 className="card-title">Available:{part.available}</h2>
                <h2 className="card-title">Min Order:{part.minimumOrder}</h2>
                <h2 className="card-title">Price:{part.price}</h2>
            </div>
            <p className='btn'><Link to="/purchase"><button onClick={() => handlePurchase(part)} className='btn'> Purchase </button></Link></p>
        </div>
    );
};

export default Product;