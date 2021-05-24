import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;

  padding: 24px 0 16px;

  &.created-successfully {
    font-size: 14px;
    line-height: 14px;

    padding: 32px 0 0;
  }
`;

export const SubTitle = styled.p`
  color: var(--color-third);
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  padding-bottom: 15px;
`;

export const FormContainer = styled.form`
  padding-bottom: 36px;

  .MuiOutlinedInput-root {
    border-radius: 5px;
    background: white;
  }

  .MuiOutlinedInput-input {
    padding: 13px 14px;
    width: 280px;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-bg);
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-second);
  }

  .MuiInputBase-input {
    color: var(--color-fifth);
  }

  .MuiInputLabel-formControl {
    top: -5px;
    color: var(--color-fifth);
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, 0px) scale(0.75);
  }

  .MuiFormLabel-root.Mui-error {
    color: var(--color-fifth);
  }

  .MuiFormHelperText-contained {
    margin: 8px 0 0;
  }
  .MuiFormHelperText-root.Mui-error {
    color: var(--color-second);
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }

  .input-email {
    margin: 0 8px;
  }
`;

export const Button = styled.button`
  color: white;
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;

  cursor: pointer;
  height: 45px;
  width: 140px;
  border-radius: 5px;
  background: var(--color-first);

  transition: 0.3s;

  &.reset-button {
    width: 328px;
    margin-bottom: 25px;
  }

  :hover {
    filter: brightness(0.9);
  }
`;
