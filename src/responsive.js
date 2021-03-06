import { css } from "styled-components";

const Mobile = ({ ...props }) =>
  css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;

export default Mobile;
