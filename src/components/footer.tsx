import React from 'react';
import styled from 'styled-components';

const Footercard = styled.div`
  padding: 40px 0;
  background-color: #384047;
  color: #999;
  text-align: center;
`;

const Footer = () => {
  return (
    <Footercard>
      <p>
        Special thanks to&nbsp;
        <b>
          <a
            href="http://www.flaticon.com/authors/madebyoliver"
            title="Madebyoliver"
            target="_blank"
            rel="noopener noreferrer"
          >
            Madebyoliver
          </a>
        </b>
        ,&nbsp;
        <b>
          <a
            href="http://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </b>
        , and&nbsp;
        <b>
          <a
            href="http://www.flaticon.com/authors/dinosoftlabs"
            title="DinosoftLabs"
            rel="noopener noreferrer"
          >
            DinosoftLabs
          </a>
        </b>
        &nbsp;for the icon support.
      </p>
      <p>
        Made by <b>Chanon Roy</b>
      </p>
    </Footercard>
  );
};

export default Footer;
