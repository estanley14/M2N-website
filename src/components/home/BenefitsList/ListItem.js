import React from 'react'
import styled from 'styled-components'
import blueBullet from '../../../assets/images/home-network-bullet-blue.svg'

const StyledItem = styled.li`
    display: flex;
    align-items: center;
    gap: 14px;
    list-style-type: none;
    // border: 1px dashed green;
    // background: lightgrey;

    & > p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #FFFFFF;
        // border: 1px dashed green;
    }

    & > img {
        width: 12px;
        height: 12px;
        // border: 1px dashed green;
    }
`

export default function ListItem(props) {
    const { label } = props

    return (
        <StyledItem>
            <img
                src={blueBullet}
                alt={'bullet point'}
                className={'bullet-image'}
            />
            <p>{label}</p>
        </StyledItem>
    )
}
