import React from 'react'
import styled from 'styled-components'
import NetworkImage from './NetworkImage'
import NetworkBullet from './NetworkBullet'
import networkLogo from '../../assets/images/home-network-logo.svg'

const StyledSection = styled.section`
    padding: 0px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px dashed black;

    @media (min-width: 720px) {
        padding-left: 64px;
        padding-right: 64px;
        // border: 2px dashed red;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-end;
        gap: 24px;
        // justify-content: space-between;
        // border: 2px dashed blue;
    }

    @media (min-width: 1440px) {
        padding-left: 140px;
        padding-right: 140px;
        align-items: center;
        // border: 2px dashed red;
    }

    & > .network-image {
        margin-bottom: 64px;

        @media (min-width: 720px) {
            width: 592px;
        }

        @media (min-width: 1024px) {
            margin-bottom: 0px;
            // width: 436px;
            height: 656px;
        }

        @media (min-width: 1440px) {
            height: 656px;
            width: 568px;
        }

    }

    & > .content-container {
        // border: 1px dashed orange;

        @media (min-width: 720px) {
            // width: 592px;
        }

        @media (min-width: 1024px) {
            width: 436px;
        }

        @media (min-width: 1440px) {
            width: 568px;
        }

        & > .section-logo {
            margin-top: 0px;
            margin-bottom: 4px;
            align-self: flex-start;
            // border: 1px dashed orange;
        }

        & > .title {
            margin-bottom: 16px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #11243D;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                font-size: 62px;
            }
        }
    
        & > .body {
            margin-bottom: 32px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #4F4F4F;
            // border: 1px dashed orange;
        }

        & > .bullet-one {
            margin-bottom: 24px;

            @media (min-width: 1024px) {
                margin-bottom: 32px;
            }
        }
    
        & > .bullet-two {
            margin-top: 0px;
        }
    }
`

export default function NetworkSection() {
    return (
        <StyledSection>
            <NetworkImage className={'network-image'} />
            <div className={'content-container'}>
                <img
                    src={networkLogo}
                    alt={'Minority Moves Network logo'}
                    className={'section-logo'}
                />
                <h2 className={'title'}>{'Minority Moves Network'}</h2>
                <p className={'body'}>{'Meeting people and organizations where they are through proprietary technology, Minority Moves Network (M2N) empowers, trains, connects and supports diverse professionals to find employment within companies committed to an inclusive workplace.'}</p>
                <NetworkBullet
                    color={'blue'}
                    bodyText={'Builds an active membership of diverse professionals seeking personal & professional development to cultivate a collective network of support for long term success.'}
                    className={'bullet-one'}
                />

                <NetworkBullet
                    color={'red'}
                    bodyText={'Engages a network of companies committed to recruiting, onboarding, and mentoring to create an inclusionary employment culture through consulting and bridge services.'}
                    className={'bullet-two'}
                />
            </div>
        </StyledSection>
    )
}