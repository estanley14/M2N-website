import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import IconButton from '../../reusable-components/IconButton'

const ListContainer = styled.div`
    // border: 1px dashed orange;

    & > h4 {
        margin-bottom: 16px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #FFFFFF;
        // border: 1px dashed green;
    }

    & > ul {
        // border: 2px solid red;

        & > li:nth-child(1) {
            margin-bottom: 8px;
        }

        & > li:nth-child(2) {
            margin-bottom: 8px;
        }
    }

    & > .benefits-button {
        cursor: pointer;
        margin-top: 24px;
    }
`

export default function BenefitsList(props) {
    const { 
        color, 
        labels, 
        listTitle, 
        buttonLabel, 
        className, 
        onClick
    } = props

    return (
        <ListContainer className={className}>
            <h4>{listTitle}</h4>
            <ul>
                {labels.map((label, idx) => {
                    return <ListItem key={idx} label={label} color={color} />
                })}
            </ul>
            
            <IconButton
                label={buttonLabel}
                color={color}
                className={'benefits-button'}
                onClick={onClick}
            />
        </ListContainer>
    )
}
