import React from 'react';


const Part = ({ product, setPart }) => {
    const { name, available, minOrder, img } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Parts" /></figure>
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
                <div className="card-actions justify-center">
                    <label
                        htmlFor="purchaseModal"
                        disabled={minOrder > available}
                        onClick={() => setPart(product)} className="btn btn-primary text-white uppercase">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Part;