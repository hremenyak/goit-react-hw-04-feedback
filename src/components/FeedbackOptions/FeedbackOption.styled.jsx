import styled from 'styled-components';
export const FeedbackOption = styled.button`
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  text-align: center;

  &:not(:last-child) {
    margin-right: 7px;
  }
  &:hover {
    background-color: skyblue;
  }
`;
