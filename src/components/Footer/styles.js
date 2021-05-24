import styled from "styled-components";

export const Background = styled.div`
  background: var(--color-first);
  border-bottom: 10px solid var(--color-border-bottom);
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Informations = styled.div`
  color: white;
  margin-left: 40px;
  padding: 25px 0 28px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

export const Infos = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 12px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Divider = styled.div`
  width: 65px;
  height: 5px;
  background: white;
  margin-top: 16px;
  margin-bottom: 21px;
`;

export const Buttons = styled.div`
  margin: 56px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background: white;
  color: var(--color-first);
  width: 195px;
  height: 38px;
  border-radius: 5px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: 0.3s;

  :first-child {
    margin-bottom: 25px;
  }

  :hover {
    filter: brightness(0.9);
  }
`;

export const IconButton = styled.img``;

export const IconText = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  width: 127px;
  text-align: initial;
`;
export const Logos = styled.img`
  margin-right: 40px;
`;
