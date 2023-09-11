import React from 'react';
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {MobileMenuHeader} from "./menuMobileHeader/MenuMobileHeader";
import {S} from './Header_Styles'
import {DesktopMenu,} from "./dekstopMenu/DesktopMenu";
import {LogoSvg} from "../../assets/images/LogoSvg";

// const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Tech Stack",
        href: "stack"
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
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexContainer justify={"space-between"} along={"center"}>
                    <a href="#">
                        <LogoSvg/>
                    </a>
                    {width < breakpoint ? <MobileMenuHeader menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}
                </FlexContainer>
            </Container>
        </S.Header>
    );
};




