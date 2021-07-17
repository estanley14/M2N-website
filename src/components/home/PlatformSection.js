import React from 'react'
import styled from 'styled-components'
import graphMobile from '../../assets/images/home/platform-graph-mobile.png'
import graphDesktop from '../../assets/images/home/platform-graphic-desktop.png'
import membershipFrameMobile from '../../assets/images/home/platform-membership-frame-mobile.svg'
import membershipFrameDesktop from '../../assets/images/home/platform-membership-frame-desktop.svg'
import placementFrameMobile from '../../assets/images/home/platform-placement-frame-mobile.svg'
import placementFrameDesktop from '../../assets/images/home/platform-placement-frame-desktop.svg'
import servicesFrameMobile from '../../assets/images/home/platform-services-frame-mobile.svg'
import servicesFrameDesktop from '../../assets/images/home/platform-services-frame-desktop.svg'
import dotsMobile from '../../assets/images/home/dots-mobile.svg'
import dotsDesktop from '../../assets/images/home/dots-desktop.svg'

const StyledSection = styled.section`
    position: relative;
    padding: 48px 16px 96px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    overflow: hidden;
    // border: 2px dashed black;

    @media (min-width: 1024px) {
        padding-top: 60px;
    }

    & > .graph-top-row{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        width: 100%;

        @media (min-width: 720px){
            justify-content: space-between;
            flex-flow: row wrap;
        }

        @media (min-width: 1024px){
            justify-content: space-evenly;
            flex-flow: row wrap;
        }

        & > .graph-image {
            // width: 288px;
            // height: 288px;
            width: 80%;
            max-width: 288px;
            min-width: 0;
            

            @media (min-width: 720px) {
                order: 3;
                max-width: 350px;
                margin: auto;
            }

            @media (min-width: 1024px) {
                flex: 1 1 1px;
                order: 2;
                object-fit: contain;
                height: 100%;
                max-width: 435px;
                max-height: 435px;
                position: relative;
                margin: 0;
            }
        }
    }

    & > .dots-container {
        position: absolute;
        bottom: -46px;
        left: 16px;
        width: 168px;
        height: 96px;
        background-image: 
            url(${dotsMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            bottom: -46px;
            left: 226px;    
            width: 220px;
            height: 124px;
            background-image:
                url(${dotsDesktop});
        }
    }
`

const MemberShipCard = styled.div`
    margin: 25px;
    padding: 20px 0px 20px 12px;
    width: 288px;
    height: 180px;
    background-image:
        url(${membershipFrameMobile});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    border-radius: 10px;

    @media (min-width: 720px) {
        order: 1;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
        padding-left: 46px;
        padding-right: 12px;    
        width: 352px;
        flex: 0 0 352px;
        height: 172px;
        background-image:
            url(${membershipFrameDesktop});
        order: 1;
    }

    & > h5 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #11243D;
        // border: 1px dashed orange;
    }

    & > p {
        margin-top: 8px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        // border: 1px dashed orange;
    }
`

const PlacementCard = styled.div`
    margin: 25px;
    padding: 20px 0px 20px 12px;
    width: 288px;
    height: 180px;
    background-image:
        url(${placementFrameMobile});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    border-radius: 10px;
    @media (min-width: 720px) {
        order: 1;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
        padding-left: 48px;
        padding-right: 12px;
        width: 352px;
        background-image:
            url(${placementFrameDesktop});
        flex: 0 0 352px;
        height: 172px;
        order: 3;
    }

    & > h5 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #27AAE1;
        // border: 1px dashed orange;
    }

    & > p {
        margin-top: 8px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        // border: 1px dashed orange;
    }
`

const ServicesCard = styled.div`
    padding: 20px 0px 20px 12px;
    margin: 25px;
    width: 288px;
    height: 180px;
    background-image:
        url(${servicesFrameMobile});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 10px;
    // border: 1px dashed orange;

    @media (min-width: 720px) {
        padding: 24px 28px 30px 28px;
        top: 520px;
        left: calc(50% - 352px/2);
        width: 352px;
        height: 164px;
        background-image:
            url(${servicesFrameDesktop});
        background-position: center;
        background-size: cover;
        // border: 1px dashed blue;
    }

    & > h5 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #2B3990;
        // border: 1px dashed orange;
    }

    & > p {
        margin-top: 8px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        // border: 1px dashed orange;
    }
`

export default function PlatformSection() {
    return (
        <StyledSection>
            <div className="graph-top-row">
                <img className={'graph-image'} src={graphDesktop} 
                    srcSet={`${graphDesktop} 435w, ${graphMobile}, 288w`}
                    sizes="(min-width: 1024px) 435px, 288px"
                ></img>
                <MemberShipCard>
                    <h5>{'Membership'}</h5>
                    <p>{'Empowering diverse professionals through original and inspiring content, coaching and mental wellness support.​'}</p>
                </MemberShipCard>

                <PlacementCard>
                    <h5>{'Placement'}</h5>
                    <p>{'Internal recruiting services engage a network of companies committed to recruiting, onboarding, and mentoring M2N membership.'}</p>
                </PlacementCard>
            </div>

            <ServicesCard>
                <h5>{'Services'}</h5>
                <p>{'Supports transformational change at both the individual and organizational level for long term success.​'}</p>
            </ServicesCard>

            <div className={'dots-container'}></div>
        </StyledSection>
    )
}
