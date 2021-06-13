import {
  Github,
  Instagram,
  LinkedinSquare,
  Medium,
} from '@styled-icons/boxicons-logos'
import React from 'react'
import styled from 'styled-components'
import { Breakpoints, Colors } from '../@types'
import ukFlagImg from "../images/uk-flag.svg"
import chanonImg from "../images/chanon.png"
import chanonWideImg from "../images/chanon-wide.png"

const socialLinks = [
  {
    name: 'github',
    href: 'https://github.com/chanonroy',
    icon: <Github size={30} />,
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com/in/chanonroy',
    icon: <LinkedinSquare size={30} />,
  },
  {
    name: 'medium',
    href: 'https://medium.com/@chanonroy',
    icon: <Medium size={30} />,
  },
  {
    name: 'insta',
    href: 'https://www.instagram.com/chanonroy/',
    icon: <Instagram size={30} />,
  },
]

const JumboContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 150px;
  @media (max-width: ${`${Breakpoints.Small}px`}) {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const TextContainer = styled.div`
  margin-right: 60px;
  @media (max-width: ${`${Breakpoints.Small}px`}) {
    margin-bottom: 60px;
    margin-right: 0px;
    text-align: center;
  }
`

const PersonContainer = styled.div`
  display: flex;
  @media (max-width: ${`${Breakpoints.Medium}px`}) {
    justify-content: center;
    margin-bottom: 60;
  }
`

const ImageNarrow = styled.img`
  align-self: center;
  width: 100%;
  @media (min-width: ${`${Breakpoints.Small}px`}) {
    display: none;
  }
`

const ImageWide = styled.img`
  max-width: 300px;
  @media (max-width: ${`${Breakpoints.Small}px`}) {
    display: none;
  }
`

const Jumbo = () => {
  return (
    <JumboContainer>
      <TextContainer>
        <div
          style={{
            fontWeight: 'bold',
            lineHeight: 1,
            fontSize: 48,
            marginBottom: 15,
            color: Colors.dark
          }}
        >
          Hi there
        </div>
        <div style={{ fontSize: 24, color: Colors.grey, marginBottom: 15 }}>
          My name is Chanon
        </div>

        <div
          style={{
            fontSize: 18,
            color: Colors.grey,
            marginBottom: 25,
          }}
        >
          <span>I’m a software developer living in London</span>
          <img
            src={ukFlagImg}
            alt="uk-flag"
            style={{ width: 20, marginLeft: 8, verticalAlign: 'middle' }}
          />
        </div>

        <div>
          {socialLinks.map((link, i) => {
            return (
              <a
                key={`${i}-${link.name}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 15, color: 'darkgrey' }}>
                  {link.icon}
                </span>
              </a>
            )
          })}
        </div>
      </TextContainer>
      <PersonContainer>
        <ImageWide
          src={chanonImg}
          alt={'chanon'}
        />
        <ImageNarrow
          src={chanonWideImg}
          alt={'chanon'}
        />
      </PersonContainer>
    </JumboContainer>
  )
}

export default Jumbo
