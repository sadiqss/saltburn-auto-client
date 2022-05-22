import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carriers from './Carriers';
import Charts from './Charts';
import Parts from './Parts';
import Reviews from './Reviews';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <h1>Saltburn Auto Solution</h1>
            <Banner></Banner>
            <Welcome></Welcome>
            <Parts></Parts>
            <Carriers></Carriers>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;