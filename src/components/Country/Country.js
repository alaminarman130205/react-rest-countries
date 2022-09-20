import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name} = props.country;
    return (
        <div className='country'>
            <h2>Country Name === {name.common}</h2>
            <h2>Country area === {area} </h2>
            <h2>Country region === {region} </h2>
            <h2>Country population === {population} </h2>
        </div>
    );
};

export default Country;