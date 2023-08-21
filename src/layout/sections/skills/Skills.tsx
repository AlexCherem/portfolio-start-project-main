import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {StyledSkill} from "./StyledSkill";


export const Skills = () => {
    return (
        <Skill>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
                <FlexContainer  wrap={"wrap"} justify={"space-between"}>
                    <StyledSkill iconId={"html"}/>
                    <StyledSkill iconId={"css"}/>
                    <StyledSkill iconId={"javaScript"}/>
                    <StyledSkill iconId={"react"}/>
                    <StyledSkill iconId={"iconVector"}/>
                    <StyledSkill iconId={"bootstrap"}/>
                    <StyledSkill iconId={"tailwind"}/>
                    <StyledSkill iconId={"sass"}/>
                    <StyledSkill iconId={"git"} width={"105"} height={"105"}/>
                    <StyledSkill iconId={"greensock"}/>
                    <StyledSkill iconId={"vscode"}/>
                    <StyledSkill iconId={"github"}/>
                </FlexContainer>

        </Skill>
    );
};

const Skill = styled.section`
  width: 1193px;
  min-height: 100vh;
  background-color: aquamarine;
  margin: 0 auto;
  text-align: center;
`



