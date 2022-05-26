import React, { useEffect, useState } from 'react';
import Part from './Part';
import { Link } from 'react-router-dom';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-mesa-87312.herokuapp.com/parts')
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
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }

            </div>
            <div className='text-right pt-5'>
                <p><Link className='link link-hover p-10 text-primary' to="/products"> See More </Link></p>
            </div>
        </div>
    );
};

export default Parts;