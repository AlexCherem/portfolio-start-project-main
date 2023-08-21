import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LogoSvg} from "../../assets/images/LogoSvg";

const items = ["Home", "About", "Tech Stack", "Projects","Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <LogoSvg/>
            <Menu menuItems={items}/>
            <Logo />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #a9d4f3;
  display: flex;
  justify-content: space-evenly;
`

