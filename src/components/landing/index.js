import React from 'react'
import LandingHeader from './LandingHeader'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import PlatformSection from './PlatformSection'
import SurveySection from './SurveySection'
import LandingFooter from './LandingFooter'

export default function LandingPage() {
    return (
        <div>
            <LandingHeader />
            <HeroSection />
            <BenefitsSection />
            <PlatformSection />
            <SurveySection />
            <LandingFooter />
        </div>
    )
}
