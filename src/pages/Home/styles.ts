import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Icon = styled.img`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 30px;   // 상단으로부터의 거리
  left: 30px;  // 왼쪽으로부터의 거리
`;