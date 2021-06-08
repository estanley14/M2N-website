import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../reusable-components'
import gridImageMobile from '../../assets/images/hero-imggrid-320px.png'

const StyledSection = styled.section`
    position: relative;
    padding: 64px 16px 92px 16px;
    border: 2px solid lightcoral;

    & > h1 {
        margin-top: 48px;
        margin-bottom: 24px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        color: #2A2C30;
        border: 1px dotted orange;
    }

    & > .link-container {
        text-decoration: none;

        & > .join-button {
            width: 100%;
        }
    }

    & > .image-container {
        position: absolute;
        bottom: -120px;
        left: calc(50% - 288px)/2;
        width: 288px;
        height: 148px;
        background-image:
            url(${gridImageMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: 1px dashed orange;
    }
`

export default function HeroSection() {

    return (
        <StyledSection>
            <h1>{'1st technology solution to increase diversity & inclusion in the workplace.'}</h1>
            <Link to={'/mpower-app/'} className={'link-container'}>
                <Button
                    label={'Join the movement'}
                    className={'join-button'}
                />
            </Link>
            <div className={'image-container'}></div>
            {/* <StyledLink to={'/mpower-app'} className={'button-link'}>
                <Button label={'Join the movement'} className={'hero-button'} />
            </StyledLink> */}
            {/* <div className={'image-grid-container'}></div> */}
            {/* <img
                src={shapesLeft}
                alt={'background shapes'}
                className={'shapes-left'}
            /> */}

            {/* <img
                src={shapesRight}
                alt={'background shapes'}
                className={'shapes-right'}
            /> */}
        </StyledSection>
    )
}
