import React, {useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

function Count() {
    const [count, setCount] = useState<number>(0);


    return (
        <>
            <h3>This is Count App</h3>
            <CountDisplay count={count} />
            <CountButton setCount={setCount} />

        </>
    );
}

export default Count;