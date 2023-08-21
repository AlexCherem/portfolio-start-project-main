import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Title = () => {
    return (
        <StyledTitle>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledSpan>hi@pavanmg.in</StyledSpan>
        </StyledTitle>
    );
};

const StyledTitle = styled.section`
  background-color: cadetblue;
  min-height: 20vh;
  max-width: 913px;
  width: 100%;
  margin: 0 auto;
`
const StyledSpan = styled.span`
  display: flex;
  justify-content: space-around;
  color: cyan;
  font-size: large;
`
