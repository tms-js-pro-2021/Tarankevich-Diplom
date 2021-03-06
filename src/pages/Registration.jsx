import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import Loader from "react-loader-spinner";
import Logo from "../assets/logo.jpg";
import { TextInput } from "../components/FormLib";
import {
  StyledFormArea,
  StyledFormButton,
  StyledContainer,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
} from "../components/Styles";

const Registration = () => (
  <StyledContainer>
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30} />
        <Formik
          initialValues={{
            Email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Password must much"),
          })}
          // eslint-disable-next-line no-console
          onSubmit={() => console.log("Signup user!")}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Enter full name"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="Enter email address"
                icon={<FiMail />}
              />
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                icon={<FiCalendar />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="Enter your password"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit"> Signup </StyledFormButton>
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
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
  </StyledContainer>
);

export default Registration;
