import React from 'react';
import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {StyledSkill} from "./StyledSkill";
import {Container} from "../../../components/Container";



export const Skills = () => {
    return (
        <Skill>
            <Container>
                <SectionTitle fontSize={"48px"} marginBot={"50px"} textAling={"center"}>My Tech Stack</SectionTitle>
                <SectionParagraph marginBottom={"124px"} textAling={"center"} fontSize={"32px"}>
                    Technologies I’ve been working with
                    recently
                </SectionParagraph>


                <StyledGrid>
                    <StyledSkill iconId={"html"}/>
                    <StyledSkill iconId={"css"}/>
                    <StyledSkill iconId={"javaScript"}/>
                    <StyledSkill iconId={"react"}/>
                    <StyledSkill iconId={"iconVector"}/>
                    <StyledSkill iconId ={"bootstrap"} viewBox={"0 0 100 100"}/>
                    <StyledSkill iconId={"tailwind"}/>
                    <StyledSkill iconId={"sass"}/>
                    <StyledSkill iconId={"git"} width={"105"} height={"105"} />
                    <StyledSkill iconId={"greensock"}/>
                    <StyledSkill iconId={"vscode"}/>
                    <StyledSkill iconId={"github"}/>
                </StyledGrid>

            </Container>
        </Skill>
    );
};

const Skill = styled.section`
  margin: 0 auto;  
`


const StyledGrid = styled.div`
  display: grid;    
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 85px;
  margin: 0 auto;
  max-width: 1230px;
  
 
`


