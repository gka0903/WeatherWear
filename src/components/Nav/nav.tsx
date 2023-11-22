import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

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
  bottom:-7%;
  position: fixed;
`;

// 네비게이션 바 아이템 스타일
const NavItem = styled.div`
  margin: 10px 0;
  font-size: 1.5em;

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
                <Link to="/">Location</Link>
            </NavItem>


            {/* 메뉴 링크들 */}
            <NavItem>
                <Link to="/tops">Tops</Link>
            </NavItem>
            <NavItem>
                <Link to="/pants">Pants</Link>
            </NavItem>
            <NavItem>
                <Link to="/outer">Outer</Link>
            </NavItem>
            <NavItem>
                <Link to="/setUp">Set Up</Link>
            </NavItem>
            <NavItem>
                <Link to="/fortune">Fortune</Link>
            </NavItem>

        </NavContainer>
    );
};

export default Navigation;
