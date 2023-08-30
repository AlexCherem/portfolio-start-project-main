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
                        <Link href="">{item}</Link>
                            </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 67px
  }

`

const Link = styled.a`
  color: #666666;
  font-size: 20px;
`
