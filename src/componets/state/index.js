import React, { useState } from 'react';
import './style.scss';

function State() {
    const [count, setCount] = useState(0);
    const [countSecond, setCountSecond] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Кликни меня! {count}
            </button>
            <br></br>
            <button onClick={() => setCountSecond(countSecond + 1)}>
                Кликни меня! {countSecond} {countSecond > 10 ? 'больше 10' : countSecond === 10 ? 'равен 10' : 'меньше 10'}
            </button>
        </>
    );
}

export default State;