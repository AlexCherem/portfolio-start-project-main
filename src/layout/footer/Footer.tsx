import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexContainer} from "../../components/FlexContainer";
import {LogoSvg} from "../../assets/images/LogoSvg"
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
                            <a href="#"><LogoSvg/></a>
                        </StyledLinkSvg>
                       <StyledLinkSvg1>
                           <a href="#"><TelFooter>+91 12345 09876</TelFooter></a>
                           <a href="#"><TelFooter>info@example.com</TelFooter></a>
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
  margin: 0 auto;
  min-height: 40vh;

`
const StyledFooterSpan = styled.div`
  display: inline-block;
  text-align: center;
  

  span {
    text-transform: uppercase;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2});
  }
`

const TelFooter = styled.span`
  max-width: 150px;
  height: auto;  
  margin: 10px
`

const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: auto;
  position: relative;
  flex-wrap: wrap;

  &::after{
    content:  "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: grey;
    position: absolute;
    bottom: -10px;
    left: 0;    
  }

  @media ${theme.media.tablet}{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const WrapperFooter1 = styled.div`
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 70px;

  @media ${theme.media.tablet}{
    display: flex;
    justify-content: center;
  }
`
const StyledLinkSvg = styled.div`
  max-width: 600px;
  height: auto;  
  display: flex;
  align-content: center;
  align-items: center;
`
const StyledLinkSvg1 = styled.div`  
  max-width: 600px;
  height: auto;  
  display: flex;
  align-items: center;
  justify-content: space-between;
`


