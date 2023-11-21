import React from 'react';
import { Container, Main } from './styles';
import GlobalStyle from '../../GlobalStyle';
import Navigation from '../Nav/nav';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigation />
        <Main>{children}</Main>
      </Container>
    </>
  );
}

export default AppLayout;
