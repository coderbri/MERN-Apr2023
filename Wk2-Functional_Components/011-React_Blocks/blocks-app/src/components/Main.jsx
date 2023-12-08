import React from 'react';
import { StyledMain } from './styles/Main.styled';

// Here wer are passing down children to show the components within Main
const Main = ({ children }) => {
    return (
        <StyledMain>
            { children }
        </StyledMain>
    );
}

export default Main;
