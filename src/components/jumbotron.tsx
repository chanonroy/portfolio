import {
  Github,
  Instagram,
  LinkedinSquare,
  Medium,
} from '@styled-icons/boxicons-logos'
import React from 'react'
import { Breakpoints } from '../@types/types'
import useWindowDimensions from '../hooks/use-window-dimensions'
import chanonImg from '../images/chanon.png'
import ukFlagImg from '../images/uk-flag.svg'

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

const Jumbotron = () => {
  const { width: screenWidth } = useWindowDimensions()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 150,
        marginBottom: 150,
        ...(!!screenWidth &&
          screenWidth < Breakpoints.Small && {
            flexDirection: 'column',
            marginTop: 40,
            marginBottom: 40,
          }),
      }}
    >
      <div
        style={{
          marginRight: 40,
          ...(!!screenWidth &&
            screenWidth < Breakpoints.Small && {
              marginBottom: 60,
              marginRight: 0,
              textAlign: 'center',
            }),
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            lineHeight: 1,
            fontSize: 48,
            marginBottom: 15,
          }}
        >
          Hi there
        </div>
        <div style={{ fontSize: 24, color: '#6E7272', marginBottom: 15 }}>
          My name is Chanon
        </div>

        <div
          style={{
            fontSize: 18,
            color: '#6E7272',
            marginBottom: 25,
          }}
        >
          <span>I’m a software developer living in London</span>
          <img
            src={ukFlagImg}
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
      </div>
      <div
        style={{
          display: 'flex',
          ...(!!screenWidth &&
            screenWidth < Breakpoints.Medium && {
              justifyContent: 'center',
              marginBottom: 60,
            }),
          ...(!!screenWidth &&
            screenWidth < Breakpoints.Small && {
              justifyContent: 'flex-end',
            }),
        }}
      >
        <img style={{ maxWidth: 300 }} src={chanonImg} alt={'chanon'} />
      </div>
    </div>
  )
}

export default Jumbotron
