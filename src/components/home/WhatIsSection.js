import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../reusable-components/'
import logoImg from '../../assets/images/home-what-is-logo.svg'
import appleStoreImg from '../../assets/images/apple-store.png'
import googlePlayImg from '../../assets/images/google-play.png'


const StyledSection = styled.section`
    padding: 0px 16px 0px 16px;
    background: #191C23;
    border: 2px dashed white;

    & > .demo {
        background: #416FF4;
        width: 100%;
        height: 272px;
        // border: 2px dashed orange;
    }

    & > .heading-container {
        margin-top: 120px;
        border: 1px dashed orange;

        & > h2 {
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #FFFFFF;
        }

        & > div {
            display: flex;
            align-items: center;
            // border: 1px dashed red;
        }

        & > div > img {
            // border: 1px solid white;
        }

        & > div > span {
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #FFFFFF;
            // border: 1px solid white;
        }

        & > .body {
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #FFFFFF;
            opacity: 0.7;
        }
    }

    & > .stores-container {
        margin-top: 32px;
        display: flex;
        align-items: center;
        gap: 12px;
        border: 1px dashed orange;

        & > img {
            height: 40px;
        }
    }
`
export default function WhatIsSection() {
    return (
        <StyledSection>
            <div className={'demo'}>
                <p>demo div</p>
            </div>
            <div className={'heading-container'}>
                <h2>{'What is'}</h2>
                <div>
                    <img 
                        src={logoImg}
                        alt={'logo'}
                    />
                    <span>{'?'}</span>
                </div>
                <p className={'body'}>{'A dynamic and interactive online platform to empower minority professionals.'}</p>
            </div>

            <div className={'stores-container'}>
                <img
                    src={appleStoreImg}
                    alt={'Click for Apple Store'}
                    className={'apple-image'}
                />

                <img
                    src={googlePlayImg}
                    alt={'Click for Google Play Store'}
                    className={'google-image'}
                />
            </div>
            {/* <IconButton 
                label={'View benefits'} 
                color={'blue'}
            /> */}
        </StyledSection>
    )
}
