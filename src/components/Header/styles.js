import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background: var(--color-bg-second);
  display: flex;
`;

export const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  border-bottom: 1px solid var(--color-fourth);
  width: 50%;
  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: var(--color-fourth);

  @media screen and (max-width: 960px) {
    order: 5;
    margin-right: 20px;
  }
`;

export const IconSearch = styled.img`
  margin-bottom: 5px;
`;

export const Menu = styled.div`
  display: flex;
`;

export const IconUser = styled.img`
  margin-right: 5px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const TextUser = styled.p`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const IconCart = styled.img`
  margin: 0 20px;
`;

export const Hamburguer = styled.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    margin: 0 20px;
  }
`;
