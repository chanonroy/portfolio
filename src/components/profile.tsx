import React from 'react';
import styled from 'styled-components';
import chanonImg from '../images/roy.svg';
import timeGreeting from '../utils/time-greeting';
import Container from './shared/container';

const ProfileCard = styled.div`
  background-color: #e5e5e5;
`;

const ProfileContainer = styled(Container)`
  position: relative;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => `${theme.spacing.sm}px`};
  }
`;

const MutedText = styled.p`
  color: grey;
`;

const ChanonImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 15%;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    left: 5%;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    display: none;
  }
`;

const Profile = () => {
  const greetingText = timeGreeting();
  return (
    <ProfileCard>
      <ProfileContainer>
        <div>
          <ChanonImg src={chanonImg} alt="chanon" />
        </div>
        <div>
          <h1> {greetingText} </h1>
          <MutedText>
            Thank you for making my website an exciting stop on your current
            internet browsing journey. Get ready to learn a bit more about me
            and some of the exciting things that I have been working on.
          </MutedText>
        </div>
      </ProfileContainer>
    </ProfileCard>
  );
};

export default Profile;
