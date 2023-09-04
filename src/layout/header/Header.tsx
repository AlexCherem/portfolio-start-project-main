import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LogoSvg} from "../../assets/images/LogoSvg";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {theme} from "../../styles/Theme";
import {MobileMenuHeader} from "./menuMobileHeader/MenuMobileHeader";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={"space-between"} along={"center"}>
                    <StyledLogo>
                        <a href="#">
                            <LogoSvg/>
                        </a>
                    </StyledLogo>
                        <StyledLink1>
                            <Menu menuItems={items}/>
                            <Logo/>
                        </StyledLink1>
                    <MobileMenuHeader menuItems={items}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  margin-top: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  position: fixed;

`

const StyledLogo = styled.div`
  max-width: 97px;
  min-height: 100%;

 
`

const StyledLink1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${theme.media.tablet}{
    display: none;
  }

`


