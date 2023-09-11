import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme"
import {font} from "../../../styles/Common";

export const Title: React.FC = () => {
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
  ${font({weight: 700, Fmax: 56, Fmin: 36})}
`
const Link = styled.a`
  text-transform: uppercase;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2});
`

