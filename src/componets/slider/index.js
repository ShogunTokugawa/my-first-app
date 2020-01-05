import React, { useState } from 'react';
import './style.scss';

function Slider(props) {
    const {content} = props;
    const [count, setCount] = useState(0);

    const handleNext = () => {
        let result = count < content.length - 1 ? count + 1: 0;
        setCount(result);
    };

    const handlePrev = () => {
        let result = count < 1 ? content.length - 1 : count - 1;
        setCount(result);
    };

    return (
        <div className="slider">
            <p>
                ={count}=
            </p>
            <div>
                {content && content.map((item, index) => (
                    <img src={item.img} alt={item.href} className={index === count ? "active" : ""}/>
                ))}
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
export default Slider;