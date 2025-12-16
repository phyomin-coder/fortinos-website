import React, {useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import HeroSection from '../components/HeroSection'
import RocketImage from '../assets/images/RocketImage.png'
import Driving from '../components/Driving'
import ExpertiseSection from '../components/ExpertiseSection'
import ServicesSection from '../components/ServicesSection'
import CaseStudies from '../components/CaseStudies'
import BusinessElevatorBanner from '../components/BusinessElevatorBanner'


export default function HomePage() {
    useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js'
    script1.async = true

    const script2 = document.createElement('script')
    script2.src = 'https://files.bpcontent.cloud/2025/12/16/07/20251216072838-OW65R8E9.js'
    script2.defer = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])
    return (
        <>
            <HeroSection RocketImage={RocketImage} />
            <Driving />
            <ExpertiseSection />
            <ServicesSection />
            <CaseStudies />
            <BusinessElevatorBanner />
        </>

    )
}