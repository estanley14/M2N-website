import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavStateContext } from '../context/Nav'
import LinkItem from './NewHeader/LinkItem'
import closeX from '../assets/icons/side-nav-close-x.svg'

const StyledNav = styled.nav`
    display: ${props => props.display};
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 112px 0px 0px 0px;
    color: white;
    z-index: 4;
    background: #21201F;
    opacity: 0.95;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 1024px) {
        display: none;
    }

    & > .close {
        position: absolute;
        top: 32px;
        right: 32px;
        width: 48px;
        cursor: pointer;
        // border: 1px dashed orange;
    }

    & > .links-container {
        height: 104px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #82888E;
    }
`

export default function NewSideNav() {
    const [isMenuOpen, setIsMenuOpen] = useContext(NavStateContext)
    const { display } = setMenuDisplay(isMenuOpen)

    function setMenuDisplay(menuStatus) {
        if (menuStatus === false) {
            return {
                display: 'none'
            }
        } else if (menuStatus === true) {
            return {
                display: 'block'
            }
        }
    }

    function closeMenu() {
        setIsMenuOpen(() => false)
    }

    return (
        <StyledNav display={display}>
            <div className={'links-container'} onClick={() => closeMenu()}>
                <LinkItem
                    label={'Home'}
                    linkTo={'/'}
                    name={'/'}
                    className={'link'}
                />
            </div>

            <div className={'links-container'} onClick={() => closeMenu()}>
                <LinkItem
                    label={'Membership'}
                    linkTo={'/mpower/'}
                    name={'/mpower/'}
                    className={'link'}
                />
            </div>

            <div className={'links-container'} onClick={() => closeMenu()}>
                <LinkItem
                    label={'Organizations'}
                    linkTo={'/organization/'}
                    name={'/organization/'}
                    className={'link'}
                />
            </div>

            <div className={'links-container'} onClick={() => closeMenu()}>
                <LinkItem
                    label={'Company'}
                    linkTo={'/company/'}
                    name={'/company/'}
                    className={'link'}
                />
            </div>

            <div className={'links-container'} onClick={() => closeMenu()}>
                <LinkItem
                    label={'Partnerships'}
                    linkTo={'/partners/'}
                    name={'/partners/'}
                    className={'link'}
                />
            </div>
            
            <img
                src={closeX}
                alt={'close'}
                className={'close'}
                onClick={() => closeMenu()}
            />
        </StyledNav>
    )
}
