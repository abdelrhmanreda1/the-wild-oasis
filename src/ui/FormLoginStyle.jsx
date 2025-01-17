import styled, { css } from "styled-components";

const FormLoginStyle = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: fit-content;
  }
`;
FormLoginStyle.defaultValue = {
  type: "regular",
};
export default FormLoginStyle;
