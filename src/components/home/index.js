import React from 'react'
import HeroSection from './HeroSection'
import NetworkSection from './NetworkSection'
import PlatformSection from './PlatformSection'
import LearnSection from './LearnSection'
import BenefitsSection from './BenefitsSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <NetworkSection />
            <PlatformSection />
            <BenefitsSection />
            <LearnSection />
        </div>
    )
}
