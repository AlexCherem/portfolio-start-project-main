import React from 'react'
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {LogoSvg} from "../../../assets/images/LogoSvg";
import {Logo} from "../../../components/logo/Logo";


type menuItemsProps = {
    menuItems: string[];
}

export const MobileMenuHeader = ({menuItems}: menuItemsProps) => {
    return (
        <StyledMenuMobile>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {menuItems.map((item) => {
                        return <li>
                            <Link href="#">{item}</Link>
                        </li>
                    })}
                </ul>
                <StyledLogo>
                    <a href="#">
                        <LogoSvg/>
                    </a>
                </StyledLogo>
                <div><Logo/></div>
            </MobileMenuPopUp>
        </StyledMenuMobile>
    );
};

const StyledMenuMobile = styled.nav`  
  display: none;
  
  @media ${theme.media.tablet}{
  display: block;
}
`



const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(217, 217, 239, 0.9);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 67px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fourthFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fourthFont};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}

    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fourthFont};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}

    }
  }
`

const Link = styled.a`
  color: #666666;
  font-size: 20px;
`

const StyledLogo = styled.div`
  width: 120px;
  height: 120px;
  
`