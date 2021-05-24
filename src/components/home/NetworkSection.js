import React from 'react'
import styled from 'styled-components'
import NetworkImage from './NetworkImage'
import NetworkBullet from './NetworkBullet'
import networkLogo from '../../assets/images/home-network-logo.svg'

const StyledSection = styled.section`
    padding: 48px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed black;

    & > .section-logo {
        margin-top: 64px;
        margin-bottom: 4px;
        align-self: flex-start;
        border: 1px dashed orange;
    }

    & > .title {
        margin-bottom: 16px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        color: #11243D;
        border: 1px dashed orange;
    }

    & > .body {
        margin-bottom: 32px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4F4F4F;
        border: 1px dashed orange;
    }

    & > .bullet-one {
        margin-bottom: 24px;
    }

    & > .bullet-two {
        margin-top: 0px;
    }
`

export default function NetworkSection() {
    return (
        <StyledSection>
            <NetworkImage />
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
        </StyledSection>
    )
}