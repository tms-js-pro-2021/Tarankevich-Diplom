import React from "react";
import {StyledTextInput, 
  StyledFormArea, 
  StyledFormButton, 
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup

} from './../components/Styles';

import Logo from './../assets/logo.jpg'

import {Formik, Form} from "formik";
import {TextInput} from "../components/FormLib";

const Login = () => {
  return(
    <div>
      <StyledFormArea>
        <Avatar image={Logo}/>
        <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>
        <Formik>
          {() => (
            <Form>
              <TextInput 
                name = "email"
                type = "text"
                label = "Email Address"
                placeholder = "Dtarankevich@mail.ru"
              />
              <TextInput 
                name = "password"
                type = "password"
                label = "Password"
                placeholder = "********"
                />
                <ButtonGroup>
                  <StyledFormButton type = "submit">
                    Login
                  </StyledFormButton>
                </ButtonGroup>


            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </div>
  )   
}

export default Login;