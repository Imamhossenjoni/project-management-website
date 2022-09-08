import React from 'react';
import Catagory from '../Catagory/Catagory';
import MenAllProducts from '../Catagory/Men/MenAllProducts';
import Contact from '../Contact/Contact';
import CheckoutForm from '../DashBoard/CheckoutForm';
import GetAllReviews from '../Reviews/GetAllReviews';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Catagory></Catagory>
            <MenAllProducts></MenAllProducts>
            <Contact></Contact>
            <GetAllReviews></GetAllReviews>

        </div>
    );
};

export default Home;