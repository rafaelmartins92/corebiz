import React from "react";
import ProductsSlider from "../../components/ProductsSlider";

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
  return (
    <Container>
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
        <ProductsSlider />
      </Products>
    </Container>
  );
}

export default Home;
