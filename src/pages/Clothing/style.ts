import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 75%;
    height: 75%;  
`;

interface ItemProps {
    flexBasis?: string;
}

export const Item = styled.div<ItemProps>`
    flex: ${props => props.flexBasis || '1 0 30%'};
`;