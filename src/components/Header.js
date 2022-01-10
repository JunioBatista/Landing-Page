import React from "react"
import {StyledHeader, Nav, Logo, Image} from "./styles/Header.styled"
import {Container} from "./styles/Container.styled"
import {Flex} from "./styles/Flex.styled"
import {Button} from "./styles/Button.styled"
import logo from "./images/logo.svg"
import mockups from './images/illustration-mockups.svg'


export default function Header (){
return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src={logo} />
                <Button>Try It Free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Lorem ipsum dolor sit amet, consectetur elit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam diam, bibendum feugiat posuere id, rutrum a felis. In sit amet feugiat magna, a fermentum dui. Proin rhoncus, ante nec faucibus aliquam, mauris turpis bibendum sapien, sit amet euismod lectus nisl at quam. Nulla tortor nunc, pharetra non lobortis ut, ornare sed quam. Vestibulum et fermentum libero. Nam dictum lectus ut arcu sodales congue. Etiam eget hendrerit nulla.</p>
                    <Button bg='#ff0099' color='#fff'> Get Started For Free </Button>
                </div>
                <Image src={mockups}/>
            </Flex>
        </Container>
    </StyledHeader>
)
}