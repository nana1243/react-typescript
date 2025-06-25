import React, {useState} from 'react';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function NumberComponent() {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }


    return (
        <>
            <FirstComponent count={count} setCount={handleIncrement} />
            <SecondComponent count={count} setCount={handleIncrement} />
        </>
    );
}

export default NumberComponent;