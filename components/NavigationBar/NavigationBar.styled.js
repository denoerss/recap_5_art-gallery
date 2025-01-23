import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  display: flex;
  background-color: grey;

  align-items: center;
  padding: 5px;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 1rem;
`;
export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: darkgray;
    text-decoration: underline;
  }
`;
