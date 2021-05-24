import React from 'react'
import styled from 'styled-components'
import blueBullet from '../../assets/images/home-network-bullet-blue.svg'
import redBullet from '../../assets/images/home-network-bullet-red.svg'

const ItemContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2px;
    // border: 1px solid green;

    & > .bullet-image {
        margin-top: 4px;
        // border: 1px dashed orange;
    }

    & > .body {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4F4F4F;
        // border: 1px dashed orange;
    } 
`

export default function NetworkBullet(props) {
    const { 
        color, 
        bodyText,
        className
    } = props

    function setBulletColor(status) {
        if (status === 'blue') {
            return blueBullet
        } else if (status === 'red') {
            return redBullet
        }
    }

    let displayBullet = setBulletColor(color)

    console.log(displayBullet)

    return (
        <ItemContainer className={className}>
            <img
                src={displayBullet}
                alt={'bullet point'}
                className={'bullet-image'}
            />
            <p className={'body'}>{bodyText}</p>
        </ItemContainer>
    )
}
