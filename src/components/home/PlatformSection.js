import React from 'react'
import styled from 'styled-components'
import { PlatformCard1, PlatformCard2, PlatformCard3 } from '../reusable-components/'
import mobileGraph from '../../assets/images/home-platform-graphic.png'

const StyledSection = styled.section`
    position: relative;
    padding: 0px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    border: 2px dashed black;

    & > .graph-image {
        // width: 288px;
        border: 1px dashed orange;
    }

    & > .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        // border: 2px solid black;
    }
`

export default function PlatformSection() {
    return (
        <StyledSection>
            <img
                src={mobileGraph}
                alt={'platform graph iamge'}
                className={'graph-image'}
            />
            <div className={'card-container'}>
                <PlatformCard1 title={'Membership'} body={'Builds an active network of diverse professionals empowered by their individual lived experiences through personal & professional development.'} />
                <PlatformCard2 title={'Placement'} body={'Internal recruiting services engage a network of companies committed to recruiting, onboarding, and mentoring M2N membership.'} />
                <PlatformCard3 title={'Services'} body={'Supports transformation change at the systematic level through DEI support and services lead by industry leaders.'} />
            </div>
        </StyledSection>
    )
}
