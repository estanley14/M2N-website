import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './reusable-components'
import ctaOval from '../assets/images/cta-section-oval.svg'
import ctaStripes from '../assets/images/cta-section-stripes.svg'

const StyledSection = styled.section`
    
    width: 100%;
    padding: 124px 0px 124px 0px;
    display: flex;
    justify-content: center;
    // height: 540px;
    // border: 2px solid black;

    & > .cta-container {
        position: relative;

        width: 1268px;
        height: 288px;
        border: 8px solid #416FF4;
        border-radius: 20px;

        & > .content-area {
            position: absolute;
            top: -36px;
            left: 28px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 56px 148px 64px 56px;
            // width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-color: #416FF4;
            background-image:
                url(${ctaOval}),
                url(${ctaStripes});
            background-position: 
                top 50% left 0px,
                bottom 0px right 0px;
            // background-size: 
            //     672px, 176px;
            border-radius: 20px;
            // overflow: hidden;

            & > .body {
                width: 572px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
                font-size: 40px;
                line-height: 48px;
                color: #FFFFFF;
                // border: 1px dashed orange;
            }

            & > .link-class {
                text-decoration: none;

                & > .cta-button {
                    background: #FF6D55;
                    height: 64px;
                    border-radius: 10px;
                    cursor: pointer;

                }
            }
        }
    }
`

export default function CTASection() {
    return (
        <StyledSection>
            <div className={'cta-container'}>
                <div className={'content-area'}>
                    <h3 className={'body'}>{'Explore the best tools to accelerate your professional development'}</h3>
                    <Link to={'/membership/'} className={'link-class'}>
                        <Button
                            label={'Explore MPower'}
                            className={'cta-button'}
                        />
                    </Link> 
                </div>
            </div>
        </StyledSection>
    )
}
