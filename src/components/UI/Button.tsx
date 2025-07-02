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

    const BigTitle = styled(Title)`
        font-size: 2em;
        font-weight: bold;
    `;

    const Wrapper = styled.section`
        padding: 20px;
        border: 1px solid #ccc;
      `;

    const BlueBorderWrapper = styled(Wrapper)`
        border-color: blue;
        background-color: lightblue;
    `;

    return (
        <div>
            {/*상속 받은 Bigtitle 은 영향을 받지 못한다. */}
            <BigTitle as='p'>Hello, Styled Components!</BigTitle>
            <Title $color='lightblue' as='h3'>Hello, ReactJS! </Title>
            <BlueBorderWrapper>
                <button onClick={(event) => handleClick(event)}>TEST</button>
                <button className={cx('btn')}>button</button>
                <button className={cx('btn', {'is-active' :isActive})}>Active Button</button>
            </BlueBorderWrapper>
        </div>
    );
}

export default Button;