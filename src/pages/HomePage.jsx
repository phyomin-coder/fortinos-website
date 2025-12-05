import React from 'react'
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