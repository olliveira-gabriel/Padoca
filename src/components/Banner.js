import React from 'react'
import Container from 'react-bootstrap/Container';

function Banner(props) {
  return (
    <div>
        <Container fluid className="p-0">
          <img src={props.Banner} alt={props.TxtAlternativo} className="banner w-100" />
        </Container>
    </div>
  )
}

export default Banner
