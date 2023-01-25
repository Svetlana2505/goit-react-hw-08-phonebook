import styled from 'styled-components';

export const Input = styled.input`
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid grey;

  &:focus {
    border: 1px solid blue;
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;
