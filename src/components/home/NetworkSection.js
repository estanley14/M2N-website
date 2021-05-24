import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    border: 2px dashed orange;
`

export default function NetworkSection() {
    return (
        <StyledSection>
            <p>Network section</p>
        </StyledSection>
    )
}