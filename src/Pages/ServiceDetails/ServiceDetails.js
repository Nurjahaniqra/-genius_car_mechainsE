import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h2>This is Details Service PageNo-{serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;