import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
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