import React, {Dispatch, useState} from 'react';

interface SecondComponentProps {
    count: number;
    setCount: Dispatch<React.SetStateAction<number>>;
}

function SecondComponent(props:SecondComponentProps){
    const {count, setCount} = props;

    return (
        <div>
            <h3>Second Component</h3>
            <p>Count: {count}</p>
            <button onClick={setCount}>Increment</button>
        </div>
    );

}

export default SecondComponent;