import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 50%;
  padding: 15px;
  border: 1px solid #b1baba;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
