import React from 'react';
import Part from './Part';
import engine from '../../assets/parts/engine.jpg';
import wheel from '../../assets/parts/wheel.jpg';
import transmission from '../../assets/parts/transmission.jpg';
import battery from '../../assets/parts/battery.jpg';
import radiator from '../../assets/parts/radiator.jpg';
import steering from '../../assets/parts/steering.jpg';
import { Link } from 'react-router-dom';

const Parts = () => {
    const parts = [
        {
            "_id": 1,
            "name": "Engine",
            "img": engine,
            "description": "",
            "minimumOrder": 2,
            "available": 1000,
            "price": 400
        },
        {
            "_id": 2,
            "name": "Wheel",
            "img": wheel,
            "description": "",
            "minimumOrder": 2,
            "available": 1000,
            "price": 400
        },
        {
            "_id": 3,
            "name": 'transmission',
            "img": transmission,
            "description": "",
            "minimumOrder": 2,
            "available": 1000,
            "price": 400
        },
        {
            "_id": 4,
            "name": "Battery",
            "img": battery,
            "description": "",
            "minimumOrder": 2,
            "available": 1000,
            "price": 400
        },
        {
            "_id": 5,
            "name": "Radiator",
            "img": radiator,
            "description": "",
            "minimum-order": 2,
            "available": 1000,
            "price": 400
        },
        {
            "_id": 6,
            "name": "Front Steering and Suspension",
            "img": steering,
            "description": "",
            "minimumOrder": 2,
            "available": 1000,
            "price": 400
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }

            </div>
            <div className='text-right pt-5'>
                <a className="link link-hover p-10 text-primary">See More</a>
            </div>
        </div>
    );
};

export default Parts;