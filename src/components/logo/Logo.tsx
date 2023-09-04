import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";



export const Logo = () => {
    return (
        <StyledLink1>
            <a href="#">
                <Icon iconId={'vector'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>
            <a href="#">
                <Icon iconId={'twitter'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>
            <a href="#">
                <Icon iconId={'linkedin'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>

        </StyledLink1>


    );
};

const StyledLink1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`




