import React, { useEffect, useState } from "react";
import ProductsSlider from "../../components/ProductsSlider";
import { GetProducts } from "../../services/products";

import {
  Container,
  Banner,
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
    <Container>
      {console.log("productList: ", productList)}
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
      <Products>
        <ProductsSlider productList={productList} />
      </Products>
    </Container>
  );
}

export default Home;
