import React from "react";
import {Redirect} from "react-router-dom";

export const loginUser = (
  api,
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  setTimeout(() => {
    api
      .post(
        `https://tms-js-pro-back-end.herokuapp.com/api/users/signin`,
        credentials
      )
      .catch((error) => {
        console.log(error.response);
        if (error.response.status !== 200) {
          alert("Authentication error!");
        }
      })
      // .then(({ data: { token } = {} }) => {
      //   window.sessionStorage.token = token;
      //   setupApi(token);
      //   replace('/');
      // })
      .then((res) => {
        // save credentials here
        if (res.status === 200) {
        location.href = "/dashboard";
        }
      });
    setSubmitting(false);
  }, 2000);
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

export const logoutUser = () => {};
