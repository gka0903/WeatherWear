import styled from "styled-components";
import useGeoCoding from "./useGeoCoding";

const Container = styled.div`
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

const Span = styled.span`
  color: #4683FF;
  margin-left: 0.3%;
`;

// 이하 코드 동일

const DestinationLocation = () => {
    const location = useGeoCoding();
    const loadLocation = () => {
        // console.log(JSON.stringify(location))
        console.log(location);
    }
    return (
        <Container onClick={loadLocation}>
            <Span>위치 넣기</Span>
        </Container>
    );
};

export default DestinationLocation;