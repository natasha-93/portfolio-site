import React from "react";
import styled from "styled-components";

type EmailProps = {
  address: string;
};

export default function Email({ address }: EmailProps) {
  return <StyledEmail href={`mailto:${address}`}>{address}</StyledEmail>;
}

const StyledEmail = styled.a`
  text-decoration: none;
  color: black;
  word-break: break-all;
  font-weight: 500;

  @media (min-width: 400px) {
    word-break: normal;
  }
`;
