import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexContainer} from "../../components/FlexContainer";
import {LogoSvg} from "./../../assets/images/LogoSvg"
import {Icon} from "../../components/icon/Icon";

const itemsFooter = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer justify={"space-between"} wrap={"wrap"}>
                <LogoSvg/>
                <TelFooter>+91 12345 09876</TelFooter>
                <TelFooter>info@example.com</TelFooter>
                <Icon iconId={"vector"}/>
                <Icon iconId={"twitter"} />
                <Icon iconId={"linkedin"} />
                <BrStyled/>
                <Menu menuItems={itemsFooter}/>
                <StyledFooterSpan>Designed and built by Pavan MG with Love & Coffee</StyledFooterSpan>
            </FlexContainer>

        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: #f3eaa7;
  display: flex;
  justify-items: center;
  width: 1192px;
  min-height: 20vh;
  margin: 0 auto;


`
const StyledFooterSpan = styled.small`
  color: blueviolet;

`

const TelFooter = styled.span`
  width: 150px;
  height: 17px;
  background-color: coral;
  margin: 10px
`
const Pagination = styled.span`
  width: 150px;
  height: 17px;
  background-color: coral;
`

const BrStyled = styled.div`
  width: 1191px;
  height: 6px;
  border: 1px solid red;
`


