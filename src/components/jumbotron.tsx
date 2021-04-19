import React from 'react'
import chanonImg from '../images/chanon.png'
import ukFlagImg from '../images/uk-flag.svg'
import Container from './shared/container'

const Jumbotron = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 100,
        }}
      >
        <div style={{ marginRight: 40, padding: 20 }}>
          <div
            style={{
              fontWeight: 'bold',
              lineHeight: 1,
              fontSize: 48,
              marginBottom: 15,
            }}
          >
            Hello
          </div>
          <div style={{ fontSize: 24, color: '#6E7272', marginBottom: 15 }}>
            My name is Chanon
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ fontSize: 18, color: '#6E7272' }}>
              I am a software developer living in London
            </div>
            <img src={ukFlagImg} style={{ width: 20, marginLeft: 8 }} />
          </div>
        </div>
        <img style={{ maxWidth: 300 }} src={chanonImg} alt={'chanon'} />
      </div>
    </Container>
  )
}

export default Jumbotron
