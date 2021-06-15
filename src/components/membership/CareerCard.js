import { getLowResolutionImageURL } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 16px 32px 24px 32px;
    border-radius: 12px;
    background: ${props => props.background};
    // background: lightblue;
`

const Title = styled.h6`
    margin-bottom: 4px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: ${props => props.color};
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #828282;
    // border: 1px dashed green;
`

export default function CareerCard(props) {
    const {
        title,
        subtitle,
        color
    } = props

    const {
        titleColor,
        backgroundColor
    } = setColors(color)

    function setColors(themeColor) {
        if (themeColor === 'blue') {
            return {
                titleColor: `#416FF4`,
                backgroundColor: `rgba(65, 111, 244, 0.08)`
            }
        } else if (themeColor === 'red') {
            return {
                titleColor: `#FF6D55`,
                backgroundColor: `rgba(255, 109, 85, 0.08)`
            }
        } else if (themeColor === 'green') {
            return {
                titleColor: `#2DCA8C`,
                backgroundColor: `rgba(45, 202, 140, 0.08)`
            }
        } else if (themeColor === 'lightblue') {
            return {
                titleColor: `#27AAE1`,
                backgroundColor: `rgba(39, 170, 225, 0.08);`
            }
        }
    }
   
    return (
        <CardContainer background={backgroundColor}>
            <Title color={titleColor}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </CardContainer>
    )
}
