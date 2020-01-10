import React from 'react'
import { NextPage } from 'next'
import { Body, Title } from '../components/atoms/Typography'
import { HorizontalPagePadding } from '../components/atoms/Layout'
import { ProjectTileGroup } from '../components/molecules/ProjectTileGroup'
import { BackgroundGradient } from '../components/molecules/BackgroundGradient'
import { Footer } from '../components/molecules/Footer'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <HorizontalPagePadding>
      <Title variant='display' mb={4}>
        Stranger Things, <br /> Prototyping Inconvenience.
      </Title>
      <Body my={2} variant='body2' color='colorTextLowContrast'>
        FH Potsdam – Interfacedesign
      </Body>
      <Body my={2} variant='body2' color='colorTextLowContrast'>
        M.A. Jordi Tost, Paula Schuster
      </Body>
      <Body my={2} variant='body2' color='colorTextLowContrast'>
        Summer 2019
      </Body>

      <ProjectTileGroup />
      <BackgroundGradient />
    </HorizontalPagePadding>
    <Footer />
  </>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
