import styled from "styled-components";
import myLocation from "./icMylocation.svg";
import useGeolocation from "./useGeolocation";
import {useDispatch} from "react-redux";
import {setMyLocation} from "../../../redux/slices/locationSlice";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 30%;
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

const MyLocation = () => {
    const location = useGeolocation().coordinates;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadLocation = () => {
        dispatch(setMyLocation(location));
        navigate('/details');
    };

    return (
        <Container onClick={loadLocation}>
            <img src={`${myLocation}`} alt=""/>
            <Span>My Location</Span>
        </Container>
    );
};

export default MyLocation;
