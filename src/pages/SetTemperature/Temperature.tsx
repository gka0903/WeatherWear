import React, {ChangeEvent, useState} from "react";

import {Content, FormContainer, Input, Title} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setTemperature} from "../../redux/slices/temperature";
import {Link, useNavigate} from "react-router-dom";
import DefaultButton from "../../components/Button/button";
import {RootState} from "../../redux/store";


const Temperature = () => {
    const [temp, setTemp] = useState(28); // location 상태 초기
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ext = useSelector((state: RootState) => state.temperature.value);
    const setDispatch = (temp: number) => {
        dispatch(setTemperature(temp));
        console.log("온도 확인, ", ext);
    }
    const loadTemperature = (e: ChangeEvent<HTMLInputElement>) => {
        setTemp(parseInt(e.target.value));
        console.log("온도 확인, ", ext);
    };

    const SetTemperature = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지
        setDispatch(temp);
        navigate('/details');
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
