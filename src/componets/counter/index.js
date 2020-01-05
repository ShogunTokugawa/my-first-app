import React, { useState } from 'react';
import './style.scss';

function Counter(props) {
    const [count, setCount] = useState(props.number);
    const [countFourth, setCountFourth] = useState(0);
    const [countText, setCountText] = useState(0);

    return (
        <>
            <div className="counter">
                <button onClick={() => setCount(count - 1)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCountFourth(countFourth + 1)}>+1</button>
                <button onClick={() => setCountFourth(countFourth + 5)}>+5</button>
                <button onClick={() => setCountFourth(countFourth + 10)}>+10</button>
                <button onClick={() => setCountFourth(countFourth * countFourth)}>само на себя</button>
                <br></br><br></br>
                <span>{countFourth}</span>
            </div>
            <div>
                <button onClick={() => setCountText(!countText)}>показать/скрыть</button>
                <p className={countText ? 'block' : 'hidden'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </>
    );
}

export default Counter;