import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type StyledSkillProps = {
    iconId: string
    width?: string
    height?: string
}
export const StyledSkill = (props: StyledSkillProps) => {
    return (
        <>
            <StyledSkills>
                <Icon iconId={props.iconId} width={props.width} height={props.height}/>
            </StyledSkills>
        </>
    );
};

const StyledSkills = styled.div`
  width: 15%;
`;