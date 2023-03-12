import styled from 'styled-components'
import {  Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  border: 1px solid black;
  padding: 10px;
  width: 350px;
`
export const Label = styled.label `
  display: block;
  margin-bottom: 5px;
`
export const Input = styled(Field) `
  display: block;
  margin-bottom: 20px;
  border: 1px solid black;
  cursor: pointer;

  &:hover, 
  &:focus {
    box-shadow: 0px 0px 5px #359ccb;
  }
`
export const Button = styled.button `
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0px 0px 2px black;
  cursor: pointer;
`
