import React from 'react'
import styled from 'styled-components'
import CareerCard from './CareerCard'
import MockupsMobile from '../../assets/images/membership/opportunities-mockups-mobile.png'
import MockupsDesktop from '../../assets/images/membership/opportunities-mockups-desktop.png'

const StyledSection = styled.section`
    position: relative;
    padding: 0px 16px 140px 16px;
    background: #F3F4F6;
    overflow-x: clip;
    // border: 4px solid lightcoral;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 720px) {
        padding: 0px 64px 140px 64px;
    }

    @media (min-width: 1024px) {
        padding: 0px 64px 0px 64px;
        flex-direction: row;

        & > .flex-right {
            align-items: center;
        }
    }

    @media (min-width: 1440px) {
        padding: 0px 140px 0px 140px;
    }
    
    & > .flex-right {
        position: relative;
        flex-shrink: 1;
        overflow-y: show;
        display: flex;
        justify-content: center;
    }
`

const Title = styled.h2`
    margin-bottom: 24px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 100%;
    color: #11243D;
    // border: 1px dashed green;

    @media (min-width: 1024px) {
        font-size: 62px;
        width: 436px;
    }

    @media (min-width: 1440px) {
        width: 568px;
    }
`

const Subtitle = styled.p`
    margin-bottom: 24px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #4F4F4F;
    // border: 1px dashed green;

    @media (min-width: 1024px) {
        width: 436px;
    }

    @media (min-width: 1440px) {
        width: 568px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    // border: 1px solid green;

    @media (min-width: 1024px) {
        width: 436px;
    }

    @media (min-width: 1440px) {
        width: 568px;
    }
`

const MockupsImage = styled.img`
    position: relative;
    max-width: 113%;
    margin-right: -50px;
    margin-bottom: -100px;
    
    // border: 1px dashed green;

    // @media (min-width: 720px) {
    //     top: 768px;
    //     left: initial;
    //     right: -84px;
    // }

    @media (min-width: 1024px) {
        right: -44%;
        width: 113%;
        max-width: unset;
    }

    // @media (min-width: 1440px) {
    //     top: 150px;
    //     right: -140px;
    // }
`

export default function OpportunitiesSection() {
    return (
        <StyledSection id={'career-opportunities'}>
            <div className="flex-left">
                <Title>{'Career Opportunities'}</Title>
                <Subtitle>{'Through the MPower platform and innovative services to support diverse and inclusive workforces, M2N provides members with career advancement opportunities.'}</Subtitle>
                <CardWrapper>
                    <CareerCard
                        title={'Prepare'}
                        subtitle={'Deliver transformational DEI training to hiring managers and extended teams to support their new hires.'}
                        color={'blue'}
                    />

                    <CareerCard
                        title={'Recruit'}
                        subtitle={'Identify candidates for job opportunities based upon work experience and their engagement in the MPower platform.​'}
                        color={'red'}
                    />

                    <CareerCard
                        title={'Connect'}
                        subtitle={'Membership to organizations who promote a comprehensive approach to DEI​.'}
                        color={'green'}
                    />

                    <CareerCard
                        title={'Support'}
                        subtitle={'On-going support for members to ensure they are fulfilled, engaged, and performing well in their new roles.​'}
                        color={'lightblue'}
                    />
                </CardWrapper>
            </div>
            <div className="flex-right">
                <MockupsImage
                    src={MockupsMobile}
                    srcSet={`${MockupsMobile} 575w, ${MockupsDesktop} 811w`}
                    sizes={`(max-width: 1023px) 575px, 811px`}
                    alt={'mockups image'}
                />
            </div>
        </StyledSection>
    )
}
