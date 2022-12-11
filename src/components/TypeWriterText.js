import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h1`
  font-size: ${(props) =>
    props.theme.fontxxl}; //responsiveyi sıkıntıya sokarsa bidaha bak
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
  }

  .text {
    color: orange;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Welcome,we are
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text">Non Fungible Pixel Foxes</span>`)
              .pauseFor(1000)
              .deleteAll()
              // .typeString(`<span class="text">Fungible</span>`)
              // .pauseFor(1000)
              // .deleteAll()
              // .typeString(`<span class="text">Pixel</span>`)
              // .pauseFor(1000)
              // .deleteAll()
              // .typeString(`<span class="text">Foxes</span>`)
              // .pauseFor(1000)
              // .deleteAll()
              .start(); //yazı dümdüz olacak şekilde ayarlanacak.//
          }}
        />
      </Title>
      <SubTitle>Be careful with foxes!!</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
