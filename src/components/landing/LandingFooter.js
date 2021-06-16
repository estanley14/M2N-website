import React from 'react'
import styled from 'styled-components'
import appleStoreMobile from '../../assets/images/landing/footer-applestore-mobile.svg'
import googlePlayMobile from '../../assets/images/landing/footer-googleplay-mobile.svg'
import footerLogoMobile from '../../assets/images/landing/footer-mplogo-mobile.svg'

const StyledFooter = styled.footer`
    padding: 96px 16px 96px 16px;
    background: #0E0F10;
    // border: 4px solid pink;
`

const Heading5 = styled.h5`
    margin-bottom: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.528px;
    color: #FFFFFF;
    // border: 1px dashed green;
`

const ButtonContainer = styled.div`
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    // border: 1px solid white;
`

const StoreImage = styled.img`
    width: 152px;
    // border: 1px dashed green;
`

const ContentWrapper = styled.div`
    padding: 40px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    // border: 1px solid white;
`

const FooterLogo = styled.img`
    margin-bottom: 40px;
    // border: 1px dashed green;
`

const Copyright = styled.p`
    margin-bottom: 40px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: rgba(255, 255, 255, 0.502972);
    // border: 1px dashed green;
`

const DisclaimerWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    // border: 1px dashed green;
`

const DisclaimerLink = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    // border: 1px dashed green;
`

export default function LandingFooter() {
    return (
        <StyledFooter>
            <Heading5>{'Download the App'}</Heading5>
            <ButtonContainer>
                <StoreImage
                    src={appleStoreMobile}
                    alt={'download on the apple store'}
                />

                <StoreImage
                    src={googlePlayMobile}
                    alt={'get it on google play'}
                />
            </ButtonContainer>
            <Heading5>{'Sign up to receive Beta Access'}</Heading5>
            <ContentWrapper>
                <FooterLogo
                    src={footerLogoMobile}
                    alt={'MPower logo'}
                />
                <Copyright>{'Copyright © 2020 Lorem Ipsum. All Rights Reserved.'}</Copyright>
                <DisclaimerWrapper>
                    <DisclaimerLink>{'Terms of Use'}</DisclaimerLink>
                    <DisclaimerLink>{'Privacy Policy'}</DisclaimerLink>
                </DisclaimerWrapper>
            </ContentWrapper>
        </StyledFooter>
    )
}
