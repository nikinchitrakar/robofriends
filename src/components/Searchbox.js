import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <input type="search" placeholder="Enter Robo name" onChange={searchChange}/>
    )
}

export default Searchbox;