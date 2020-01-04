import React from 'react'
import { NextPage } from 'next'
import { Body, Title } from '../components/atoms/Typography'
import { Layout, Box } from '../components/atoms/Layout'
import { Image } from '../components/atoms/Image'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <Box gridColumn={['3 / span 8']}>
      <Title variant='display'>Zyklisches Jodeln ist in Bayern</Title>
      <Body variant='body1'>whats going on</Body>
      <Body variant='body2'>whats going on</Body>
    </Box>
  </Layout>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
