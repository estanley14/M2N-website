import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './reusable-components'
import ctaOval from '../assets/images/cta-section-oval.svg'
import ctaStripes from '../assets/images/cta-section-stripes.svg'
import appStoreMobile from '../assets/images/membership/hero-appstore-mobile.svg'
import appStoreDesktop from '../assets/images/membership/hero-appstore-desktop.svg'
import googlePlayMobile from '../assets/images/membership/hero-googleplay-mobile.svg'
import googlePlayDesktop from '../assets/images/membership/hero-googleplay-desktop.svg'

const StyledSection = styled.section`
    
    width: 100%;
    padding: 124px 0px 124px 0px;
    display: flex;
    justify-content: center;
    // height: 540px;
    // border: 2px solid black;

    & > .cta-container {
        position: relative;
        border: 8px solid #416FF4;
        border-radius: 20px;
        margin-right: 28px;
        width: 90%;
        margin: 0 5%;

        & > .content-area {
            position: relative;
            margin-top: -36px;
            margin-right: -28px;
            margin-left: 28px;
            display: flex;
            flex-flow: row wrap;
            gap: 16px;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            padding: 56px 148px 64px 56px;
            // width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-color: #416FF4;
            background-image:
                url(${ctaOval}),
                url(${ctaStripes});
            background-position: 
                top 50% left 0px,
                bottom 0px right 0px;
            // background-size: 
            //     672px, 176px;
            border-radius: 20px;
            // overflow: hidden;

            @media screen and (max-width: 719px) {
                padding: 56px 64px;
            }

            & > .body {
                max-width: 100%;
                width: 315px;
                flex-grow: 1;
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
                font-size: 40px;
                line-height: 48px;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media screen and (max-width: 719px) {
                    font-size: 30px;
                    line-height: 36px;
                }
            }

            & > .flex-item {
                gap: 16px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 350px;

                @media screen and (max-width: 910px){
                    flex-grow: 1;
                }

                & > .link-class {
                    text-decoration: none;
                    width: 100%;

                    & > .cta-button {
                        background: #FF6D55;
                        height: 64px;
                        border-radius: 10px;
                        cursor: pointer;
                        width: 100%;
                    }
                }
            }
        }
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-around;
    flex-wrap: wrap;
    // border: 1px dashed orange;
`

const AppStoreImage = styled.img`
    // border: 1px dashed green;
`

export default function CTASection() {
    return (
        <StyledSection>
            <div className={'cta-container'}>
                <div className={'content-area'}>
                    <h3 className={'body'}>{'Explore the best tools to accelerate your professional development'}</h3>
                    <div className={'flex-item'}>
                        <Link to={'/membership/'} className={'link-class'}>
                            <Button
                                label={'Explore MPower'}
                                className={'cta-button'}
                            />
                        </Link> 
                        <ButtonWrapper>
                            <Link to={'/mpower-app'}>
                                <AppStoreImage
                                    src={appStoreMobile}
                                    srcSet={`${appStoreMobile} 113w, ${appStoreDesktop} 140w`}
                                    sizes={`(max-width: 1023px) 113px, 140px`}
                                    alt={'download on the apple store'}
                                />
                            </Link>
                            <Link to={'/mpower-app'}>
                                <AppStoreImage
                                    src={googlePlayMobile}
                                    srcSet={`${googlePlayMobile} 137w, ${googlePlayDesktop} 170w`}
                                    sizes={`(max-width: 1023px) 137px, 170px`}
                                    alt={'get it on google play'}
                                />
                            </Link>
                        </ButtonWrapper>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}
