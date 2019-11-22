import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { getFrontendAppUrl } from "../utils/urls"

const IndexPage = () => {
  const handleGetStarted = () => {
    const redirectUrl = getFrontendAppUrl()
    window.location.replace(redirectUrl)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer>
        <HeroMainText>Found</HeroMainText>
        <HeroSubText>Open things quickly</HeroSubText>
        <div>
          <StartButton onClick={handleGetStarted}>Get started</StartButton>
        </div>
      </HeroContainer>
      <HowWorksContainer></HowWorksContainer>
    </Layout>
  )
}

const StartButton = styled.div`
  cursor: pointer;
  user-select: none;
  transition: background 120ms ease-in 0s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 3px;
  height: 32px;
  padding: 0px 12px;
  font-size: 14px;
  line-height: 1.2;
  border: 1px solid rgba(55, 53, 47, 0.16);
  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
`

const HeroContainer = styled.div`
  height: 820px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background: radial-gradient(ellipse at center, #38b2c4 0, #2696a9 100%);
`

const HeroMainText = styled.h1`
  color: white;
`

const HeroSubText = styled.h2``

const HowWorksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default IndexPage
