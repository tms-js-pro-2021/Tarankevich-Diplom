import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
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
} from "../components/Styles";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import Loader from "react-loader-spinner";
import { TextInput } from "../components/FormLib";
import Logo from "./../assets/logo.jpg";
import { StyledContainer } from "../components/Styles";
import RouterProvider from "../router/RouterProvider";

const Login = () => {
  return (
    <StyledContainer>
      <div>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={30}></StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
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
              alert("Try to login user!");
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
                  placeholder="Enter email address"
                  icon={<FiMail />}
                  onChange={handleChange}
                  value={values.email}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter password"
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
            New here? <TextLink to={RouterProvider.getByAlias("signup")}>Signup</TextLink>
          </ExtraText>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default Login;
