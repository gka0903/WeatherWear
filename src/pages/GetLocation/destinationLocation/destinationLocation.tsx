import React, {ChangeEvent, useState} from "react";
import useGeoCoding from "./useGeoCoding";
import {Container} from "./style";


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
