import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
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


                <FlexContainer wrap={"wrap"}  justify={"space-between"} marGin={'0 -65px'} minHieght={"350px"} >
                    <StyledSkill iconId={"html"}/>
                    <StyledSkill iconId={"css"}/>
                    <StyledSkill iconId={"javaScript"}/>
                    <StyledSkill iconId={"react"}/>
                    <StyledSkill iconId={"iconVector"}/>
                    <StyledSkill iconId ={"bootstrap"}  width={"120"} height={"120"} viewBox={"0 0 115 100"}/>
                    <StyledSkill iconId={"tailwind"}/>
                    <StyledSkill iconId={"sass"}/>
                    <StyledSkill iconId={"git"} width={"105"} height={"105"} />
                    <StyledSkill iconId={"greensock"}/>
                    <StyledSkill iconId={"vscode"}/>
                    <StyledSkill iconId={"github"}/>
                </FlexContainer>

            </Container>
        </Skill>
    );
};

const Skill = styled.section`
  margin: 0 auto;  
`





