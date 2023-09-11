import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {theme} from "../../styles/Theme";


type menuItemsProps = {
    menuItems: {
        title: string
        href: string
    }[]
}

export const Menu: React.FC<menuItemsProps> = ({menuItems}: menuItemsProps) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return <li key={index}>
                        <NavLink
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={0}
                            to={item.href}
                        >
                            {item.title}
                        </NavLink>
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
`


const NavLink = styled(Link)`
  color: #666666;
  font-size: 20px;
  gap: 67px;
  transition: .5s ease-in-out;

  &:hover, &.active {
    cursor: pointer;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(10deg, ${theme.colors.gradiets.color1},${theme.colors.gradiets.color2} );
    transition: .2s ease-in-out;
  }
`
