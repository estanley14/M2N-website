import React from 'react'
import styled from 'styled-components'
import { Button } from '../reusable-components'
import shapesLeft from '../../assets/images/home-hero-shapes-left.svg'
import shapesRight from '../../assets/images/home-hero-shapes-right.svg'
import mobileGrid from '../../assets/images/home-hero-grid-mobile.png'
import tabletGrid from '../../assets/images/home-hero-grid-tablet.png'
import desktop1024Grid from '../../assets/images/home-hero-grid-desktop1024.png'
import desktop1440Grid from '../../assets/images/home-hero-grid-desktop1440.png'


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 64px 16px 0px 16px;
    padding: 64px 16px 48px 16px;
    // border: 2px dashed black;
    width: 100%;
    background-position: 
        top 208px left -188px,
        top -80px right -420px;
    background-repeat: no-repeat;
    // background-color: #F3F4F6;
    background-size: 340px, 600px;
    background-image:
        url(${shapesLeft}),
        url(${shapesRight});

    @media (min-width: 720px) {
        padding-left: 64px;
        padding-right: 64px;
        // border: 2px dashed red;
    }

    @media (min-width: 1024px) {
        padding-top: 80px;
        padding-left: 160px;
        padding-right: 160px;
        // padding-bottom: 80px;
        // border: 2px dashed red;
    }

    @media (min-width: 1440px) {
        padding-top: 168px;
        padding-right: 240px;
        padding-left: 240px;
        // border: 2px dashed red;
    }

    & > h1 {
        margin-top: 48px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        color: #2A2C30;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            margin-top: 64px;
            font-size: 62px;
            line-height: 120%;
        }

        @media (min-width: 1024px) {
            margin-top: 88px;
        }
    }

    & > .hero-button {
        margin: 24px 0px 64px 0px;
        width: 100%;
        cursor: pointer;

        @media (min-width: 1024px) {
            width: 316px;
        }
    }

    & > .image-grid-container {
        width: 100%;
        height: 148px;
        background-image: 
            url(${mobileGrid});
        background-repeat: no-repeat;
        background-position: center;
        border: 1px dashed blue;

        @media (min-width: 720px) {
            // width: 592px;
            height: 148px;
            // background: red;
            background-image:
                url(${tabletGrid});
        }

        @media (min-width: 1024px) {
            width: 1024px;
            height: 448px;
            // background: red;
            background-image:
                url(${desktop1024Grid});
            // border: 2px solid red;
        }

        @media (min-width: 1440px) {
            width: 1440px;
            // width: 100%;
            height: 448px;
            // background: red;
            background-image:
                url(${desktop1440Grid});
            // border: 2px solid red;
        }
    }
`

export default function HeroSection() {
    return (
        <StyledSection>
            <h1>{'We advance diversity, equity, and inclusion in today\'s workplace.'}</h1>
            <Button label={'Join the movement'} className={'hero-button'} />
            <div className={'image-grid-container'}></div>
            {/* <img
                src={shapesLeft}
                alt={'background shapes'}
                className={'shapes-left'}
            /> */}

            {/* <img
                src={shapesRight}
                alt={'background shapes'}
                className={'shapes-right'}
            /> */}
        </StyledSection>
    )
}
