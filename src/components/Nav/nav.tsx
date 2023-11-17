import React from 'react';
import styled from 'styled-components';

// 네비게이션 바 스타일
const NavContainer = styled.nav`
  height: 80%;
  width: 10%;
  background-color: black;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  left: 2%;
  position: fixed;
`;

// 네비게이션 바 아이템 스타일
const NavItem = styled.div`
  margin: 10px 0;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Navigation = () => {
    return (
        <NavContainer>
            {/* 로고 또는 홈 링크 */}
            <NavItem>
                <a href="/">Location</a>
            </NavItem>


            {/* 메뉴 링크들 */}
            <NavItem>
                <a href="/tops">Tops</a>
            </NavItem>
            <NavItem>
                <a href="/pants">Pants</a>
            </NavItem>
            <NavItem>
                <a href="/outer">Outer</a>
            </NavItem>
            <NavItem>
                <a href="/setUp">Set Up</a>
            </NavItem>
            <NavItem>
                <a href="/fortune">Fortune</a>
            </NavItem>

        </NavContainer>
    );
};

export default Navigation;
