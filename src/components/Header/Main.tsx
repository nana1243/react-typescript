import React from 'react';

function Main(props) {
    const referenceArray = [1,2,3,4];
    const referenceObject = {name : "hennie", age:30};
    const referenceFunction = () => "함수 리턴값!";
    const referenceDate = new Date();
    const referenceRegExp = /react/i;
    const referenceMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ])
    const referenceSet = new Set([1,2,3,4]);

    return (
        <>
            <h1>Main Component</h1>
            <p>배열 : {referenceArray}</p>
            <p>객체 : {JSON.stringify(referenceObject)}</p>
            <p>배열 : {referenceFunction.toString()}</p>
            <p>정규 표현식 : {referenceRegExp.toString()}</p>
            <p>Date : {referenceDate.toDateString()}</p>
            <p>Map : {JSON.stringify(Array.from(referenceMap))}</p>
            <p>Set : {JSON.stringify(Array.from(referenceSet))}</p>
        </>
    );
}

export default Main;