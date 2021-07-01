import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import heroOval from '../../assets/images/hero-oval.svg'
import stripesImg from '../../assets/images/shapes-stripes.svg'
import blobImg from '../../assets/images/shapes-blob.svg'
import heroImg from '../../assets/images/hero-image2.jpg'
import mockupsDesktop from '../../assets/images/organization-hero-mockups-desktop.png'
import appleStore from '../../assets/images/apple-store.png'
import googleStore from '../../assets/images/google-play.png'
import heroLogo from '../../assets/images/hero-logo.png'

const HeroContainer = styled.section`
    padding: 64px 140px 0;
    width: 100%;
    // height: 700px;
    background: #2B3990;

    background-image: 
        url(${heroOval});
    background-color: #2B3990;
    background-repeat: no-repeat;
    background-position:
    top 0px left -492px;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > .flex-item.left{
        flex-basis: 500px;
        margin-bottom: 24px;

        & > .content-container {
            // margin-top: 250px;
            // margin-left: 140px;
            // width: 500px;
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

                & > .apple {
                    width: 139px;
                    height: 50px;
                    background-image:
                        url(${appleStore});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;

                    // border: 1px dashed orange;
                    cursor: pointer;
                }

                & > .google {
                    width: 170px;
                    height: 50px;
                    background-image:
                        url(${googleStore});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    // border: 1px dashed red;
                    cursor: pointer;
                }
            }
        }
    }

    & > .flex-item.right{
        flex-basis: 737px;
        position: relative;

        & > .hero-image {
            position: relative;
            // top: 22.29%;
            // top: 184px;
            // right: 9.38%;
            // right: 120px;
            // left: 56.67%;
            // left: 660px;
            // bottom: -3.71%;
            width: 100%;
            // height: 559px;
            filter: drop-shadow(0px 52px 54px rgba(65, 62, 101, 0.296766));
            // border: 1px solid white;
            z-index: 1;
            margin-bottom: -15%;
        }
    
        & > .hero-oval {
            position: absolute;
            top: 28px;
            left: -400px;
            // width: 800px;
            border: 1px dashed orange;
        }
    
        & > .hero-shapes-wrapper {
            position: absolute;
            top: 0;
            // left: 0;
            right: 0;
            width: 90%;
            height: 90%;
            // border: 2px dashed orange;
    
            & > .hero-stripes {
                position: absolute;
                top: 0px;
                left: 0px;
                width: calc(176% * 100 / 568);
                // border: 1px solid white;
            }
    
            & > .hero-blob {
                position: absolute;
                top: 0px;
                right: 0px;
                min-width: 488px;
                height: calc(524% * 100 / 568);
                width: calc(266% * 100 / 568);
                // border: 1px solid white;
            }
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        padding: 64px 20px 0;
        
        & > .flex-item.left{
            flex-basis: unset;
        }
        
        & > .flex-item.right{
            flex-basis: unset;
        }
    }
`

export default function HeroSection() {

    function handleAppleStoreClick() {
        navigate('/mpower-app/')
    }

    function handleGoolgeStoreClick() {
        navigate('/mpower-app/')
    }


    return (
        <HeroContainer>
            {/* <img
                src={heroOval}
                alt="oval"
                className={'hero-oval'}
            /> */}
            <div className={'flex-item left'}>
                <div className={'content-container'}>
                    <img 
                        src={heroLogo} 
                        alt={'mpower logo'} 
                        className={'content-image'}
                    />
                    <p className={'body'}>{'Your organization will have access to diverse candidates and bridge services to ensure long-term retention and improved business outcomes.'}</p>
                    {/* <div className={'wrapper'}>
                        <div 
                            className={'apple'}
                            onClick={() => handleAppleStoreClick()}
                        ></div>

                        <div 
                            className={'google'}
                            onClick={() => handleAppleStoreClick()}
                        ></div>

                        The new elements; everything above this should be removed if these buttons are reimplemented
                        <img 
                            src={appleStore} 
                            alt={'app in Apple Store'}
                            className={'apple'}
                            onClick={() => handleAppleStoreClick()}
                        />
                        <img 
                            src={googleStore} 
                            alt={'app in Google Play'} 
                            className={'google'}
                            onClick={() => handleGoolgeStoreClick()}
                        />
                    </div> */}
                </div>
            </div>
            <div className={'flex-item right'}>
                <img src={mockupsDesktop} className={'hero-image'}></img>
                {/* <img
                    src={mockupsMobile}
                    alt="hero image"
                    className={'hero-image'}
                /> */}

                {/* <img
                    src={heroOval}
                    alt="oval"
                    className={'hero-oval'}
                /> */}
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
            </div>
        </HeroContainer>
    )
}
