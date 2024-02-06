import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
      backgroundImage="Vision Pro Background Alt.jpg"
      title="Vision Pro"
      description="Welcome to the era of spatial computing."
      link1="Learn more"
      link2="Buy"
      />
      

      <Section
      backgroundImage="Apple iPhone 15 Blue.png"
      title="iPhone 15"
      color = "black"
      description="New Camera. New Design. Newphoria."
      link1="Learn more"
      link2="Buy"
      marginTop="45px"
      />

      <Section
      backgroundImage="Apple iPhone 15 Pro.jpg"
      title="iPhone 15 Pro"
      description="Titanium. So strong. So light. So Pro."
      link1="Learn more"
      link2="Buy"
      marginTop="90px"
      />
   




     
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`