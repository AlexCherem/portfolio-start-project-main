import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";


type DescriptionStyledProps = {
    title?: string
    text?: string
    data?: string
    geo?: string
    singIn?: string
}


export const Group = (props: DescriptionStyledProps) => {
    return (
        <Description>
            <WrapperContainer>
                <StyledTitle>
                    <StyledDescriptionBox><p>{props.title}</p></StyledDescriptionBox>
                    <StyledButton>{props.singIn}</StyledButton>
                </StyledTitle>
                <StyledBox>
                    <DivBox>
                        <div>
                            <Icon iconId="officeBuilding" width='16px' height="12px" viewBox="0 0 16 12"/>
                            <span>{props.text}</span>
                        </div>
                        <div>
                            <Icon iconId="location" width='16px' height="12px" viewBox="0 0 16 12"/>
                            <span>{props.geo}</span>
                        </div>
                    </DivBox>
                    <div>
                        <Icon iconId="calendar" width='16px' height="12px" viewBox="0 0 16 12"/>
                        <span><data>{props.data}</data></span>
                    </div>
                </StyledBox>
            </WrapperContainer>
        </Description>
    );
}

const Description = styled.div`
  margin-bottom: 30px;
`
const WrapperContainer = styled.div`
  width: 704px;
  height: 75px;
  position: relative;
  

  &::after{
    content:  "";
    display: inline-block;
    width: 695px;
    height: 2px;
    background-color: grey;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
  
`


const StyledDescriptionBox = styled.div`
  display: inline-block;
  width: 600px;
  height: 28px;
`

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 100%;
`

const DivBox = styled.div`
  width: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 704px;
  height: 28px;
  margin-bottom: 10px;
 
  
`

const StyledButton = styled.button`
  width: 84px;
  height: 24px;
  border-radius: 10px;
  background-color: aquamarine;
`