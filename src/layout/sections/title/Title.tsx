import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme"

export const Title = () => {
    return (
        <StyledTitle>
            <Container>
                <SectionTitle fontSize={"58px"}>For any questions please mail me:</SectionTitle>
                <StyledSpan>
                    <Link>hi@pavanmg.in</Link>
                </StyledSpan>
            </Container>
        </StyledTitle>
    );
};

const StyledTitle = styled.section` 
  min-height: 20vh;
  margin: 0 auto;
  text-align: center;
`
const StyledSpan = styled.h3`   
  color: cyan;
  font-size: 58px;
`
const Link = styled.a`
  text-transform: uppercase;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2});
`

