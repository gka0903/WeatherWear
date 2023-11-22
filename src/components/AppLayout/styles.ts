import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90vh; /* 화면 높이에 100% 맞춤 */
  overflow: visible;
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;

  margin-left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const Icon = styled.img`
  width: 200px;
  height: 150px;
  position: relative;
  top: 30px;   // 상단으로부터의 거리
  left: 30px;  // 왼쪽으로부터의 거리
  object-fit: contain;
`;
