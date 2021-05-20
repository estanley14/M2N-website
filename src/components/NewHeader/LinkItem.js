import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.div`
    width: 128px;
    height: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: lightcoral;

    & > .active-indicator {
        // visibility: hidden;
        width: 12px;
        height: 4px;
        background: blue;
    }

    & > .header-link {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #82888E;
        // font-family: "DM Sans";

        &:hover {
            color: #2A2C30;
        }
    }
    
`

export default function LinkItem(props) {
    const { label } = props
    
    return (
        <LinkContainer>
            <p className={'header-link'}>{label}</p>
            <div className={'active-indicator'}></div>
        </LinkContainer>
    )
}
