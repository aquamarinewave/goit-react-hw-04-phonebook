import styled from "styled-components";
    
export const LabelFilter = styled.label `
  display: block;
  padding-top: 20px;
  margin-bottom: 5px;
`
export const InputFilter = styled.input `
  display: block;
  margin-bottom: 20px;
  margin-top: 10px;
  border: 1px solid black;
  cursor: pointer;

  &:hover, 
  &:focus {
   box-shadow: 0px 0px 5px #359ccb;
  }
`
