import React from 'react';
import { useState } from 'react';
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            alert('number cant be less than 0')
        }
    }
    return (
        <div>
            <h2 className='number'>{count}</h2>
            <button className='plus' onClick={plus}>Plus</button>
            <button className='minus' onClick={minus}>Minus</button>
        </div>
    );
};

export default Counter;