import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type ProjectPropsType = {
    title: string
    text: string
    span: string
    scr: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.scr} alt=""/>
            <Title>{props.title}</Title>
            <StyledText>
                <Text>{props.text}</Text>
            </StyledText>
            <StyledP>{props.span}</StyledP>
            <StyledDivIcon>
                <StyledIconsLink>
                    <Icon iconId={"linkChain"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                    <Link href={"#"}> Preview </Link>
                </StyledIconsLink>
                <StyledIconsLink>
                    <Icon iconId={"github"} width={"20px"} height={"20px"} viewBox={"0 0 90 80"}/>
                    <Link href={"#"}>View Code </Link>
                </StyledIconsLink>

            </StyledDivIcon>


        </StyledProject>
    );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;  
  width: 375px;  
  height: 570px;  
  margin-bottom: 10px;

`
const Image = styled.img`
  width: 100%;
  height: 260px;
  margin-bottom: 27px;
  object-fit: cover;

`
const Link = styled.a`
  font-size: 16px;
  padding-left: 10px;

`
const Title = styled.h2`  
  text-align: center;
  font-weight: 700;
  line-height: 26px;
  color: #000000;
`
const StyledText = styled.div`
  width: 314px;
  height: 130px;    
  margin: 17px 32px 12px 29px;
`
const Text = styled.p`
  text-align: left;
  font-size: 18px;
`
const StyledP = styled.p`
  font-size: 14px;
  line-height: 26px; 
  margin-bottom: 21px;
`
const StyledDivIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 314px;
  
  
`
const StyledIconsLink = styled.div`
  display: inline-block;
  width: 135px;
  
  
`