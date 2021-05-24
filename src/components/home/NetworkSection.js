import React from 'react'
import styled from 'styled-components'
import NetworkImage from './NetworkImage'

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed orange;
`

export default function NetworkSection() {
    return (
        <StyledSection>
            <NetworkImage />
        </StyledSection>
    )
}