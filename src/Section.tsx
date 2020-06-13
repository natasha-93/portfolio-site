import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type SectionProps = {
  label: string;
  children: JSX.Element[] | JSX.Element;
};

export default function Section({ label, children }: SectionProps) {
  const spring = {
    type: "spring",
    damping: 100,
    stiffness: 30,
  };

  return (
    <SectionContainer transition={spring} style={{ y: 300 }} animate={{ y: 0 }}>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </SectionContainer>
  );
}

const SectionContainer = styled(motion.div)`
  padding: 2rem 0;
`;

const Label = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.65);

  @media (min-width: 550px) {
    font-size: 1.3rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
