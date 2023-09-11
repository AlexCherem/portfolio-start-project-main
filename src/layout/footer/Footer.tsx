import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {FlexContainer} from "../../components/FlexContainer";
import {LogoSvg} from "../../assets/images/LogoSvg"
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {S} from './Styled_Footer'


const itemsFooter = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Technologies",
        href: "technologies"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer id={"contact"}>
            <Container>
                <FlexContainer direction={"column"}>
                    <S.WrapperFooter>
                        <S.LinkSvg>
                            <a href="#"><LogoSvg/></a>
                        </S.LinkSvg>
                       <S.LinkSvg1>
                           <a href="#">+91 12345 09876</a>
                           <a href="#">info@example.com</a>
                           <Logo/>
                       </S.LinkSvg1>
                    </S.WrapperFooter>
                    <S.WrapperFooter1>
                        <S.MenuItems>
                            <Menu menuItems={itemsFooter}/>
                        </S.MenuItems>
                        <S.FooterSpan>Designed and built
                            by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span>
                        </S.FooterSpan>
                    </S.WrapperFooter1>
                </FlexContainer>

            </Container>
        </S.Footer>
    );
};



