import React, {useState} from 'react'
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {S} from '../Header_Styles'
type menuItemsProps = {
    menuItems: {
        title: string
        href: string
    }[]
}


export const MobileMenuHeader: React.FC<menuItemsProps> = ({menuItems}: menuItemsProps) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = ()=>{setMenuIsOpen(!menuIsOpen)}


    return (
        <S.StyledMenuMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopUp isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={menuItems}/>
                <div><Logo/></div>
            </S.MobileMenuPopUp>
        </S.StyledMenuMobile>
    );
};


