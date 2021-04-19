import React from 'react'
import chanonImg from '../images/chanon.png'
import Container from './shared/container'

const Jumbotron = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div>Copy</div>
        <img width={250} src={chanonImg} alt={'chanon'} />
      </div>
    </Container>
  )
}

export default Jumbotron
