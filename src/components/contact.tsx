import React from 'react';
import styled from 'styled-components';
import Container from './shared/container';
import drinksImg from '../images/drinks.svg';
import { Email as EmailIcon } from '@styled-icons/material';

const ContactCard = styled.div`
  background-color: #3e5675;
  color: white;
`;

const ContactContainer = styled(Container)`
  position: relative;
  display: flex;
  padding: 80px 0;
`;

const Text = styled.div`
  margin-left: 48px;
  p {
    font-size: 1.2em;
    color: lightgrey;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    margin-left: 0;
    margin-bottom: 150px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    margin-bottom: 100px;
  }
`;

const Email = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    justify-content: center;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 400px;
  right: 0;
  bottom: 0;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 350px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    width: 200px;
  }
`;

const Contact = () => {
  return (
    <ContactCard>
      <ContactContainer>
        <Text>
          <h1> Interested in Chatting? </h1>
          <p>
            Send me a message and let&#39;s talk over coffee, tea, or a beer
          </p>
          <Email style={{ alignItems: 'center' }}>
            <EmailIcon size={20} />
            <div style={{ marginLeft: '8px' }}> chanonroy@gmail.com </div>
          </Email>
        </Text>
        <div>
          <Img src={drinksImg} alt="drinks" />
        </div>
      </ContactContainer>
    </ContactCard>
  );
};

export default Contact;
