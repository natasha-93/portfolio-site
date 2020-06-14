import React from "react";
import { motion } from "framer-motion";
import Email from "./Email";
import { ReactComponent as LinkedInIcon } from "./img/LinkedIn.svg";
import { ReactComponent as GithubIcon } from "./img/Github.svg";
import flower from "./img/FlowerIcon.png";

import styled from "styled-components";

export default function Header() {
  const spring = {
    type: "spring",
    damping: 100,
    stiffness: 30,
  };

  return (
    <motion.div transition={spring} style={{ y: -100 }} animate={{ y: 0 }}>
      <HeaderContainer>
        <Nav>
          <FlowerIcon src={flower} />
          <Social>
            <motion.a
              href="https://www.linkedin.com/in/natasha--lawson/"
              whileHover={{ scale: 1.1 }}
            >
              <LinkedInIcon style={{ padding: "0.1em" }} />
            </motion.a>
            <motion.a
              href="https://github.com/natasha-93"
              whileHover={{ scale: 1.1 }}
            >
              <GithubIcon style={{ padding: "0.1em" }} />
            </motion.a>
          </Social>
        </Nav>
        <Content>
          <Title>I make webapps.</Title>
          <div style={{ margin: "0.4rem 0" }}> Hi, I'm Natasha.</div>
          <div>
            I'm a Front-End Developer. I like React, TypeScript, and animations.
          </div>
          <div style={{ margin: "1rem 0" }}>
            I'm currently looking for a new role! Say hi at{" "}
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Email address="natashallawson@gmail.com" />
            </motion.span>
          </div>
        </Content>
      </HeaderContainer>
    </motion.div>
  );
}

const HeaderContainer = styled.div`
  background-color: white;
  border-radius: 0 0 2rem 2rem;
  width: 100%;
  margin: auto auto 2rem auto;
  padding: 1rem 1.3rem 2rem 1.3rem;

  @media (min-width: 1000px) {
    padding: 1rem 1.3rem 5rem 1.3rem;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const FlowerIcon = styled.img`
  width: 1em;
  height: 1em;
  padding: 0.1rem;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h3`
  color: black;
  font-family: "SpartanMB-bold";
  font-size: 1.3rem;

  @media (min-width: 550px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.2rem;
  }
`;

const Content = styled.div`
  max-width: 650px;
  margin: auto;
  color: rgba(0, 0, 0, 0.65);

  @media (min-width: 550px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.6rem;
  }
`;
