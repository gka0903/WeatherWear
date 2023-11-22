import React from 'react';
import {Container, Icon, Main} from './styles';
import Navigation from "../Nav/nav";
import GlobalStyle from "../../GlobalStyle";

import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import WeatherIcons from '../../pages/Weather/WeatherIcons';
import Location from "../../pages/GetLocation/destinationLocation/Location";

import {Link, useRoutes} from 'react-router-dom';
import styled from "styled-components";

const LayoutBox = styled.div`
  position: relative;
  z-index: 1000;

`;

function AppLayout({children}: { children: React.ReactNode }) {
    const location = useSelector((state: RootState) => state.location.value);
    const isHomeRoute = useRoutes([
        {path: "/", element: <Location/>},
    ]);

    return (
        <>
            <GlobalStyle/>
            <Link to="/"><Icon src={require("./img.png")} alt="Icon description"/></Link>
            <Container>
                <LayoutBox>
                    {isHomeRoute ? null : <Navigation/>}
                    {isHomeRoute ? null : <WeatherIcons latitude={location.lat} longitude={location.lng}/>}
                </LayoutBox>
                <Main>{children}</Main>
            </Container>
        </>
    );
}

export default AppLayout;

