import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name,img,price,description}=service;
    const navigate=useNavigate()
    const navigateparameter=id=>{
        navigate(`/service/${id}`)

    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={()=>navigateparameter(id)} className='btn btn-success'>Book:{name}</button>
            
        </div>
    );
};

export default Service;