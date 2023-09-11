import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding-top: 35px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  position: fixed;

`


//mobile menu header
const StyledMenuMobile = styled.nav`  

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
//desktop menu
const StyledLogo = styled.div`
  max-width: 97px;
  width: 100%;
  min-height: 100%; 
`

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`



export const S = {
    Header,
    StyledLogo,
    DesktopMenu,
    StyledMenuMobile,
    MobileMenuPopUp,
    BurgerButton
}