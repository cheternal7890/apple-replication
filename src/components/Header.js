import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <Menu> 
            <img src='images/apple.svg' class = "appleLogo"/>
            <MiddleMenu>
            <a href="">Store</a>
            <a href="">Mac</a>
            <a href="">iPad</a>
            <a href="">iPhone</a>
            <a href="">Watch</a>
            <a href="">Vision</a>
            <a href="">AirPods</a>
            <a href="">TV & Home</a>
            <a href="">Entertainment</a>
            <a href="">Accessories</a>
            <a href="">Support</a>
            </MiddleMenu>
            <a href = "" class = "rightIcons"><img src='images/magnifying-glass-solid.svg' alt='' width = "14" height= "14"/></a>
            <a href ="" class = "rightIcons"><img src='images/store-white.svg' alt='' width = "14" height= "14"/></a>
        </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    position: fixed;
    background-color: rgba(35, 35, 35, 0.95);

    min-height: 50px;
    width: 100%;

    .appleLogo{
        width: 14px;
        height: 16px;
        margin-right: 14px;
        margin-bottom: 4px;
    }
    
`

const Menu =  styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 12px;    
    margin-left: 50px;
    

    a {
    color: white;
    opacity: 0.75;
    padding: 16px;
    margin-left: 20px;
    text-decoration: none;
 }

    a:hover{
        color: white;
        opacity: 1;
        transition: opacity 500ms ease-in-out;
    }

`

const MiddleMenu = styled.div`


@media(max-width: 1080px){
    display: none;
    

  }
`
