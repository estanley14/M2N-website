import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { BenefitsList } from './BenefitsList'
import { IconButton } from '../reusable-components/'
import logoImg from '../../assets/images/home-what-is-logo.svg'
import appleStoreImg from '../../assets/images/apple-store.png'
import googlePlayImg from '../../assets/images/google-play.png'


const StyledSection = styled.section`
    padding: 0px 16px 96px 16px;
    background: #191C23;
    // border: 2px dashed white;

    @media (min-width: 720px) {
        padding: 0px 64px 96px 64px;
    }

    // & > .demo {
    //     background: #416FF4;
    //     width: 100%;
    //     height: 272px;
    //     border: 2px dashed orange;
    // }

    & > .heading-container {
        margin-top: 120px;
        // border: 1px dashed orange;

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

        & > div > h2 {
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
        // border: 1px dashed orange;

        & > img {
            height: 40px;
        }
    }

    & > .benefits-container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        // border: 1px solid orange;

        @media (min-width: 720px) {
            flex-direction: row;
        }

        @media (min-width: 1440px) {
            gap: 72px;
        }

        & > .members-benefits {
            // border: 1px solid orange;
        }
    }

    
`
export default function WhatIsSection() {

    function handleMembersClick() {
        navigate('/mpower-app')
    }

    function handleOrganizationsClick() {
        navigate('/mpower-app')
    }

    return (
        <StyledSection>
            <div className={'heading-container'}>
                <h2>{'What is'}</h2>
                <div>
                    <img 
                        src={logoImg}
                        alt={'logo'}
                    />
                    <h2>{'?'}</h2>
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

            <div className={'benefits-container'}>
                <BenefitsList
                    color={'blue'}
                    listTitle={'For Members'}
                    labels={['Newsfeed', 'Online Classes', 'Keynote Speakers']}
                    buttonLabel={'View Benefits'}
                    className={'members-benefits'}
                    onClick={() => handleMembersClick()}
                />
                <BenefitsList
                    color={'red'}
                    listTitle={'For Organizations'}
                    labels={['Jobs', 'Talent Scores', 'Systems & Services']}
                    buttonLabel={'View Benefits'}
                    className={'organizations-benefits'}
                    onClick={() => handleOrganizationsClick()}
                />
            </div>
        </StyledSection>
    )
}
