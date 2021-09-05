import styled from "styled-components";
import background from "../assets/bg.jpg";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
  font-size: 60px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  text-transform: capitalize;
`;
