import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import GlobalStyle from '../../GlobalStyle';
import {
    Container,
    LogoTitle,
    NavBar,
    Main,
    Header,
    Footer,
    MobileMenu,
} from './styles';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const onChangeDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const onChangeMobileMenu = useCallback(() => {
        setMobileMenu((prev) => !prev);
    }, []);

    return (
        <>
            <GlobalStyle darkMode={darkMode} />
            <Container>
                <Header>
                    <NavBar>
                        <div>
                            <Link to='/'>
                                <LogoTitle>
                                    <div>제목</div>
                                </LogoTitle>
                            </Link>
                            <Link to='/'>링크</Link>
                            <Link to='/'>링크</Link>
                            <Link to='/'>링크</Link>
                        </div>
                        <div>
                            <button onClick={onChangeDarkMode}>테마변경</button>
                            <button>로그인</button>
                            <button onClick={onChangeMobileMenu}>메뉴</button>
                        </div>
                    </NavBar>
                    {mobileMenu && (
                        <MobileMenu>
                            <Link to='/'>링크</Link>
                            <Link to='/'>링크</Link>
                            <Link to='/'>링크</Link>
                        </MobileMenu>
                    )}
                </Header>
                <Main>{children}</Main>
                <Footer>Footer</Footer>
            </Container>
        </>
    );
}

export default AppLayout;