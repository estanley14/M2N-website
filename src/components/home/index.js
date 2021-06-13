import React from 'react'
import HeroSection from './HeroSection'
import NetworkSection from './NetworkSection'
import PlatformSection from './PlatformSection'
import LearnSection from './LearnSection'
import BenefitsSection from './BenefitsSection'
import TempSection from '../m-power/MentalSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <NetworkSection />
            <PlatformSection />
            <BenefitsSection />
            <LearnSection />
            <TempSection />
        </div>
    )
}
