import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "./Header";
import Section from "./Section";
import { projects, skills } from "./data";
import Email from "./Email";

function App() {
  return (
    <AppContainer>
      <PageContent>
        <Header />
        <Section label="Projects">
          {projects.map((project) => {
            return (
              <ProjectContainer key={project.label} whileHover={{ scale: 1.1 }}>
                <a href={project.url} style={{ textDecoration: "none" }}>
                  <Image alt="project" src={project.image} />
                  <Label>{project.label}</Label>
                  <Info>{project.info}</Info>
                </a>
              </ProjectContainer>
            );
          })}
        </Section>
        <Section label="Skills">
          <SkillContainer>
            {skills.map((skill) => {
              return (
                <StyledSkill key={skill.label}>
                  <Icon alt="skill" src={skill.image} />
                  <Label>{skill.label}</Label>
                </StyledSkill>
              );
            })}
          </SkillContainer>
        </Section>
      </PageContent>
      <Footer>
        ©2020 Invite me for a (virtual){" "}
        <span role="img" aria-label="coffee">
          ☕️
        </span>{" "}
        at <Email address="natashallawson@gmail.com" />
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  padding: 0 2rem;
`;

const PageContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const ProjectContainer = styled(motion.div)`
  display: block;
  border-radius: 2rem;
  background-color: white;
  padding-bottom: 1rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    max-width: 20rem;
  }

  @media (min-width: 1000px) {
    max-width: 27rem;
  }
`;

const Label = styled.div`
  text-align: center;
  padding-top: 1rem;
  color: rgba(0, 0, 0, 0.65);
`;

const Info = styled.div`
  padding: 1rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 0.9rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 2rem 2rem 0 0;
`;

const SkillContainer = styled.div`
  background-color: white;
  border-radius: 2rem;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 1.3rem 2rem 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledSkill = styled(motion.div)`
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  width: 8.4rem;
  height: 8.4rem;
  padding: 2rem 1rem;
  margin: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
    margin: 1rem 1.9rem;
  }

  @media (min-width: 988px) {
    margin: 3rem;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  text-align: center;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.8);
`;
