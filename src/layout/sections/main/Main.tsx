import React from 'react';
import photo from "../../../assets/images/mainphoto.webp"
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <BoxMenu>
            <Container>
                <FlexContainer along="center" justify="space-between">
                    <StyledH1>
                        Hi 👋,<br/>
                        My name is<br/>
                        <span>Pavan MG</span><br/>
                        I build things for web
                    </StyledH1>
                    <StyledPhoto>
                        <Photo src={photo} alt=""/>
                    </StyledPhoto>
                </FlexContainer>
            </Container>
        </BoxMenu>
    );
};


const Photo = styled.img`
  width: 100%;  
  height: auto;
  object-fit: cover;
  border-radius: 230px;
  
`
const StyledPhoto = styled.div`
  position: relative;
  width: 349px;
  height: 349px;
  margin: 30px;
  border-radius: 30px;
  padding:5px;
  text-align: center;
  &::after{
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(360deg, #00C0FD, #E70FAA);
    border-radius: 49%;
    border-width: 10px;
    z-index: -1;
  
  }
  
`
const StyledH1 = styled.h1`
  width: 636px;
  height: 300px;
  font-size: 50px;
  
  span{
    text-transform: uppercase;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(10deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2} );
  }
  
  &:hover{
    border: 3px solid;
    border-image: repeating-linear-gradient(red, blue)1;
  }
`

const BoxMenu = styled.section`
  display: flex;
  min-height: 100vh;  
  margin: 0 auto;  
  /*background-color: ${theme.colors.primaryBg};*/
`


