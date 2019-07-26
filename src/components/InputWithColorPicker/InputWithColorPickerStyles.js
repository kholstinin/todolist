export const SWrapper = styled.div`
  box-sizing: border-box;
  height: ${props => props.height || "40px"};
  background-color: #fff;
  border: 1px solid #dcdcdc;
  padding: 0 7px 0 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";

export const SActionsWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SColorsWrapper = styled.div`
  margin-right: 10px;
`;

export const SInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0;

  :focus {
    outline: 0;
  }
`;