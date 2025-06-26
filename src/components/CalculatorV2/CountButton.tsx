import React, {Dispatch} from 'react';

interface CountButtonProps {
 countDispatch: Dispatch<{ type: string }>;
}

function CountButton(props:CountButtonProps) {
    const {countDispatch} = props;

    return (
        <>
            <button name="increment" onClick={() => countDispatch({type:"INCREMENT"})}>increment</button>
            <button name="decrement" onClick={() => countDispatch( {type:"DECREMENT"})}>decrement</button>
            <button name="reset" onClick={() => countDispatch({type: "RESET"})}>reset</button>
        </>
    );
}

export default CountButton;