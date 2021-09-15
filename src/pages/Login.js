import React from "react";
import Axios from "axios";
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
} from "./../components/Styles";

import Logo from "./../assets/logo.jpg";

import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

import { FiMail, FiLock } from "react-icons/fi";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { loginUser } from "./../auth/actions/userActions";
import { useHistory } from "react-router-dom";
import { StyledContainer } from "../components/Styles";

const Login = () => {
  return (
    <StyledContainer>
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}></StyledTitle>
        <Formik
          initialValues={{
            email: "dima@gmail.com",
            password: "test123",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(1, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            loginUser(Axios, values, history, setFieldError, setSubmitting);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="email"
                type="text"
                label="Email"
                placeholder="Dtarankevich@mail.ru"
                icon={<FiMail />}
                onChange={handleChange}
                value={values.email}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
                onChange={handleChange}
                value={values.password}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit"> Login </StyledFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
    </StyledContainer>

  );
};

export default Login;

// connect(null, {loginUser})(Login)
