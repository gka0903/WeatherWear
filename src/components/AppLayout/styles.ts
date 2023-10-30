import styled from 'styled-components';

export const Container = styled.div`
  height: 300vh;
`;

export const Header = styled.header`
  min-height: 30px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: var(--border);
  backdrop-filter: blur(5px);
`;

export const NavBar = styled.nav`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    width: 100%;
    gap: 24px;

    & > a:not(:first-child) {
      @media (max-width: 764px) {
        display: none;
      }
    }
  }

  & > div:last-child {
    gap: 12px;

    & > button:last-child {
      display: none;
      @media (max-width: 764px) {
        display: inline-block;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Main = styled.main``;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border-bottom: var(--border);
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  margin: 12px 24px;
  gap: 6px;

  @media (max-width: 764px) {
    display: flex;
  }
`;