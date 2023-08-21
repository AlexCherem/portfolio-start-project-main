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
            <Text>{props.text}</Text>
            <Span>{props.span}</Span>
            <Link href={"#"}> Preview </Link>
            <Link href={"#"}>View Code</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: bisque;
  max-width: 375px;
  width: 100%;
  max-height: 570px;
  padding: 10px;

`
const Image = styled.img`
width: 100%;
  height: 260px;
  object-fit: cover;
    
`
const Link = styled.a`
  padding-left: 20px ;
    
`
const Title = styled.h3`

    
`
const Text = styled.p`

    
`
const Span = styled.h4`

    
`
