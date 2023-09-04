import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {Group} from "./Group";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";


export const Groups = () => {
    return (
        <StyledGroups>
            <Container>
                    <FlexContainer justify={"flex-start"} direction={"column"}>
                        <Title>
                            <SectionTitle fontSize={"42px"} textAling={'justify'}>About Me</SectionTitle>
                        </Title>
                        <StyledSectionParagraph>
                            <SectionParagraph textAling={"left"} fontSize={"18px"}>The Generator App is an online tool that helps you to export ready-made templates ready to
                                work as your future website. It helps you to combine slides, panels and other components and export it
                                as a set of static files: HTML/CSS/JS.</SectionParagraph>
                        </StyledSectionParagraph>
                        <Title1>
                            <SectionTitle fontSize={"48px"} textAling={'justify'}>Work Experience</SectionTitle>
                        </Title1>
                        <Group title={'Junior Web Developer'}
                               text={'Dr. Rajkumar’s Learning App'}
                               geo={"Bengaluru"}
                               data={"Sep 2021 - Dec 2021"}
                               singIn={"Full Time"}
                        />
                        <Group title={'Web Development Intern'}
                               text={'IonPixelz Web Solutions'}
                               geo={"Bengaluru"}
                               data={"Sep 2021 - Dec 2021"}
                               singIn={"Internship"}
                        />
                        <Group title={'SEO / SEM Specialist'}
                               text={'HAAPS'}
                               geo={"Bengaluru"}
                               data={"Sep 2021 - Dec 2021"}
                               singIn={"Internship"}
                        />
                        <Title1>
                            <SectionTitle fontSize={"48px"} textAling={'justify'}>Education</SectionTitle>
                        </Title1>
                        <Group title={'Bachelor in Electronics & Communication'}
                               text={'Bangalore Instutute of Technology'}
                               data={"Aug 2015 - Dec 2020"}
                               singIn={"Full Time"}
                               geo={"Bengaluru"}
                        />
                    </FlexContainer>
            </Container>
        </StyledGroups>

    );
};


const Title = styled.div`
  max-width: 350px;
  height: auto;
  margin-bottom: 40px;
`
const Title1 = styled.div`
  max-width: 550px;
  height: auto;
  margin: 38px 0;
`

const StyledGroups= styled.section`
  display: flex;
  min-height: auto;
  margin: 0 auto; 
  
  
`

const StyledSectionParagraph = styled.div`
  max-width: 708px;
  width: 100%;
`


