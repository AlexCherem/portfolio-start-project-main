import React from 'react';
import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {StyledSkill} from "./StyledSkill";
import {Container} from "../../../components/Container";


const skillData = [
    {
        iconId:"html" ,
    },
    {
        iconId:"css" ,
    },
    {
        iconId:"javaScript" ,
    },
    {
        iconId:"react" ,
    },
    {
        iconId:"iconVector" ,
    },
    {
        iconId:"bootstrap" ,
    },
    {
        iconId:"tailwind" ,
    },
    {
        iconId:"sass" ,
    },
    {
        iconId:"git" ,
    },
    {
        iconId:"greensock" ,
    },
    {
        iconId:"vscode" ,
    },
    {
        iconId:"github" ,
    },
]

export const Skills: React.FC = () => {
    return (
        <Skill id={"stack"}>
            <Container>
                <SectionTitle fontSize={"48px"} marginBot={"50px"} textAling={"center"}>My Tech Stack</SectionTitle>
                <SectionParagraph marginBottom={"124px"} textAling={"center"} fontSize={"32px"}>
                    Technologies I’ve been working with
                    recently
                </SectionParagraph>

                <StyledGrid>
                    {skillData.map((s, index)=>{
                       return <StyledSkill iconId={s.iconId}
                        key={index}
                        />
                    })}
                </StyledGrid>

            </Container>
        </Skill>
    );
};

const Skill = styled.section`
  margin: 0 auto;
  position: relative;
`


const StyledGrid = styled.div`
  display: grid;    
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 85px;
  margin: 0 auto;
  max-width: 1230px;
  width: 100%;   
`


