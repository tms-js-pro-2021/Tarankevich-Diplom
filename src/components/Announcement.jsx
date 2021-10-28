import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => (
  <Container>
    Супер акция! Бесплатная доставка при заказе от 50 долларов США
  </Container>
);

export default Announcement;
