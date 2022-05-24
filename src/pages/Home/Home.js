import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carriers from './Carriers';
import Parts from './Parts';
import Reviews from './Reviews';
import Welcome from './Welcome';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Parts></Parts>
            <Carriers></Carriers>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;