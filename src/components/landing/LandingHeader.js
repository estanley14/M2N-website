import React from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import headerLogo from '../../assets/images/landing/landing-header-logo.svg'

const StyledHeader = styled.header`
    padding: 28px 28px 8px 28px;
    // height: 72px;
    display: flex;
    justify-content: space-between;
    background: #1A202E;
    overflow: hidden;
`

const LogoImage = styled.img`
    width: 38px;
    height: 42px;
    // border: 1px dashed green;

    // @media (min-width: 720px) {
    //     align-self: start;
    // }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    // border: 1px dashed white;
`

export default function LandingHeader() {
    return (
        <StyledHeader>
            <LogoImage
                src={headerLogo}
                alt={'MPower logo'}
            />
            <ButtonWrapper>
                <HeaderButton
                    label={'Take the Survey'}
                    type={'primary'}
                />

                <HeaderButton
                    label={'Sign up for Beta'}
                    type={'secondary'}
                />
            </ButtonWrapper>
        </StyledHeader>
    )
}
