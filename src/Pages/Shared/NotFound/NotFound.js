import React from 'react';
import notfound from '../../../images/notfound.jpg';
import './NotFound';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-success text-center '>Mechanic Is Sleepind.</h2>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;