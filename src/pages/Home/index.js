import React, { useEffect, useState } from "react";

import Newsletter from "../../components/Newsletter";
import ProductsSlider from "../../components/ProductsSlider";

import { GetProducts } from "../../services/products";

import {
  Container,
  Banner,
  HeroBackground,
  HeroP,
  HeroH1,
  HeroSlider,
  SliderButton,
  Products,
} from "./styles";

function Home() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const response = await GetProducts();
    setProductList(response);
  };
  return (
    <>
      <Container>
        <HeroBackground>
          <Banner>
            <HeroP>Olá, o que você está buscando?</HeroP>
            <HeroH1>Criar ou migrar seu e-commerce?</HeroH1>
            <HeroSlider>
              <SliderButton className="selected" />
              <SliderButton />
              <SliderButton />
              <SliderButton />
            </HeroSlider>
          </Banner>
        </HeroBackground>
        <Products>
          <ProductsSlider productList={productList} />
          <Newsletter />
        </Products>
      </Container>
    </>
  );
}

export default Home;
