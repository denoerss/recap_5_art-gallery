import styled from "styled-components";

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StyledListItem = styled.li`
  display: flex;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function ArtPieceDetailsCircles({ artPieceColors }) {
  return (
    <StyledDiv>
      {artPieceColors.map((artPieceColor) => (
        <StyledListItem key={artPieceColor}>
          <Circle color={artPieceColor} />
        </StyledListItem>
      ))}
    </StyledDiv>
  );
}
