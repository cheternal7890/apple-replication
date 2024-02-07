import React from 'react'
import styled from 'styled-components'

function Section({backgroundImage, title, description, link1, link2, color, marginTop}) {
  return (
    <Wrap bgImage = {backgroundImage}>
      <ItemText color = {color} marginTop={marginTop}>
            <h1>{title}</h1>
            <p>{description}</p>
      </ItemText>

      <ButtonGroup>
        <LeftButton>
            <a href = "">{link1}{'>'}</a>
        </LeftButton>

        <RightButton>
           <a href = "">{link2}{'>'}</a>
        </RightButton>
      </ButtonGroup>


    </Wrap>
  )
}

export default Section;


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("images/Vision Pro Background.png");

    display: flex;
    flex-direction: column;
   
    align-items: center;


    background-image: ${props => `url("/images/${props.bgImage}")`};
    padding: 20px 15px;
    
`;


const ItemText = styled.div`
  text-align: center;
  margin-top: auto;
  font-size: 20px;


  margin-top: ${props => props.marginTop || 'auto'};
  color: ${props => props.color || 'white'};
`

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 20px;
`
const LeftButton = styled.div`
    padding: 0 10px;
    

    a{
      text-decoration: none;
      color: #2d63c9;
    }

    a: hover{
        text-decoration: underline;
        color: #2d63c9;
    }
`

const RightButton = styled(LeftButton)`
`

