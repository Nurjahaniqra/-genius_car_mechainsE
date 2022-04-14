import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    // const Services=[
    //     {id:1,name:'oil Change',price:100,description:'',img:'https://i.ibb.co/7brrJ3w/car2.jpg'},
    //     {id:2,name:'oil Change',price:200,description:'',img:'https://i.ibb.co/V9zCwHh/car1.jpg'}
    // ] 
  
    return (
        <>
           <Banner></Banner>
           <Services />
           <Experts></Experts>
        </>
    );
};

export default Home;