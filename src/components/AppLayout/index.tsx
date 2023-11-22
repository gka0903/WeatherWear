import React from 'react';
import {Container, Icon, Main} from './styles';
import Navigation from "../Nav/nav";
import GlobalStyle from "../../GlobalStyle";

import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import WeatherIcons from '../../pages/Weather/WeatherIcons';
import Location from "../../pages/GetLocation/destinationLocation/Location";
import {useRoutes} from 'react-router-dom';
import Temperature from "../../pages/SetTemperature/Temperature";


function AppLayout({children}: { children: React.ReactNode }) {
    const location = useSelector((state: RootState) => state.location.value);
    const isHomeRoute = useRoutes([
        {path: "/", element: <Location/>},
        {path: "/temperature", element: <Temperature/>},
    ]);

    return (
        <>
            <GlobalStyle/>
            <Icon src={require("./img.png")} alt="Icon description"/>
            <Container>
                {isHomeRoute ? null : <Navigation/>}
                {isHomeRoute ? null : <WeatherIcons latitude={location.lat} longitude={location.lng}/>}
                <Main>{children}</Main>
            </Container>
        </>
    );
}

export default AppLayout;
