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
        <HeroSubText>Google Drive</HeroSubText>
        <div>
          <button onClick={handleGetStarted}>
            give me dat early access bru
          </button>
        </div>
      </HeroContainer>
      <HowWorksContainer>
        <div>How it works</div>
        <div style={{ height: "100px", width: "100px" }}>
          <Image></Image>
        </div>
      </HowWorksContainer>
    </Layout>
  )
}

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
