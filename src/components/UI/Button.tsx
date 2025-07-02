import React from 'react';
import styles from './Button.module.css';
import classNames from "classnames/bind";
import styled from "styled-components";

function Button(props) {
    const cx = classNames.bind(styles);
    const isActive = false;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log('Button clicked!');
    }
    const Title = styled.h1<{ $color : string; $decoration:string}>`
        color: ${(props) => props.$color || 'black'};
        text-decoration: underline;
      `;
    const Wrapper = styled.section`
        padding: 20px;
        border: 1px solid #ccc;
      `;

    return (
        <div>

            <Title $color='red'>Hello, ReactJS! </Title>
            <Wrapper>
                <button onClick={(event) => handleClick(event)}>TEST</button>
                <button className={cx('btn')}>button</button>
                <button className={cx('btn', {'is-active' :isActive})}>Active Button</button>
            </Wrapper>
        </div>
    );
}

export default Button;