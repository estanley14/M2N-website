import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 20px 0px 20px 16px;
    border: 4px solid #6E90F4;
    border-radius: 20px;

    @media (min-width: 1440px) {
        width: 353px;
    }

    & > .title {
        margin-bottom: 8px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #11243D;
        // border: 1px dashed orange;
    }

    & > .body {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        // border: 1px dashed orange;
    }
`

export default function PlatformCard(props) {
    const { title, body, className } = props
    return (
        <CardContainer className={className}>
            <h4 className={'title'}>{title}</h4>   
            <p className={'body'}>{body}</p>
        </CardContainer>
    )
}
