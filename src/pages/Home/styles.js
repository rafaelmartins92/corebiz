import styled from "styled-components";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/bannerMobile.png";

export const Container = styled.div``;

export const Banner = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

export const HeroBackground = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 430px;

  @media screen and (max-width: 960px) {
    background-image: url(${bannerMobile});
    height: 330px;
  }
`;

export const HeroP = styled.p`
  color: white;
  font-weight: 700;
  font-size: 30px;
  max-width: 479px;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    padding: 0px 22px;
  }
`;

export const HeroH1 = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 45px;
  line-height: 45px;
  max-width: 479px;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    padding: 0px 22px;
  }
`;

export const HeroSlider = styled.div`
  display: flex;
  justify-content: center;
  margin: 82px 0px 37px;

  @media screen and (max-width: 960px) {
    margin: 45px 0px 37px;
  }
`;

export const SliderButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background: var(--color-sixth);
  width: 10px;
  height: 10px;

  transition: 0.3s;

  :not(:last-child) {
    margin-right: 12px;
  }

  &.selected {
    background: var(--color-polygon);
  }

  :hover {
    filter: brightness(0.9);
  }
`;

export const Products = styled.div`
  background: var(--color-bg-second);
`;
