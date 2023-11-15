import React, {ChangeEvent, useState} from "react";
import useGeoCoding from "./useGeoCoding";
import {Container, Content, Input, Title} from "./style";
import MyLocation from "../myLocation/myLocation";


const Location = () => {
    const [location, setLocation] = useState(""); // location 상태 초기
    const loadLocation = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };
    const GetLocation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지
        useGeoCoding(location);
    };

    return (
        <Container onSubmit={GetLocation}>
            <Title>Where are you?</Title>
            <Content>
                <Input onChange={loadLocation} placeholder="Enter a location"/>
                <MyLocation/>
            </Content>
        </Container>
    );
};

export default Location;
