import React from 'react'
import styled from 'styled-components'
import PlatformCard from './PlatformCard'
import graphicImg from '../../assets/images/home-platform-graphic.png'

const StyledSection = styled.section`
    position: relative;
    padding: 0px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    // border: 2px dashed black;

    @media (min-width: 1440px) {
        width: 100%;
        height: 988px;
    }

    & > .image-container {

        @media (min-width: 1440px) {
            position: absolute;
            top: 220px;
            left: calc(50% - 435px/2);    
        }

        & > .graphic {
            width: 288px;
            // border: 1px dashed orange;

            @media (min-width: 1440px) {
                width: 435px;
            }
        }
    }

    & > .membership {
        margin-top: 24px;

        @media (min-width: 1440px) {
            position: absolute;
            top: 315px;
            right: 143px;    
        }
    }

    & > .placement {

        @media (min-width: 1440px) {
            position: absolute;
            top: 315px;
            left: 143px;    
        }
    }

    & > .services {

        @media (min-width: 1440px) {
            position: absolute;
            top: 680px;
            left: calc(50% - 353px/2);    
        }
    }

    & > .card-container {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

export default function PlatformSection() {
    return (
        <StyledSection>
            <div className={'image-container'}>
                <img
                    src={graphicImg}
                    alt={'platform graphic'}
                    className={'graphic'}
                />
            </div>
                <PlatformCard 
                    title={'Membership'}
                    body={'Builds an active network of diverse professionals empowered by their individual lived experiences through personal & professional development.'}
                    className={'membership'}
                />

                <PlatformCard 
                    title={'Placement'}
                    body={'Internal recruiting services engage a network of companies committed to recruiting, onboarding, and mentoring M2N membership.'}
                    className={'placement'}
                />

                <PlatformCard 
                    title={'Services'}
                    body={'Supports transformation change at the systematic level through DEI support and services lead by industry leaders.'}
                    className={'services'}
                />
        </StyledSection>
    )
}
