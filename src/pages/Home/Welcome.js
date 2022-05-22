import React from 'react';
import Charts from './Charts';

const Welcome = () => {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">Welcome to Saltburn Auto Solution!</h2>
                <p className='text-xl'>Saltburn Auto Solutions develops pioneering technologies and services for sustainable and connected mobility of people and their goods. Founded in 1991, the technology company offers safe, efficient, intelligent and affordable solutions for vehicles, machines, traffic and transportation.</p>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div className="card-body">
                    <Charts></Charts>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Share Price Chart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;