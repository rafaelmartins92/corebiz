import styled from "styled-components";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/bannerMobile.png";

export const Container = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 430px;

  @media screen and (max-width: 960px) {
    background-image: url(${bannerMobile});
    height: 190px;
    filter: brightness(0.55);
  }
`;

export const Banner = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const HeroP = styled.p`
  color: white;
  font-weight: 700;
  font-size: 30px;
  max-width: 479px;
  margin-left: 40px;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 45px;
  line-height: 45px;
  max-width: 479px;
  margin-left: 40px;
`;

export const HeroSlider = styled.div`
  display: flex;
  justify-content: center;
  margin: 82px 0px 37px;
`;

export const SliderButton = styled.button`
  border-radius: 50%;
  background: var(--color-sixth);
  width: 10px;
  height: 10px;

  :not(:last-child) {
    margin-right: 12px;
  }

  &.selected {
    background: var(--color-polygon);
  }
`;

export const Products = styled.div`
  background: var(--color-bg-second);
`;
