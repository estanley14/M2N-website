import React from 'react'
import HeroSection from './HeroSection'
import NetworkSection from './NetworkSection'
import PlatformSection from './PlatformSection'
import WhatIsSection from './WhatIsSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <NetworkSection />
            <PlatformSection />
            <WhatIsSection />
        </div>
    )
}
