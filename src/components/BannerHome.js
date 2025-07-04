import React from 'react'
import Banner from "../img/banner home.png"
import Container from 'react-bootstrap/Container';

function BannerHome() {
  return (
    <div>
        <Container fluid className="p-0">
          <img src={Banner} alt="Banner da página inicial"  className="banner w-100" />
        </Container>
    </div>
  )
}

export default BannerHome
