import React from 'react'
import styled from 'styled-components'
import ImageGrid from './ImageGrid'
import logoMobile from '../../assets/images/landing/hero-logo-mobile.svg'
import logoDesktop from '../../assets/images/landing/hero-logo-desktop.svg'
// import imgGridMobile from '../../assets/images/landing/hero-imagegrid-mobile.png'
import imageMobile from '../../assets/images/landing/hero-image-mobile.png'

const StyledSection = styled.section`
    position: relative;
    padding: 448px 16px 64px 16px;
    background: #1A202E;
    color: white;
    // border: 4px solid lightcoral;

    @media (min-width: 720px) {
        padding: 0px 64px 0px 64px;
    }

    @media (min-width: 1440px) {
        padding: 0px 172px 0px 172px;
    }
`

const LogoImage = styled.img`
    margin-bottom: 44px;
    // border: 1px dashed green;
`

const Title = styled.h2`
    margin-bottom: 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 120%;
    color: #FFFFFF;
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    margin-bottom: 48px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    opacity: 0.75;
    // border: 1px dashed green;
`

const MockupImage = styled.img`
    position: absolute;
    top: 40px;
    left: calc(50% - 284px/2);
    // border: 1px dashed green;
`

export default function HeroSection() {
    return (
        <StyledSection>
            <LogoImage
                src={logoMobile}
                srcSet={`${logoMobile} 240w, ${logoDesktop} 412w`}
                sizes={`(max-width: 1023px) 240px, 412px`}
                alt={'introducing mpower'}
            />
            <Title>{'A platform to empower and educate minority professionals.'}</Title>
            <Subtitle>{'Providing training, mentoring and employment opportunities with hiring organizations who demonstrate a comprehensive commitment to an inclusive workplace.'}</Subtitle>
            <ImageGrid />
            <MockupImage
                src={imageMobile}
                alt={'product image'}
            />
        </StyledSection>
    )
}
