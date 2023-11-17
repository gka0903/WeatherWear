import styled from "styled-components";
import myLocation from "./icMylocation.svg";
import useGeolocation from "./useGeolocation";

const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: #4683FF;
  margin-left: 0.3%;
`;

// 이하 코드 동일

const MyLocation = () => {
    const location = useGeolocation();
    const loadLocation = () => {
        console.log(JSON.stringify(location))
    }
    return (
        <Container onClick={loadLocation}>
            <img src={`${myLocation}`} alt=""/>
            <Span>내 위치 불러오기</Span>
        </Container>
    );
};

export default MyLocation;