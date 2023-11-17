import React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';

// 버튼 스타일
const Container = styled(Button)`
  background-color: black;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: black;
  }
`;

interface BlackWhiteConceptButtonProps {
    children: React.ReactNode
    onClick?: () => void;
}

const DefaultButton: React.FC<BlackWhiteConceptButtonProps> = ({children, onClick}) => {
    return (
        <Container variant="contained" onClick={onClick}>
            {children}
        </Container>
    );
};

export default DefaultButton;
