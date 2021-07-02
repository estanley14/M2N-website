import React from 'react'
import styled from 'styled-components'
import heroImageMobile from '../../assets/images/membership/hero-logo-mobile.svg'
import heroImageDesktop from '../../assets/images/membership/hero-logo-desktop.svg'
import heroMockups from '../../assets/images/membership/hero-mockups.png' 
import heroOval from '../../assets/images/hero-oval.svg'
import stripesImg from '../../assets/images/home/learnmore-stripes-red.svg'
import blobImg from '../../assets/images/shapes-blob.svg'
import redBlobImg from '../../assets/images/shapes-blob-red.svg'
import appStoreMobile from '../../assets/images/membership/hero-appstore-mobile.svg'
import appStoreDesktop from '../../assets/images/membership/hero-appstore-desktop.svg'
import googlePlayMobile from '../../assets/images/membership/hero-googleplay-mobile.svg'
import googlePlayDesktop from '../../assets/images/membership/hero-googleplay-desktop.svg'
// import shapesMobile from '../../assets/images/membership/hero-shapes-mobile.svg'
// import shapesDesktop from '../../assets/images/membership/hero-shapes-desktop.svg'
// import ovalMobile from '../../assets/images/membership/hero-oval-mobile.svg'
// import ovalDesktop from '../../assets/images/membership/hero-oval-desktop.svg'
// import MockupMobile from '../../assets/images/membership/hero-mockups-320px.png'
// import MockupTablet from '../../assets/images/membership/hero-mockups-720px.png'
// import Mockup1024 from '../../assets/images/membership/hero-mockups-1024.png'
// import Mockup1440 from '../../assets/images/membership/hero-mockups-1440px.png'

const StyledSection = styled.section`
    position: relative;
    padding: 112px 16px 0;
    background: #191C23;
    // border: 2px solid lightcoral;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-x: clip;

    @media (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 100px;
    }

    & > .flex-item.left{
        flex-basis: 500px;
        margin-bottom: 24px;

        & > .hero-oval {
            position: absolute;
            top: 28px;
            left: -400px;
            // width: 800px;
            border: 1px dashed orange;
        }
    }

    & > .flex-item.right{
        flex-basis: 737px;
        position: relative;

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
                top: 32px;
                right: 150px;
                width: 30%;
                // border: 1px solid white;
            }
    
            & > .hero-blob {
                position: absolute;
                top: 0px;
                right: -60px;
                height: 91%;
                // border: 1px solid white;

                &.red-hero-blob {
                    top: 40%;
                    right:0
                }
            }
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        
        & > .flex-item.left{
            flex-basis: unset;
        }
        
        & > .flex-item.right{
            flex-basis: unset;
        }
    }
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

    @media (min-width: 1024px) {
        width: 428px;
    }
`

const LogoImage = styled.img`
    margin-bottom: 10px;
    // border: 1px dashed green;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        width: 428px;
    }
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

    @media (min-width: 1024px) {
        width: 605px;
    }
`

const BackgroundOval = styled.img`
    position: absolute;
    height: 116%;
    top: 30px;
    left: -25%;
    // border: 1px dashed green;

    @media (min-width: 1024px) {
        left: -15%;
    }
`

const MockupsImage = styled.img`
    width:100%;
    margin-bottom: -25px;
    margin-top: 80px;
    z-index: 1;
    position: relative;
`

export default function HeroSection() {
    return (
        <StyledSection>
            <div className="flex-item left">
                <LogoImage
                    src={heroImageMobile}
                    srcSet={`${heroImageMobile} 174w, ${heroImageDesktop} 364w`}
                    sizes={`(max-width: 1023px) 174px, 364px`}
                    alt={'hero image'}
                />

                {/* <BackgroundShapes
                    src={shapesMobile}
                    srcSet={`${shapesMobile} 376w, ${shapesDesktop} 605w`}
                    sizes={`(max-width: 1023px) 376px, 605px`}
                    alt={'background shapes'}
                /> */}

                <BackgroundOval
                    src={heroOval}
                    // srcSet={`${ovalMobile} 688w, ${ovalDesktop} 1120w`}
                    // sizes={`(max-width: 1023px) 688px, 1120px)`}
                    alt={'background oval'}
                />
                <Text>{'Your membership will provide you with on-demand content, for unlimited access to resources, tools, and mentorship to accelerate and advance your career.'}</Text>
                {/* <ButtonWrapper>
                    <AppStoreImage
                        src={appStoreMobile}
                        srcSet={`${appStoreMobile} 113w, ${appStoreDesktop} 140w`}
                        sizes={`(max-width: 1023px) 113px, 140px`}
                        alt={'download on the apple store'}
                    />

                    <AppStoreImage
                        src={googlePlayMobile}
                        srcSet={`${googlePlayMobile} 137w, ${googlePlayDesktop} 170w`}
                        sizes={`(max-width: 1023px) 137px, 170px`}
                        alt={'get it on google play'}
                    />
                </ButtonWrapper> */}
            </div>
            <div className="flex-item right">
                <MockupsImage src={heroMockups}></MockupsImage>
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
                    <img 
                        src={redBlobImg} 
                        alt={'red-blob'} 
                        className={'hero-blob red-hero-blob'}
                    />
                </div>
            </div>
        </StyledSection>
    )
}