import React from 'react';
import styled, {isStyledComponent} from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {FlexContainer} from "../../../components/FlexContainer";
import {Project} from "./project/Project";
import projImg1 from "./../../../assets/images/prog-1-_1_.png"
import projImg2 from "./../../../assets/images/prog-2-_1_.png"
import projImg3 from "./../../../assets/images/prog-3-_1_.png"
import projImg4 from "./../../../assets/images/prog-4-_1_.png"
import projImg5 from "./../../../assets/images/prog-5-_1_.png"
import projImg6 from "./../../../assets/images/prog-6-_1_.png"
import {Container} from "../../../components/Container"
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle fontSize={"48px"} marginBot={"50px"} textAling={"center"}>Projects</SectionTitle>
                <SectionParagraph fontSize={"32px"} marginBottom={"110px"}>Things I’ve built so far</SectionParagraph>
                <FlexContainer justify={"space-between"} wrap={"wrap"}>
                    <Project scr={projImg1}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Project scr={projImg2}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Project scr={projImg3}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Project scr={projImg4}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Project scr={projImg5}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Project scr={projImg6}
                             title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"Tech stack : HTML , JavaScript, SASS, React"}/>
                </FlexContainer>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`    

  margin: 0 auto; 
  
`
