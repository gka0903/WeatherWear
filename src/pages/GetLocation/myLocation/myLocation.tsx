import styled from "styled-components";
import myLocation from "./icMylocation.svg";
import useGeolocation from "./useGeolocation";
import {useDispatch} from "react-redux";
import {setMyLocation} from "../../redux/locationSlice";

const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Span = styled.span`
  color: white;
  font-size: 80%;
  margin-left: 0.3%;
`;

// 이하 코드 동일

const MyLocation = () => {
    const location = useGeolocation();
    const dispatch = useDispatch();
    const loadLocation = () => {
        dispatch(setMyLocation(location));
    }
    return (
        <Container onClick={loadLocation}>
            <img src={`${myLocation}`} alt=""/>
            <Span>My Location</Span>
        </Container>
    );
};

export default MyLocation;