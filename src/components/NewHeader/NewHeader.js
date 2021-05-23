import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import LinkItem from './LinkItem'
import { Button } from '../../components/reusable-components'
// import headerLogo from '../../assets/images/logo.png'
import headerLogo from '../../assets/icons/logo.svg'
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
        // width: 590px;
        box-sizing: border-box;
        display: none;
        gap: 24px;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            // background: red;
            margin-left: 44px;
            display: flex;
        }

        @media (min-width: 1440px) {
            margin-left: 80px;
        }

        & > a {
            text-decoration: none;
        }
    }

    & > .header-logo {
        height: 24px;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            height: 40px;
        }
    }

    & > .menu-icon {
        // border: 1px dashed orange;

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

export default function NewHeader() {

    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img 
                    src={headerLogo} 
                    alt={'M2N'} 
                    className={'header-logo'}
                />
            </Link>

            <div className={'links-container'}>
                <Link to={'/'}>
                    <LinkItem label={'Home'} />
                </Link>

                <Link to={'/mpower'}>
                    <LinkItem label={'Membership'} />
                </Link>

                <Link to={'/organization'}>
                    <LinkItem label={'Organization'} />
                </Link>

                <Link to={'/company'}>
                    <LinkItem label={'Company'} />
                </Link>

                <Link to={'/partners'}>
                    <LinkItem label={'Partnerships'} />
                </Link>
            </div>

            <Link to={'/mpower-app'} className={'link-class'}>
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
            />
        </HeaderContainer>
    )
}
