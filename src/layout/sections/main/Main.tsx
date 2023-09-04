import React from 'react';
import photo from "../../../assets/images/mainphoto.webp"
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <BoxMenu>
            <Container>
                <FlexContainer along="center" justify="space-around" wrap={"wrap"}>
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
  border-radius: 230px;
  object-fit: cover;
  


  @media ${theme.media.mobile}{
    width: 290px;
    height: 290px;
    aspect-ratio: 1/1;
    

 }
  
`
const StyledPhoto = styled.div`  
  position: relative;
  width: 349px;
  height: 349px;  
  margin: 30px;
  border-radius: 10px;
  padding: 3px;
  

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::after{
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(360deg, #00C0FD, #E70FAA);
    border-radius: 50%;    
    z-index: -1;
    
   
    
    @media ${theme.media.mobile}{
      width: 300px;
      height: 300px;
      
    }
  
  }
  
`


const StyledH1 = styled.h1`
  ${font({weight: 700, Fmax: 58, Fmin: 36})}    
  padding-left: 20px;
  letter-spacing: -1px;
  span{
    
    text-transform: uppercase;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(10deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2} );
  }
  
  &:hover{
    border: 3px solid;
    border-image: repeating-linear-gradient(${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2})1;
  }
`

const BoxMenu = styled.section`    
  margin: 0 auto;     
  padding-top: 320px ;
   
`











//width: 636px;
//min-height: 300px;


