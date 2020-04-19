import {
  Codepen,
  Github,
  Instagram,
  Linkedin,
  Medium,
} from '@styled-icons/boxicons-logos';
import React, { FC } from 'react';
import styled from 'styled-components';
import building from '../images/ottawa.svg';

const GradientBG = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.xs}px`};
  background: linear-gradient(to bottom, #1e5799 9%, #2989d8 69%, #65ade6 100%);
  height: 100vh;
  max-height: 1200px;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 5px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    font-size: 1.7em;
    text-align: center;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.3em;
  margin: 5px 0 48px 0;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    font-size: 1em;
    text-align: center;
  }
`;

const BuildingContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  img {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    img {
      width: 300px;
    }
  }

  @media (max-height: 600px) {
    img {
      display: none;
    }
  }
`;

const IconGrid = styled.div`
  display: flex;
`;

const Icon = styled.span`
  margin: 0 8px;
  opacity: 0.8;
  transition: ${({ theme }) => theme.transition.normal}}

  &:hover {
    opacity: 1;
  }
`;

const socialLinks = [
  {
    name: 'linkedin',
    href: 'https://linkedin.com/in/chanonroy',
    icon: <Linkedin size={44} />,
  },
  {
    name: 'github',
    href: 'https://github.com/chanonroy',
    icon: <Github size={44} />,
  },
  {
    name: 'insta',
    href: 'https://www.instagram.com/chanonroy/',
    icon: <Instagram size={44} />,
  },
  {
    name: 'codepen',
    href: 'https://codepen.io/chanonroy/',
    icon: <Codepen size={44} />,
  },
  {
    name: 'medium',
    href: 'https://medium.com/@chanonroy',
    icon: <Medium size={44} />,
  },
];

const Jumbo: FC = () => {
  return (
    <GradientBG>
      <Title> Hello, my name is Chanon </Title>
      <SubTitle> I&#39;m a software developer from Canada </SubTitle>
      <IconGrid>
        {socialLinks.map((link, i) => {
          return (
            <a
              key={`${i}-${link.name}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>{link.icon}</Icon>
            </a>
          );
        })}
      </IconGrid>
      <BuildingContainer>
        <img src={building} alt="building" />
      </BuildingContainer>
    </GradientBG>
  );
};

export default Jumbo;
