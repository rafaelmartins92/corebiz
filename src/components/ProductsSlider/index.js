import SwiperCore, { Navigation, A11y } from "swiper";
import ReactStars from "react-rating-stars-component";

import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { numberFormat } from "../../utils/numberFormat";
import { Container, CustomSwiper, Title, Divider } from "./styles";

SwiperCore.use([Navigation, A11y]);

function ProductsSlider({ productList }) {
  return (
    <Container>
      <Title>Mais Vendidos</Title>
      <Divider />
      <CustomSwiper navigation spaceBetween={99} width={216} loop={true}>
        {productList &&
          productList.map((product) => (
            <SwiperSlide key={product.productId}>
              <div className="product-container">
                {product.listPrice && (
                  <>
                    <span className="triangle-topright" />
                    <p className="text-topright">OFF</p>
                  </>
                )}
                <img src={product.imageUrl} alt="Produto" />
                <div className="produt-name">{product.productName}</div>
                <div className="product-stars">
                  <ReactStars
                    value={product.stars}
                    edit={false}
                    count={5}
                    size={10}
                    activeColor="#F8475F"
                  />
                </div>
                {product.listPrice ? (
                  <div className="product-listProduct">
                    de R$ {numberFormat(product.listPrice.toString())}
                  </div>
                ) : (
                  <div style={{ color: "transparent" }}>.</div>
                )}
                {product.price && (
                  <div className="product-price">
                    por R$ {numberFormat(product.price.toString())}
                  </div>
                )}
                <div className="product-installments">
                  {product.installments.length !== 0 ? (
                    <>
                      ou em {product.installments[0].quantity}x de R${" "}
                      {numberFormat(product.installments[0].value.toString())}
                    </>
                  ) : (
                    <div style={{ color: "transparent" }}>.</div>
                  )}
                </div>
                <button className="product-button">COMPRAR</button>
              </div>
            </SwiperSlide>
          ))}
      </CustomSwiper>
    </Container>
  );
}

export default ProductsSlider;
