import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
            <ul>
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import.</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li>
            </ul>
            <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
            <ul>
                <li>Local State</li>
                <li>Gloal State.</li>
                <li>Server State</li>
                <li>URL state</li>
            </ul>
            <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
            <ul>
                <li>Prototype inheritance is used to add methods and properties.</li>
                <li>In order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</li>
            </ul>
            <h1 className='text-xl font-bold'>Why you do not set the state directly in React?</h1>
            <ul>
                <li>If one update it directly, calling the setState, afterward may just replace the update one made.</li>
                <li>You will lose control of the state across all components.</li>
            </ul>
            <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests</h1>
            <ul>
                <li>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly </li>

            </ul>
        </div>
    );
};

export default Blog;