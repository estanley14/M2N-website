import React from 'react'
import styled from 'styled-components'
import blueBullet from '../../../assets/images/home-network-bullet-blue.svg'
import redBullet from '../../../assets/images/home-network-bullet-red.svg'

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
    const { label, color } = props

    function setBullet(status, blueItem, redItem) {
        if (status == 'blue') {
            return blueItem
        } else if (status === 'red') {
            return redItem
        }
    }

    let coloredBullet = setBullet(color, blueBullet, redBullet)

    return (
        <StyledItem>
            <img
                src={coloredBullet}
                alt={'bullet point'}
                className={'bullet-image'}
            />
            <p>{label}</p>
        </StyledItem>
    )
}
