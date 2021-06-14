import React from 'react'
import styled from 'styled-components'
import heroImageMobile from '../../assets/images/membership/hero-logo-mobile.svg'
import appStoreMobile from '../../assets/images/membership/hero-appstore-mobile.svg'
import googlePlayMobile from '../../assets/images/membership/hero-googleplay-mobile.svg'
import shapesMobile from '../../assets/images/membership/hero-shapes-mobile.svg'
import ovalMobile from '../../assets/images/membership/hero-oval-mobile.svg'
import mockupsMobile from '../../assets/images/membership/hero-mockups-320px.png'

const StyledSection = styled.section`
    position: relative;
    padding: 112px 16px 366px 16px;
    background: #191C23;
    // overflow: hidden;
    border: 2px solid lightcoral;
`

const Text = styled.p`
    margin-bottom: 32px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    opacity: 0.75;
    // border: 1px dashed green;
`

const LogoImage = styled.img`
    margin-bottom: 10px;
    // border: 1px dashed green;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
    // border: 1px dashed orange;
`

const AppStoreImage = styled.img`
    // border: 1px dashed green;
`

const BackgroundShapes = styled.img`
    position: absolute;
    width: 376px;
    top: 380px;
    left: 0px;
    // border: 1px dashed green;
`

const BackgroundOval = styled.img`
    position: absolute;
    width: 688px;
    top: -97px;
    left: -375px;
    // border: 1px dashed green;
`

const MockupsImage = styled.img`
    position: absolute;
    width: 290px;
    top: 420px;
    left: calc(50% - 290px/2);
    // border: 1px dashed green;
`

export default function HeroSection() {
    return (
        <StyledSection>
            <LogoImage
                src={heroImageMobile}
                alt={'hero image'}
            />
            <BackgroundShapes
                src={shapesMobile}
                alt={'background shapes'}
            />

            <BackgroundOval
                src={ovalMobile}
                alt={'background oval'}
            />
            <Text>{'Combining a dynamic newsfeed, on-demand video and 1:1/1:x video conferencing, MPower members have unlimited access to the knowledge, resources, tools, and mentorship to accelerate and advance their careers.'}</Text>
            <ButtonWrapper>
                <AppStoreImage
                    src={appStoreMobile}
                    alt={'download on the apple store'}
                />

                <AppStoreImage
                    src={googlePlayMobile}
                    alt={'get it on google play'}
                />
            </ButtonWrapper>
            <MockupsImage 
                src={mockupsMobile}
                alt={'mocksups image'}
            />
        </StyledSection>
    )
}
