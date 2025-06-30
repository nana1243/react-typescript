import React from 'react';
import styles from './Button.module.css';
import classNames from "classnames/bind";

function Button(props) {
    const cx = classNames.bind(styles);
    const isActive = false;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log('Button clicked!');
    }

    return (
        <div>
            <button onClick={(event) => handleClick(event)}>TEST</button>
            <button className={cx('btn')}>button</button>
            <button className={cx('btn', {'is-active' :isActive})}>Active Button</button>
        </div>
    );
}

export default Button;