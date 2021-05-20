import React from 'react'
import styled from 'styled-components'
import LinkItem from './NewHeader/LinkItem'

const StyledNav = styled.nav`
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: white;
    z-index: 2;
    background: #21201F;
    opacity: 0.95;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 1024px) {
        display: none;
    }
`

export default function NewSideNav() {
    return (
        <StyledNav>
            <LinkItem className={'side-nav-link'} />
            <p>{'Side nav'}</p>
        </StyledNav>
    )
}
