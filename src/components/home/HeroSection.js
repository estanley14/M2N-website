import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../reusable-components'
import gridImageMobile from '../../assets/images/hero-imggrid-320px.png'
import gridImageDesktop from '../../assets/images/hero-imggrid-720px.png'
import stripesMobile from '../../assets/images/hero-stripes-mobile.svg'
import solidOvalMobile from '../../assets/images/hero-solidoval-mobile.svg'
import strokeOvalMobile from '../../assets/images/hero-strokeoval-mobile.svg'
import pizzaSlice from '../../assets/images/hero-slice.svg'

const StyledSection = styled.section`
    position: relative;
    padding: 64px 16px 92px 16px;
    border: 2px solid lightcoral;

    @media (min-width: 720px) {
        padding: 48px 86px 140px 86px;
    }

    & > h1 {
        margin-top: 48px;
        // margin-bottom: 24px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        color: #2A2C30;
        border: 1px dotted orange;
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
        border: 1px dotted orange;
    }

    & > .link-container {
        text-decoration: none;

        & > .join-button {
            width: 100%;
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
        border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            bottom: -72px;
            left: calc(50% - 592px/2);
            width: 592px;
            height: 148px;
            background-image:
                url(${gridImageDesktop});
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
        border: 1px dashed lightgreen;
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
        border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            top: 276px;
            left: -168px;
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
        border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            top: -48px;
            left: 548px;
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
        border: 1px dashed lightgreen;

        @media (min-width: 720px) {
            bottom: -120px;
            // right: -20px;
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
