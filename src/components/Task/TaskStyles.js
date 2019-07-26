import styled from "styled-components";

const taskHeight = 54;
export const inputHeight = 36;
const defaultTaskColor = "#dedede";

export const STask = styled.div`
  box-sizing: border-box;
  height: ${taskHeight}px;
  line-height: ${taskHeight}px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.color || defaultTaskColor};
  opacity: ${props => (props.checked ? 0.85 : 1)};
`;

export const STaskControl = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-right: 1px solid #fff;
`;

export const STaskContent = styled.div`
  width: calc(100% - 50px);
  padding: 0 15px 0 10px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
