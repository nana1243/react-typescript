import React, {useState} from 'react';

function Fruits() {
    const [fruitList, setFruitList] = useState<string[]>(['사과', '바나나', '오렌지']);
    const [inputValue, setInputValue] = useState<string>('');


    const handleOnclick = () => {
        if (inputValue.trim() === '') {
            alert('과일 이름을 입력해주세요!');
            return;
        }
        if(fruitList.includes(inputValue)){
            alert('이미 추가된 과일입니다.');
            return
        }
        setFruitList((prevList) => [...prevList, inputValue]);
        setInputValue(''); // 입력 후 입력창 비우기
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <ul>
                {fruitList.map((fruit,index)=>{
                    return(
                        <li key={index}>{fruit}</li>
                    )
                })}
            </ul>
            <input type="text" value={inputValue} onChange={handleOnChange} />
            <button onClick={handleOnclick}>과일 추가</button>
        </>
    );
}

export default Fruits;