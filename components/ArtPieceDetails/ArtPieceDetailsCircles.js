import styled from "styled-components";

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StyledUnList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  list-style: none;
`;

export default function ArtPieceDetailsCircles({ artPieceColors }) {
  return (
    <StyledUnList>
      {artPieceColors.map((artPieceColor) => (
        <li key={artPieceColor}>
          <Circle color={artPieceColor} />
        </li>
      ))}
    </StyledUnList>
  );
}
