import styled from "styled-components";

export const STitle = styled.div``;

export const SActions = styled.span`
  color: rgba(74, 74, 74, 0.8);
  cursor: pointer;
`;

const headerHeight = 50;
export const SHeader = styled.div`
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
