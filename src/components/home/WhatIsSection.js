import React from 'react'
import styled from 'styled-components'
// import { navigate } from 'gatsby'
import { BenefitsList } from './BenefitsList'
import productImageMobile from '../../assets/images/home/whatis-image-mobile.png'
import productImageDesktop from '../../assets/images/home/whatis-image-desktop.png'
import stripesMobile from '../../assets/images/home/whatis-stripes-mobile.svg'
import stripesDesktop from '../../assets/images/home/whatis-stripes-desktop.svg'
import redOvalMobile from '../../assets/images/home/whatis-redoval-mobile.svg'

import grayOvalMobile from '../../assets/images/home/whatis-grayoval-mobile.svg'
import grayOvalDesktop from '../../assets/images/home/whatis-grayoval-desktop.svg'

import logoMobile from '../../assets/images/home/whatis-logo-mobile.png'
import logoDesktop from '../../assets/images/home/whatis-logo-desktop.png'
import dotsMobile from '../../assets/images/home/whatis-dots-mobile.svg'

// import appStoreMobile from '../../assets/images/apple-store.png'
// import googlePlayMobile from '../../assets/images/google-play.png'
import appStoreMobile from '../../assets/images/home/whatis-applestore-mobile.svg'
import appStoreDesktop from '../../assets/images/home/whatis-applestore-desktop.svg'
import googlePlayMobile from '../../assets/images/home/whatis-googleplay-mobile.svg'
import googlePlayDesktop from '../../assets/images/home/whatis-googleplay-desktop.svg'

// import { IconButton } from '../reusable-components/'
// import logoImg from '../../assets/images/home-what-is-logo.svg'
// import appleStoreImg from '../../assets/images/apple-store.png'
// import googlePlayImg from '../../assets/images/google-play.png'


const StyledSection = styled.section`
    position: relative;
    padding: 274px 16px 96px 16px;
    background: #191C23;
    // border: 2px solid red;

    @media (min-width: 1024px) {
        padding: 186px 0px 232px 160px;
    }

    & > .header-container {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        color: white;
        border: 1px solid white;

        @media (min-width: 1024px) {
            // margin-left: 160px;
            width: 496px;
        }

        & > .text {
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #FFFFFF;
            border: 1px dotted orange;

            @media (min-width: 1024px) {
                font-size: 62px;
            }
        }

        & > .body {
            margin-top: 8px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #FFFFFF;
            opacity: 0.7;
            border: 1px dotted orange;
        }

       & > .app-buttons-wrapper {
            margin-top: 32px;
            display: flex;
            gap: 12px;
            border: 1px dashed lightgreen;

            & > .app-store-button {
                width: 116px;
                height: 42px;
                background-image: 
                    url(${appStoreMobile});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                // border: 1px solid blue;

                @media (min-width: 1024px) {
                    width: 132px;
                    height: 48px;
                    background-image: 
                        url${appStoreDesktop};
                }
           }

           & > .google-play-button {
                width: 116px;
                height: 42px;
                background-image: 
                    url(${googlePlayMobile});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                // border: 1px solid blue;

                @media (min-width: 1024px) {
                    width: 157px;
                    height: 48px;
                    background-image:
                        url(${googlePlayDesktop});
                }
            }
       }

        & > .wrapper {
            display: flex;
            align-items: center;
            border: 1px dashed lightgreen;

            & > .logo-container {
                width: 164px;
                height: 44px;
                background-image:
                    url(${logoMobile});
                background-repeat: no-repeat;
                background-position: center;
                // background-size: contain;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    width: 262px;
                    height: 72px;
                    background-image:
                        url(${logoDesktop});
                }
            }

            & > .question-mark {
                margin-left: 4px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 120%;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    font-size: 62px;
                }
            }
        }  
    }

    & > .benefits-container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        border: 1px solid white;

        @media (min-width: 1024px) {
            // margin-left: 160px;
            flex-direction: row;
            width: 496px;
        }

        & > .members-benefits {
            width: 100%;
            border: 1px dashed lightgreen;
        }

        & > .organizations-benefits {
            width: 100%;
            border: 1px dashed lightgreen;
        }
    }
`

export default function WhatIsSection() {

    return (
        <StyledSection>

            <div className={'header-container'}>
                <h4 className={'text'}>{'What is'}</h4>
                <div className={'wrapper'}>
                    <div className={'logo-container'}></div>
                    <h4 className={'question-mark'}>{'?'}</h4>
                </div>
                <p className={'body'}>{'A dynamic and interactive online platform to empower minority professionals.'}</p>
                <div className={'app-buttons-wrapper'}>
                    <div className={'app-store-button'}></div>
                    <div className={'google-play-button'}></div>
                </div>
            </div>

            <div className={'benefits-container'}>
                <BenefitsList
                    color={'blue'}
                    listTitle={'For Members'}
                    labels={['Newsfeed', 'Online Classes', 'Keynote Speakers']}
                    buttonLabel={'View Benefits'}
                    className={'members-benefits'}
                />
                <BenefitsList
                    color={'red'}
                    listTitle={'For Organizations'}
                    labels={['Jobs', 'Talent Scores', 'Systems & Services']}
                    buttonLabel={'View Benefits'}
                    className={'organizations-benefits'}
                />
            </div>
        </StyledSection>
    )
}
