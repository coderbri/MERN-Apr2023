import React from 'react';
import { StyledSubContent } from './styles/SubContent.styled';

const SubContent = ({ children }) => {
    return (
        <StyledSubContent>
            
            <h3>SubContent</h3>
            <h3>{ children }</h3>
            
        </StyledSubContent>
    );
}

export default SubContent;
