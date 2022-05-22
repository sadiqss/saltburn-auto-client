import React from 'react';
import offer from '../../assets/offer.jpg';
import apply from '../../assets/apply.jpg';


const Carriers = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl grid grid-cols-2">
            <div>
                <figure className="px-10 pt-10">
                    <img src={offer} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What We Offer!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
            <div>
                <figure className="px-10 pt-10">
                    <img src={apply} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How to Apply?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carriers;