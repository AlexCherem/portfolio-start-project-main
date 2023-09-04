import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

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
  }
  
  li {
    list-style-type: none;
    float: left;
    margin: 0 10px; 
    font-size: 20px;
  }
  
  @media ${theme.media.tablet}{
    display: none;
  }
`


const Link = styled.a`
  color: #666666;
  font-size: 20px;
  gap: 67px;
`
