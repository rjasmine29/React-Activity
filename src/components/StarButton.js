

//Not finished, use react_state_and_eventing cloned work in folder reactstate

import React, { useState } from 'react'

const StarButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setFaved(!faved)
    }

    return (
        <span role="switch" onClick={handleFave} style={{ color: faved ? 'gold' : 'grey' }}>★</span>
    );

};

export default StarButton;

