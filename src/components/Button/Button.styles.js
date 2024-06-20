import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  min-width: 90px;
  max-width: ${({ $width }) => $width && $width};
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 30px;
  background: linear-gradient(90deg, #0059C7 0%, #00A2C9 100%);
  outline: none;
  border: none;
  transition: 0.3s all ease-in-out;
  position: relative;
  /* z-index: 1; */
  @media (max-width: 575px) {
    padding: 12px 15px;
    font-size: 14px;
  }
  &::before {
    content: " ";
    background-color: var(--primary);
    color: var(--white);
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset,
      0px 6px 10px 0px rgba(245, 126, 42, 0.8),
      0px 4px 5px 0px rgba(255, 255, 255, 0.45) inset;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s linear;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover {
    /* color: var(--white); */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    &::before {
      opacity: 1;
      visibility: visible;
      top: -1px;
    }
    /* img {
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(20deg)
        brightness(103%) contrast(101%);
    } */
  }

  ${({ type }) =>
    type === "transparent" &&
    css`
    background: transparent;
    color: var(--primary-text-color);
      border: none;
      outline: none;
      justify-content: start;
     padding: 0;
      
    `}
  ${({ type }) =>
    type === "primary" &&
    css`
      position: relative;
      background: var(--primary);
      color: var(--white);
      overflow: hidden;
    `}
  ${({ type }) =>
    type === "white" &&
    css`
      background: var(--white);
      color: var(--dark);
    `}
  ${({ type }) =>
    type === "danger" &&
    css`
      background: var(--danger);
      color: var(--white);
    `}
    ${({ type }) =>
    type === "secondary" &&
    css`
      background: #cdcdcd;
      color: var(--white);
    `}
    /* ${({ type }) =>
    type === "transparent" &&
    css`
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    `} */
  ${({ $xl }) =>
    $xl &&
    css`
      font-size: 20px;
      line-height: 24px;
      padding: 12px 15px;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        padding: 12px 15px;
      }
    `}
        ${({ $lg }) =>
    $lg &&
    css`
      font-size: 18px;
      line-height: 23px;
    `}
        ${({ $sm }) =>
    $sm &&
    css`
      font-size: 14px;
      line-height: 18px;
      padding: 8px 13px;
    `}

    ${({ hasIcon }) =>
    hasIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    `}
`;
