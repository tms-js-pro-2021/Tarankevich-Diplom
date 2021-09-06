import { useField } from "formik";
import React from "react";
import {
  StyledTextInput,
  StyledLabel,
} from './../components/Styles';

export const TextInput = ({...props}) => {
  const [field , meta] = useField(props);

  return(
    <div>
      <StyledLabel htmlFor={props.name}>
        {props.label}
      </StyledLabel>
      <StyledTextInput
      {...field}
      {...props}
      />
    </div>
  )
}