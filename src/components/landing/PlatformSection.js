import React from 'react'
import styled from 'styled-components'
import PlatformCard from './PlatformCard'
import newsIcon from '../../assets/images/landing/platform-news-icon.svg'
import universityIcon from '../../assets/images/landing/platform-university-icon.svg'
import keynoteIcon from '../../assets/images/landing/platform-keynote-icon.svg'
import jobsIcon from '../../assets/images/landing/platform-jobs-icon.svg'
import scoreIcon from '../../assets/images/landing/platform-score-icon.svg'
import systemsIcon from '../../assets/images/landing/platform-systems-icon.svg'

const StyledSection = styled.section`
    padding: 48px 16px 0px 16px;
    background: #1A202E;
    border: 4px solid darkgreen;
`

const Title = styled.h2`
    margin-bottom: 16px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 55px;
    text-align: center;
    letter-spacing: -1.386px;
    color: #FFFFFF;
    border: 1px dashed green;
`

const Subtitle = styled.p`
    margin-bottom: 616px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.66px;
    color: #FFFFFF;
    opacity: 0.75;
    border: 1px dashed green;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    border: 1px solid white;
`

export default function PlatformSection() {
    return (
        <StyledSection>
            <Title>{'The MPower Platform Features'}</Title>
            <Subtitle>{'Using proprietary technology MPower is a full scale platform for minority professionals.'}</Subtitle>
            <CardWrapper>
                <PlatformCard
                    icon={newsIcon}
                    title={'News Feed'}
                    subtitle={'Knowledge and empowerment through daily delivery of curated stories and articles about Diversity, Equity and Inclusion.'}
                />
                <PlatformCard
                    icon={universityIcon}
                    title={'University'}
                    subtitle={'A video-based professional & career development curriculum. Online classes that empower, educate, & mentor minority professionals.'}
                />
                <PlatformCard
                    icon={keynoteIcon}
                    title={'Keynote'}
                    subtitle={'Unique tradecraft and life lesson discussions presented by globally recognized celebrities & thought leaders.'}
                />
                <PlatformCard
                    icon={keynoteIcon}
                    title={'Jobs'}
                    subtitle={'Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.'}
                />
                <PlatformCard
                    icon={jobsIcon}
                    title={'Jobs'}
                    subtitle={'Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.'}
                />
                <PlatformCard
                    icon={scoreIcon}
                    title={'Talent Score'}
                    subtitle={'Talent scoring metrics for M2N internal recruiting based upon education, employment experience and activity within the platform.'}
                />
                <PlatformCard
                    icon={systemsIcon}
                    title={'Systems & Services'}
                    subtitle={'Services to support new minority hires and the hiring organization to insure minority employees are engaged and contributing in their new role.​'}
                />
            </CardWrapper>
            
            
        </StyledSection>
    )
}
