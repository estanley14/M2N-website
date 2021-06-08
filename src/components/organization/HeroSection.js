import React from 'react'
import styled from 'styled-components'
import heroOval from '../../assets/images/hero-oval.svg'
import stripesImg from '../../assets/images/shapes-stripes.svg'
import blobImg from '../../assets/images/shapes-blob.svg'
import heroImg from '../../assets/images/hero-image2.jpg'
import mockupsDesktop from '../../assets/images/organization-hero-mockups-desktop.png'
import appleStore from '../../assets/images/apple-store.png'
import googleStore from '../../assets/images/google-play.png'
import heroLogo from '../../assets/images/hero-logo.png'

const HeroContainer = styled.section`
    padding-top: 64px;
    width: 100%;
    height: 700px;
    background: #2B3990;

    // background-image: 
    //     url(${heroOval});
    // background-color: #2B3990;
    // background-repeat: no-repeat;
    // background-position:
    //     top 0px left -492px;

    & > .content-container {
        margin-top: 250px;
        margin-left: 140px;
        width: 500px;
        // border: 4px solid white;

        & > .body {
            margin-top: 10px;
            margin-bottom: 48px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #FFFFFF;
            opacity: 0.75;
            // border: 2px dashed orange;
        }

        & > .content-image {
            // border: 1px dashed lightgreen;
        }

        & > .wrapper {
            display: flex;
            gap: 10px;
            // background: lightgrey;
        }
    }

    & > .hero-image {
        position: absolute;
        // top: 22.29%;
        top: 184px;
        // right: 9.38%;
        // right: 120px;
        // left: 56.67%;
        left: 660px;
        bottom: -3.71%;
        width: 729px;
        height: 559px;
        background-image:
            url(${mockupsDesktop});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border-radius: 8px;
        filter: drop-shadow(0px 52px 54px rgba(65, 62, 101, 0.296766));
        // border: 1px solid white;
        z-index: 2;
    }

    & > .hero-oval {
        position: absolute;
        top: 28px;
        left: -400px;
        // width: 800px;
        // border: 1px dashed orange;
    }

    & > .hero-shapes-wrapper {
        position: absolute;
        top: 112px;
        left: 852px;
        width: 568px;
        height: 524px;
        // border: 2px dashed orange;

        & > .hero-stripes {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 176px;
            // border: 1px solid white;
        }

        & > .hero-blob {
            position: absolute;
            top: 0px;
            right: 0px;
            min-width: 488px;
            height: 524px;
            width: 176px;
            // border: 1px solid white;
        }
    }
`

export default function HeroSection() {
    return (
        <HeroContainer>
            <div className={'content-container'}>
                <img 
                    src={heroLogo} 
                    alt={'mpower logo'} 
                    className={'content-image'}
                />
                <p className={'body'}>{'Your organization will have access to diverse candidates and bridge services to ensure long-term retention and improved business outcomes.'}</p>
                <div className={'wrapper'}>
                    <img src={appleStore} alt={'app in Apple Store'} />
                    <img src={googleStore} alt={'app in Google Play'} />
                </div>
            </div>
            <div className={'hero-image'}></div>
            {/* <img
                src={mockupsMobile}
                alt="hero image"
                className={'hero-image'}
            /> */}

            <img
                src={heroOval}
                alt="oval"
                className={'hero-oval'}
            />
            <div className={'hero-shapes-wrapper'}>
                <img 
                    src={stripesImg} 
                    alt={'stripes'} 
                    className={'hero-stripes'}
                />

                <img 
                    src={blobImg} 
                    alt={'blobb'} 
                    className={'hero-blob'}
                />
            </div>
        </HeroContainer>
    )
}
