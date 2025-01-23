import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
  height: 30px;
  position: sticky;
  bottom: 0;
`;

export const StyledList = styled.ul`
  max-width: 480px;
  background-color: grey;
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
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
