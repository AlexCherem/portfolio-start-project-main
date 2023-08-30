import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexContainer} from "../../components/FlexContainer";
import {LogoSvg} from "./../../assets/images/LogoSvg"
import {theme} from "../../styles/Theme"
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";

const itemsFooter = ["Home", "About", "Technologies", "Projects", "Contact"]


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer direction={"column"}>
                    <WrapperFooter>
                        <StyledLinkSvg>
                            <a href=""><LogoSvg/></a>
                        </StyledLinkSvg>
                       <StyledLinkSvg1>
                           <a href=""><TelFooter>+91 12345 09876</TelFooter></a>
                           <a href=""><TelFooter>info@example.com</TelFooter></a>
                           <Logo/>
                       </StyledLinkSvg1>
                    </WrapperFooter>
                    <WrapperFooter1>
                        <Menu menuItems={itemsFooter}/>
                        <StyledFooterSpan>Designed and built
                            by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span>
                        </StyledFooterSpan>
                    </WrapperFooter1>
                </FlexContainer>

            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  display: flex;
  margin: 0 auto;
  min-height: 30vh;

`
const StyledFooterSpan = styled.small`

  span {
    text-transform: uppercase;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2});
  }
`

const TelFooter = styled.span`
  width: 150px;
  height: 17px;  
  margin: 10px
`

const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 88px;
  position: relative;


  &::after{
    content:  "";
    display: inline-block;
    width: 1200px;
    height: 2px;
    background-color: grey;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

`
const WrapperFooter1 = styled.div`
  width: 1200px;
  height: 88px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const StyledLinkSvg = styled.div`
  width: 600px;
  height: 88px;  
  display: flex;
  align-content: center;
  align-items: center;
`
const StyledLinkSvg1 = styled.div`  
  width: 600px;
  height: 88px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
`


