import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from '../components/Coffee';

const Home = () => {
    const coffee = useLoaderData();
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                coffee.map(aCoffee => <Coffee key={aCoffee._id} aCoffee={aCoffee}></Coffee>)
            }
        </div>
    );
};

export default Home;