import React, {useReducer, useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";
import counterReducer from "../../reducer/counterReducer";

function Count() {
    // const [count, setCount] = useState<number>(0);
    // const handleIncrement = () => {
    //     setCount((prevCount) => prevCount + 1);
    // }
    //
    // const handleDecrement = () => {
    //     setCount((prevCount) => prevCount - 1);
    // }
    // const handleReset = () => {
    //     setCount(0);
    // }

    const [count, countDispatch] = useReducer(counterReducer,0);


    return (
        <>
            <h3>This is Count App</h3>
            <CountDisplay count={count} />
            <CountButton countDispatch={countDispatch}/>

        </>
    );
}

export default Count;