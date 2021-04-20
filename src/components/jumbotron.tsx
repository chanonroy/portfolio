import {
  Github,
  Instagram,
  LinkedinSquare,
  Medium,
} from '@styled-icons/boxicons-logos'
import React from 'react'
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
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 150,
        marginBottom: 150,
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
        <div style={{ display: 'flex', marginBottom: 25 }}>
          <div style={{ fontSize: 18, color: '#6E7272' }}>
            I am a software developer living in London
          </div>
          <img src={ukFlagImg} style={{ width: 20, marginLeft: 8 }} />
        </div>
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
      <img style={{ maxWidth: 300 }} src={chanonImg} alt={'chanon'} />
    </div>
  )
}

export default Jumbotron
