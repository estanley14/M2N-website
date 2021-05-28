import React from 'react'
import styled from 'styled-components'
import mobileFrame2 from '../../assets/images/home/platform-frame2-mobile.svg'

const CardContainer = styled.div`
    position: relative;
    padding: 20px 0px 20px 0px;
    width: 312px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background-image: 
        url(${mobileFrame2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    // border: 2px solid red;

    & > h4 {
        padding: 0px 16px 0px 16px;
        width: 100%;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #27AAE1;
        // border: 1px solid orange;

    }

    & > p {
        padding: 0px 16px 0px 16px;
        width: 100%;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        // border: 1px solid orange;
    }
`

export default function PlatformCard2(props) {
    const { title, body } = props

    return (
        <CardContainer>
            <h4>{title}</h4>
            <p>{body}</p>
        </CardContainer>
    )
}
