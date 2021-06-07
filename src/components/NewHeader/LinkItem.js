import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 128px;
    height: 28px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.fontcolor};
    // border: 2px dashed orange;

    & > div {
        width: 12px;
        height: 4px;
        background: ${props => props.indicatorbackground};
    }
`

export default function LinkItem(props) {
    const { label, linkTo, name, theme, className } = props
    const { pathname } = useLocation()
    let activeFontColor = setActiveFontColor(pathname, name, theme)
    let indicatorBackground = setIndicatorBackground(pathname, name)

    function setActiveFontColor(path, linkName, headerTheme) {
        if (path === linkName && headerTheme === 'light') {
            return `#2A2C30`
        } else if (path === linkName && headerTheme === 'dark') {
            return `#FFFFFF`
        } else {
            return '#82888E'
        }
    }

    function setIndicatorBackground(path, linkName) {
        if (path === linkName) {
            return '#416FF4'
        } else {
            return 'none'
        }
    }

    return (
        <StyledLink to={linkTo} fontcolor={activeFontColor}>
            {label}
            <div style={{ background: indicatorBackground }}></div>
        </StyledLink>
    )
}
