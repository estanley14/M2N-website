import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavStateContext } from '../context/Nav'
// import LinkItem from './NewHeader/LinkItem'
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

    & > ul {
        margin-top: 112px;
        // border: 1px dashed blue;
    }

    & > ul > li {
        height: 104px;
        display: flex;
        align-items: center;
        // background: blue;
        border-bottom: 1px solid #82888E;

        & > .link {
            width: 100%;
            height: 100%;
            justify-content: center;
            padding: 0px 0px 0px 0px;
            // border-bottom: 1px dashed orange;
        }
    }

    // & > .home-link {
    //     padding: 0px 0px 0px 0px;
    //     border-bottom: 1px dashed orange;
    // }
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
            <ul>
                <li>
                    <LinkItem label={'Home'} className={'link'} />
                </li>
                <li>
                    <LinkItem label={'Membership'} className={'link'} />
                </li>
                <li>
                    <LinkItem label={'Oranziation'} className={'link'} />
                </li>
                <li>
                    <LinkItem label={'Company'} className={'link'} />
                </li>
                <li>
                    <LinkItem label={'Partnerships'} className={'link'} />
                </li>
                <li>
                    <LinkItem label={'Sign up'} className={'link'} />
                </li>
            </ul>
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
