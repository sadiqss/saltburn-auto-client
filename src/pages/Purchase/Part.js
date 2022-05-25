import React from 'react';


const Part = ({ product }) => {
    const { name, available, minOrder } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Min Order:{minOrder}</p>
                <p>{
                    available > 0 && available >= minOrder
                        ?
                        <span>{available} available</span>
                        :
                        <span className='text-red-500'>Stock Run Out</span>
                }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;