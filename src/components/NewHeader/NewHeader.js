import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavStateContext } from '../../context/Nav'
import LinkItem from './LinkItem'
import { Link } from 'gatsby'
import { Button } from '../../components/reusable-components'
import logoDarkMobile from '../../assets/images/header-logo-dark-mobile.svg'
import logoDarkDesktop from '../../assets/images/header-logo-dark-desktop.svg'
import logoLightMobile from '../../assets/images/header-logo-light-mobile.svg'
import logoLightDesktop from '../../assets/images/header-logo-light-desktop.svg'
import hamburgerMenu from '../../assets/icons/menu_24px.svg'

const HeaderContainer = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    padding: 20px 24px 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid black;
    // background: lightgray;
    opacity: 0.5;
    z-index: 4;

    @media (min-width: 1024px) {
        height: 80px;
        padding-left: 64px;
        padding-right: 64px;
        justify-content: inherit;
    }

    @media (min-width: 1440px) {
        padding-left: 140px;
        padding-right: 140px;
    }

    & > .links-container {
        box-sizing: border-box;
        display: none;
        gap: 24px;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            margin-left: 44px;
            display: flex;
        }

        @media (min-width: 1440px) {
            margin-left: 80px;
        }
    }

    & > .header-logo {
        height: 24px;
        border: 1px dashed orange;

        @media (min-width: 1024px) {
            height: 40px;
        }
    }

    & > .menu-icon {
        // border: 1px dashed orange;
        cursor: pointer;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    & > .link-class {
        text-decoration: none;

        & > .header-button {
            height: 40px;
            display: none;
            cursor: pointer;
    
            @media (min-width: 1024px) {
                position: absolute;
                top: calc(50% - 40px/2);
                right: 64px;
                display: flex;
            }
    
            @media (min-width: 1440px) {
                position: absolute;
                top: calc(50% - 40px/2);
                right: 140px;
                display: flex;
            }
        }
    }
`

const HomeLink = styled(Link)`
    width: ${props => props.mobilewidth};
    height: ${props => props.mobileheight};
    background-image:
        url(${props => props.mobileimage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    // border: 1px dashed dodgerblue;

    @media (min-width: 1024px) {
        width: ${props => props.desktopwidth};
        height: ${props => props.desktopheight};
        background-image:
            url(${props => props.desktopimage});
    }
`

export default function NewHeader(props) {
    const { headerTheme } = props
    const [isMenuOpen, setIsMenuOpen] = useContext(NavStateContext)
    // const {
    //     mobileImg,
    //     mobileWidth,
    //     mobileHeight,
    //     desktopImg,
    //     desktopWidth,
    //     desktopHeight
    // } = setHomeImage(headerTheme)


    function setHomeImage(theme) {
        if (theme === 'light') {
            return {
                mobileImg: logoDarkMobile,
                mobileWidth: `25px`,
                mobileHeight: `24px`,
                desktopImg: logoDarkDesktop,
                desktopWidth: `41px`,
                desktopHeight: `40px`
            }
        } else if (theme === 'dark') {
            return {
                mobileImg: logoLightMobile,
                mobileWidth: `25px`,
                mobileHeight: `24px`,
                desktopImg: logoLightDesktop,
                desktopWidth: `41px`,
                desktopHeight: `40px`
            }
        }
    }

    function openMenu(menuStatus) {
        if (menuStatus === false) {
            setIsMenuOpen(() => true)
        } else if (menuStatus === true) {
            setIsMenuOpen(() => false)
        }
    }

    const tempObj = {...setHomeImage(headerTheme)}

    return (
        <HeaderContainer>
            <HomeLink 
                to={'/'} 
                mobileimage={tempObj.mobileImg}
                mobilewidth={tempObj.mobileWidth}
                mobileheight={tempObj.mobileHeight}
                desktopimage={tempObj.desktopImg}
                desktopwidth={tempObj.desktopWidth}
                desktopheight={tempObj.desktopHeight}
            />

            <div className={'links-container'}>
                <LinkItem
                    label={'Home'}
                    linkTo={'/'}
                    name={'/'}
                    theme={headerTheme}
                />

                <LinkItem
                    label={'Membership'}
                    linkTo={'/mpower/'}
                    name={'/mpower/'}
                    theme={headerTheme}
                />

                <LinkItem
                    label={'Organizations'}
                    linkTo={'/organization/'}
                    name={'/organization/'}
                    theme={headerTheme}
                />

                <LinkItem
                    label={'Company'}
                    linkTo={'/company/'}
                    name={'/company/'}
                    theme={headerTheme}
                />

                <LinkItem
                    label={'Partnerships'}
                    linkTo={'/partners/'}
                    name={'/partners/'}
                    theme={headerTheme}
                />
            </div>

            <Link to={'/mpower-app/'} className={'link-class'}>
                <Button 
                    label={'Sign up'}
                    type={'primary'}
                    className={'header-button'}
                />
            </Link>

            <img 
                src={hamburgerMenu} 
                alt={'menu'} 
                className={'menu-icon'}
                onClick={() => openMenu(isMenuOpen)}
            />
        </HeaderContainer>
    )
}