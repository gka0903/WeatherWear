import React, {ChangeEvent, useState} from "react";

import {Content, FormContainer, Input, Title} from "./style";
import {useDispatch} from "react-redux";
import {setTemperature} from "../redux/slices/temperature";
import {Link} from "react-router-dom";
import DefaultButton from "../../components/Button/button";


const Temperature = () => {
    const [temp, setTemp] = useState(0); // location 상태 초기
    const dispatch = useDispatch();
    const setDispatch = (temp: number) => {
        dispatch(setTemperature(temp))
    }
    const loadTemperature = (e: ChangeEvent<HTMLInputElement>) => {
        setTemp(parseInt(e.target.value));
    };

    const SetTemperature = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지
        setDispatch(temp);
    }

    return (
        <>
            <FormContainer onSubmit={SetTemperature}>
                <Title>What is your temperature?</Title>
                <Content>
                    <Input onChange={loadTemperature} placeholder="Enter a temperature"/>
                    <DefaultButton><Link to="/">Location</Link></DefaultButton>
                </Content>

            </FormContainer>
        </>
    );
};

export default Temperature;
