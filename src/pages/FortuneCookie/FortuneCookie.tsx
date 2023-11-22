import React, {useState} from 'react';
import styled from "styled-components";
import DefaultButton from "../../components/Button/button";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const fortunes = [
    "오늘의 행운의 색: Red",
    "오늘의 행운의 색: Orange",
    "오늘의 행운의 색: Yellow",
    "오늘의 행운의 색: Green",
    "오늘의 행운의 색: Blue",
    "오늘의 행운의 색: Navy",
    "오늘의 행운의 색: Purple",
];

const getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
};

const FortuneCookie = () => {
    const [fortune, setFortune] = useState('');
    const currentClothing = useSelector((state: RootState) => state.clothes.value);
    const crackCookie = () => {
        const randomFortune = getRandomFortune();
        setFortune(randomFortune);
        console.log(currentClothing);
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
