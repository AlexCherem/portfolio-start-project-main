import React from 'react';
import {S} from "../Header_Styles";
import {Menu} from "../../../components/menu/Menu";
import {Logo} from "../../../components/logo/Logo";

type menuItemsProps = {
    menuItems: {
        title: string
        href: string
    }[]
}
export const DesktopMenu: React.FC<menuItemsProps> = ({menuItems}: menuItemsProps) => {
    return (
            <S.DesktopMenu>
                <Menu menuItems={menuItems}/>
                <Logo/>
            </S.DesktopMenu>
    );
};

