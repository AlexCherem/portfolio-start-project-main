import React from 'react';
import styled from "styled-components";

type menuItemsProps = {
    menuItems: string[]
}

export const Menu = ({menuItems}: menuItemsProps) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item) => {
                    return <li>
                        <a href="">{item}</a>
                            </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px
  }

`
