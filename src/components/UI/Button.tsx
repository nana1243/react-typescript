import React from 'react';

function Button(props) {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log('Button clicked!');
    }

    return (
        <div>
            <button onClick={(event) => handleClick(event)}>TEST</button>
        </div>
    );
}

export default Button;