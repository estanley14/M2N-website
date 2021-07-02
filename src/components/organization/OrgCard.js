import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 32px 72px 56px 32px;
    width: 350px;
    max-width: 500px;
    border-radius: 16px;
    background: #FFFFFF;
    flex-grow: 1;

    & > .card-icon {
        margin-bottom: 28px;
        width: 80px;
        // border: 1px dashed blue;
    }

    & > .title {
        margin-bottom: 20px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
        color: #333333;
        // border: 1px dashed blue;
    }

    & > .body {
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #707A89;
        // border: 1px dashed blue;
    }
`

export default function OrgCard(props) {
    const {
        title,
        body,
        icon
    } = props

    return (
        <CardContainer>
            <img
                src={icon}
                alt={'lightning bolt'}
                className={'card-icon'}
            />
            <h4 className={'title'}>{title}</h4>
            <p className={'body'}>{body}</p>
        </CardContainer>
    )
}
