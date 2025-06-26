import React, {Dispatch} from 'react';

interface CountButtonProps {
    setCount: Dispatch<React.SetStateAction<number>>;
}

function CountButton(props:CountButtonProps) {
    const {setCount} = props;

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            <button name="increment" onClick={handleIncrement}>increment</button>
            <button name="decrement" onClick={handleDecrement}>decrement</button>
            <button name="reset" onClick={handleReset}>reset</button>
        </>
    );
}

export default CountButton;