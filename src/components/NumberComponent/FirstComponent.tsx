import React, {Dispatch, useState} from 'react';


interface FirstComponentProps {
    count: number;
    setCount: Dispatch<React.SetStateAction<number>>;
}

function FirstComponent(props:FirstComponentProps){
    const {count, setCount} = props;

    console.log('FirstComponent rendered');

    return (
        <div>
            <h3>First Component</h3>
            <p>Count: {count}</p>
            <button onClick={setCount}>Increment</button>
        </div>
    );
}

export default FirstComponent;