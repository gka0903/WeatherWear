import styled from "styled-components";
import React, {ChangeEvent, useState} from "react";
import useGeoCoding from "./useGeoCoding";

const Container = styled.form`
  width: 95%;
  height: 5%;
  margin-top: 2%;
  background-color: #F5F9FF;
  border: solid 1px #4683FF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const DestinationLocation = () => {
    const [location, setLocation] = useState(""); // location 상태 초기화
    const loadLocation = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };
    const GetLocation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지
        useGeoCoding(location);
    };

    return (
        <Container onSubmit={GetLocation}>
            <input onChange={loadLocation} placeholder="Enter a location"/>
        </Container>
    );
};

export default DestinationLocation;
