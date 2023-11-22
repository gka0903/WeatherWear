import React, {ChangeEvent, useEffect, useState} from "react";
import useGeoCoding from "./useGeoCoding";
import {useNavigate} from 'react-router-dom';

import MyLocation from "../myLocation/myLocation";
import {Content, FormContainer, Input, Title} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setMyLocation} from "../../../redux/slices/locationSlice";
import {RootState} from "../../../redux/store";


const Location = () => {
    const [location, setLocation] = useState(""); // location 상태 초기
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.location.value)
    const setDispatch = (data: object) => {
        dispatch(setMyLocation(data))
    }
    const loadLocation = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };
    const GetLocation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지
        const geoCoding = await useGeoCoding(location);
        setDispatch(geoCoding);
        navigate('/details');
    };

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <FormContainer onSubmit={GetLocation}>
                <Title>Where are you?</Title>
                <Content>
                    <Input onChange={loadLocation} placeholder="Enter a location"/>
                    <MyLocation/>
                </Content>
            </FormContainer>
        </>
    );
};

export default Location;
