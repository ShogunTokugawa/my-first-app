import React, { useState } from 'react';
import './style.scss';

function Square() {
    const [count, setCount] = useState('red');
    const hidden = (value) => {
        setCount(value);
        console.log(count);
    }

    return(
        <div className="square">
            {count ==='red' && <div className="red" onClick={() => hidden('blue')}/>}
            {count ==='blue' && <div className="blue" onClick={() => hidden('green')}/>}
            {count ==='green' && <div className="green" onClick={() => hidden('red')}/>}
        </div>
    );
}

export default Square;