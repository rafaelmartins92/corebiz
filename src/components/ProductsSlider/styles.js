import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
`;

export const Title = styled.p`
  color: var(--color-first);
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  margin-left: 40px;
  padding-top: 25px;
`;

export const Divider = styled.div`
  width: 65px;
  height: 4px;
  background: var(--color-border-bottom);
  margin-left: 40px;
  margin-top: 6px;
`;

export const CustomSwiper = styled(Swiper)`
  &.swiper-container {
    margin-top: 20px;
  }

  .swiper-wrapper {
    margin: 0 40px 70px;
    width: 216px;
  }

  .product-container {
    display: flex;
    flex-direction: column;
  }

  .swiper-slide-active {
    background: var(--color-card-selected);

    .product-button {
      display: block;
      color: white;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      align-self: center;

      cursor: pointer;
      padding: 8px 28px;
      border-radius: 5px;
      background: var(--color-first);

      margin: 8px 0px 14px;

      transition: 0.3s;

      :hover {
        filter: brightness(0.9);
      }
    }
  }

  .swiper-button-prev {
    background-image: url("./left-arrow.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    left: -6px;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next {
    background-image: url("./right-arrow.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    right: -4px;
  }

  .swiper-button-next::after {
    display: none;
  }

  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 72px solid var(--color-polygon);
    border-left: 81px solid transparent;
    position: absolute;
    right: 0;
  }

  .text-topright {
    position: absolute;
    right: 8px;
    top: 12px;

    font-weight: 900;
    font-size: 16px;
    line-height: 22px;
    color: white;
  }

  .produt-name {
    color: var(--color-fourth);
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    margin-top: 8px;
  }

  .product-stars {
    text-align: center;

    margin-top: 8px;
  }

  .product-listProduct {
    color: var(--color-fourth);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    text-decoration: line-through;

    margin-top: 8px;
  }

  .product-price {
    color: var(--color-first);
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;

    margin-top: 2px;
  }

  .product-installments {
    color: var(--color-fourth);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    text-align: center;

    margin-top: 4px;
  }

  .product-button {
    display: none;
  }
`;
