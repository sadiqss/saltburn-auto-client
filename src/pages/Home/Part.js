import React from 'react';

const Part = ({ part }) => {
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
            <button className='btn'>Purchase</button>
        </div>
    );
};

export default Part;