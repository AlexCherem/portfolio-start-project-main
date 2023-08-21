import React from 'react';
import photo from "../../../assets/images/mainphoto.webp"
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
export const Main = () => {
    return (
        <div>
               <FlexContainer along={"center"} justify={"space-around"}>
                  <div>
                      <span>Hi 👋,</span><br/>
                      <span>My name is</span>
                      <h2>Pavan MG</h2>
                      <h1>MG I build things for web</h1>
                  </div>
                   <Photo src={photo}/>
               </FlexContainer>
        </div>
    );
};



const Photo = styled.img`
  width: 349px;
  height: 349px;
  border-radius: 230px;
  object-fit: cover;
`


