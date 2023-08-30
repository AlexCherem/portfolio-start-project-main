import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LogoSvg} from "../../assets/images/LogoSvg";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {theme} from "../../styles/Theme";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={"space-between"} along={"center"}>
                    <StyledLogo>
                        <a href="">
                            <LogoSvg/>
                        </a>
                    </StyledLogo>
                    <StyledLink>
                        <Menu menuItems={items}/>
                        <Logo/>
                    </StyledLink>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`

const StyledLogo = styled.div`
  width: 97px;
  height: 59px;
`
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 51px;

`

