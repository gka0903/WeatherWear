import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: var(--border);

  & > div {
    max-width: 1264px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  & > div > div {
    padding: 100px 100px;
  }
`;