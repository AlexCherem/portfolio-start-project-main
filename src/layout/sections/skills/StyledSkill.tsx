import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type StyledSkillProps = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
}
export const StyledSkill = (props: StyledSkillProps) => {
    return (
        <StyledIcon>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledIcon>




    );
};


const StyledIcon=styled.div`
  width: 120px;
  height: 120px;  
  flex: 1 1 16.6666%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

