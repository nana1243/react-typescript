import React from 'react';
import User from "./Users/User";
import PrintValue from "./PrintValue";
import UserV2 from "./UserV2";

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

    const numberValue = 2;
    const stringValue = 'test';
    const booleanValue = true;
    const arrayValue = [1,2,3,5];
    const objectValue = {id:2 , name : 'test'};
    const handleClick = () => alert('버튼이 클릭되었습니다!');


    const userObject = {
        username: "hennie",
        email: "hennie92@naver.com"
    }

    return (
        <>
            <h1>Main Component</h1>
            <User name ={"hennie"} age={20} />
            <p>배열 : {referenceArray}</p>
            <p>객체 : {JSON.stringify(referenceObject)}</p>
            <p>배열 : {referenceFunction.toString()}</p>
            <p>정규 표현식 : {referenceRegExp.toString()}</p>
            <p>Date : {referenceDate.toDateString()}</p>
            <p>Map : {JSON.stringify(Array.from(referenceMap))}</p>
            <p>Set : {JSON.stringify(Array.from(referenceSet))}</p>
            <PrintValue
                numberValue = {numberValue}
                stringValue = {stringValue}
                booleanValue = {booleanValue}
                arrayValue = {arrayValue}
                objectValue= {objectValue}
                handleClick ={handleClick}
            />
            <UserV2 {...userObject} />
        </>
    );
}

export default Main;