import styled from "styled-components";

export const SColorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const colorSize = 16;
export const SColor = styled.div`
  box-sizing: border-box;
  width: ${colorSize}px;
  height: ${colorSize}px;
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: ${props => (props.selected ? "1px solid #4A4A4A" : 0)};
  
  &:last-child {
    margin-right: 0;
  }
`;
