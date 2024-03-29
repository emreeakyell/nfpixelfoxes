import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Coursel from "../Coursel";
import Button from "../Button";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  //background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  width: 80%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

const SubTextLight = styled.p`
  font-size: 25px;
  width: 80%;
  color: gray;
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
`;

const About = () => {
  return (
    <Section>
      <Box>
        <Coursel />
      </Box>
      <Box>
        <Title>Welcome To The Foxes Club.</Title>
        <SubText>
          The WEIRDOS CLUB is a private collection of NFTs—unique digital
          collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum
          blockchain and hosted on IPFS.
        </SubText>
        <SubTextLight>
          With more than 200+ hand drawn traits, each NFT is unique and comes
          with a membership to an exclusive group of successful investors. Join
          an ambitious ever-growing community with multiple benefits and
          utilities.
        </SubTextLight>
        <ButtonContainer>
          <ThemeProvider theme={dark}>
            <Button text="Join Our Discord" link="#" />
          </ThemeProvider>
        </ButtonContainer>
      </Box>
    </Section>
  );
};

export default About;
