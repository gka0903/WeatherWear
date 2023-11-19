import React, {useState} from 'react';
import styled from "styled-components";
import DefaultButton from "../../components/Button/button";

const fortunes = [
    "내일은 더 나은 하루가 될 것입니다.",
    "곧 좋은 소식이 있을 것입니다.",
    "열심히 일하는 당신에게 상을 주어야 할 때입니다.",
    "어제의 꿈은 오늘의 희망이 됩니다.",
    "행운을 빕니다!",
];

const getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
};

const FortuneCookie = () => {
    const [fortune, setFortune] = useState('');

    const crackCookie = () => {
        const randomFortune = getRandomFortune();
        setFortune(randomFortune);
    };

    return (
        <>
            <h2>포춘 쿠키</h2>
            <Content>{fortune ? <p>{fortune}</p> : <p>쿠키를 깨보세요!🥠</p>}</Content>
            <DefaultButton onClick={crackCookie}>쿠키 깨기</DefaultButton>
        </>
    );
};

export default FortuneCookie;

const Content = styled.span`
  height: 3%;
  margin: 3% 0;
  font-size: 100%;
`
