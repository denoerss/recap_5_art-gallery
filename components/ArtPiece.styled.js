import Image from "next/image";
import styled from "styled-components";

export const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: black;
  width: 100%;
  color: white;
`;
