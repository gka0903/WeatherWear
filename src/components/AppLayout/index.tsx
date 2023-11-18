import React from 'react';
import {Container, Main} from './styles';
import Navigation from "../Nav/nav";
import GlobalStyle from "../../GlobalStyle";

function AppLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Navigation/>
                <Main>{children}</Main>
            </Container>
        </>
    );
}

export default AppLayout;