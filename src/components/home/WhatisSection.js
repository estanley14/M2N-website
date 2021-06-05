import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    position: relative;
    border: 2px dashed black;
`

export default function WhatIsSection() {
    return (
        <StyledSection>
            <p>{'what is section'}</p>
        </StyledSection>
    )
}
