import React, {useCallback, useState} from 'react';

import GlobalStyle from '../../GlobalStyle';
import {Container, Footer, Header, Main} from './styles';
import VerticalNavbar from "../Nav/nav";

function AppLayout({children}: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const onChangeDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return (
        <>
            <GlobalStyle darkMode={darkMode}/>
            <Container>
                <Header>
                    <VerticalNavbar click={onChangeDarkMode}/>
                </Header>
                <Main>{children}</Main>
                <Footer>Footer</Footer>
            </Container>
        </>
    );
}

export default AppLayout;