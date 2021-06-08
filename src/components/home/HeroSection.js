import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../reusable-components'
import gridImageMobile from '../../assets/images/hero-imggrid-320px.png'
import gridImageDesktop from '../../assets/images/hero-imggrid-720px.png'
import gridImage1024px from '../../assets/images/hero-imggrid-1024px.png'
import gridImage1440px from '../../assets/images/hero-imggrid-1440px.png'
import stripesMobile from '../../assets/images/hero-stripes-mobile.svg'
import stripesDesktop from '../../assets/images/hero-stripes-desktop.svg'
import solidOvalMobile from '../../assets/images/hero-solidoval-mobile.svg'
import solidOvalDesktop from '../../assets/images/hero-solidoval-desktop.svg'
import strokeOvalMobile from '../../assets/images/hero-strokeoval-mobile.svg'
import strokeOvalDesktop from '../../assets/images/hero-strokeoval-desktop.svg'
import pizzaSlice from '../../assets/images/hero-slice.svg'

const StyledSection = styled.section`
    position: relative;
    padding: 64px 16px 92px 16px;
    // border: 2px solid lightcoral;

    @media (min-width: 720px) {
        padding-left: 64px;
        padding-right: 64px;
    }

    @media (min-width: 1024px) {
        padding: 80px 100px 140px 100px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 224px;
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
        // border: 1px dotted orange;

        @media (min-width: 1024px) {
            margin-top: 64px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 54px;
            line-height: 120%;
            text-align: center;
            color: #2A2C30;
        }

        @media (min-width: 1440px) {
            margin-top: 160px;
        }
    }

    & > p {
        margin-top: 4px;
        margin-bottom: 24px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        color: #11243D;
        opacity: 0.75;
        // border: 1px dotted orange;

        @media (min-width: 1024px) {
            margin-top: 12px;
        }

        @media (min-width: 1440px) {
            margin-bottom: 40px;
        }
    }

    & > .link-container {
        text-decoration: none;
        background: blue;

        & > .join-button {
            width: 100%;
            cursor: pointer;

            @media (min-width: 1024px) {
                position: relative;
                // top: 40px;
                left: calc(50% - 316px/2);
                width: 316px;
            }
        }
    }

    & > .image-container {
        position: absolute;
        bottom: -120px;
        left: calc(50% - 288px)/2;
        width: 288px;
        height: 148px;
        background-image:
            url(${gridImageMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        // border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            bottom: -72px;
            left: calc(50% - 592px/2);
            width: 592px;
            height: 148px;
            background-image:
                url(${gridImageDesktop});
        }

        @media (min-width: 1024px) {
            top: 500px;
            left: calc(50% - 1024px/2);
            width: 1024px;
            height: 448px;
            background-image:
                url(${gridImage1024px});
            // border: 1px solid lightblue;
        }

        @media (min-width: 1440px) {
            top: 580px;
            left: calc(50% - 1169px/2);
            width: 1169px;
            height: 448px;
            background-image:
                url(${gridImage1440px});
        }
    }

    & > .stripes-container {
        position: absolute;
        top: 208px;
        left: -100px;
        width: 180px;
        height: 180px;
        background-image:
            url(${stripesMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: container;
        // border: 1px dashed lightgreen;

        @media (min-width: 1024px) {
            top: 252px;
            left: -64px;
            width: 287px;
            height: 284px;
            background-image:
                url(${stripesDesktop});
        }
    }

    & > .solidoval-container {
        position: absolute;
        top: 256px;
        left: -176px;
        width: 338px;
        height: 210px;
        background-image:
            url(${solidOvalMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        // border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            top: 276px;
            left: -168px;
        }

        @media (min-width: 1024px) {
            top: 368px;
            left: -172px;
            width: 534px;
            height: 332px;
            background-image:
                url(${solidOvalDesktop});
        }
    }

    & > .strokeoval-container {
        position: absolute;
        top: -64px;
        left: 140px;
        width: 527px;
        height: 527px;
        background-image:
            url(${strokeOvalMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        // border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            top: -48px;
            left: 548px;
        }

        @media (min-width: 1024px) {
            visibility: hidden;
        }

        @media (min-width: 1440px) {
            visibility: visible;
            top: -60px;
            left: 792px;
            width: 756px;
            height: 756px;
            background-image:
                url(${strokeOvalDesktop});
        }
    }

    & > .slice-container {
        position: absolute;
        bottom: -28px;
        right: -20px;
        width: 128px;
        height: 128px;
        background-image:
            url(${pizzaSlice});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        // border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            bottom: -120px;
        }

        @media (min-width: 1024px) {
            bottom: 36px;
            right: 280px;
        }

        @media (min-width: 1440px) {
            bottom: 72px;
        }
    }
`

export default function HeroSection() {

    return (
        <StyledSection>
            <h1>{'1st technology solution to increase diversity & inclusion in the workplace.'}</h1>
            <p>{'A comprehensive approach that bridges talent, organizations & services.'}</p>
            <Link to={'/mpower-app/'} className={'link-container'}>
                <Button
                    label={'Join the movement'}
                    className={'join-button'}
                />
            </Link>
            <div className={'image-container'}></div>
            <div className={'stripes-container'}></div>
            <div className={'solidoval-container'}></div>
            <div className={'strokeoval-container'}></div>
            <div className={'slice-container'}></div>
            {/* <StyledLink to={'/mpower-app'} className={'button-link'}>
                <Button label={'Join the movement'} className={'hero-button'} />
            </StyledLink> */}
            {/* <div className={'image-grid-container'}></div> */}
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
