import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavStateContext } from '../context/Nav'
import LinkItem from './NewHeader/LinkItem'
import closeX from '../assets/icons/side-nav-close-x.svg'

const StyledNav = styled.nav`
    // display: none;
    display: ${props => props.display};
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
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
`

export default function NewSideNav() {
    const [isMenuOpen, setIsMenuOpen] = useContext(NavStateContext)
    const { display } = setMenuDisplay(isMenuOpen)
    // console.log(isMenuOpen)

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

    console.log(display)

    return (
        <StyledNav display={display}>
            {/* <LinkItem className={'side-nav-link'} /> */}
            <img
                src={closeX}
                alt={'close'}
                className={'close'}
                onClick={() => closeMenu()}
            />
        </StyledNav>
    )
}
