import React from 'react';
import {Container, Icon, Main} from './styles';
import Navigation from "../Nav/nav";
import GlobalStyle from "../../GlobalStyle";

import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import Location from "../../pages/GetLocation/destinationLocation/Location";

import {Link, useRoutes} from 'react-router-dom';
import styled from "styled-components";
import WeatherIcons from "../../pages/Weather/WeatherIcons";
import Temperature from "../../pages/SetTemperature/Temperature";

const LayoutBox = styled.div`
  position: relative;
  z-index: 1000;

`;

function AppLayout({children}: { children: React.ReactNode }) {
    const location = useSelector((state: RootState) => state.location.value);
    const isTemp = useSelector((state: RootState) => state.isTemp.value);
    const isHomeRoute = useRoutes([
        {path: "/", element: <Location/>},
        {path: "/temperature", element: <Temperature/>},
    ]);

    return (
        <>
            <GlobalStyle/>
            <LayoutBox><Link to="/"><Icon src={require("./img.png")} alt="Icon description"/></Link></LayoutBox>
            <Container>
                <LayoutBox>
                    {isHomeRoute ? null : <Navigation/>}
                    {isHomeRoute || isTemp ? null : <WeatherIcons latitude={location.lat} longitude={location.lng}/>}
                </LayoutBox>
                <Main>{children}</Main>
            </Container>
        </>
    );
}

export default AppLayout;

