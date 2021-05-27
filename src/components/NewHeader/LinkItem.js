import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

const LinkContainer = styled.div`
    // width: 128px;
    height: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: lightcoral;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        width: 108px;
    }

    @media (min-width: 1440px) {
        width: 128px;
    }

    & > .active-indicator {
        // visibility: hidden;
        width: 12px;
        height: 4px;
        background: #416FF4;
        background: ${props => props.background};
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
    const { label, className } = props
    const { pathname } = useLocation()

    let color = 'red'

    console.log(pathname)


    return (
        <LinkContainer className={className}>
            <p className={'header-link'}>{label}</p>
            <div className={'active-indicator'} background={color}></div>
        </LinkContainer>
    )
}
