import SwiperCore, { Navigation, A11y } from "swiper";
import NumberFormat from "react-number-format";

import { SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
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
                <div className="product-stars">{product.stars} ESTRELAS</div>
                {product.listPrice ? (
                  <NumberFormat
                    className="product-listProduct"
                    displayType="text"
                    value={product.listPrice}
                    format="de R$ ###,##"
                  />
                ) : (
                  <div style={{ color: "transparent" }}>.</div>
                )}
                <NumberFormat
                  className="product-price"
                  displayType="text"
                  value={product.price}
                  format="por R$ ###,##"
                />
                <div className="product-installments">
                  {product.installments.length !== 0 ? (
                    <>
                      ou em {product.installments[0].quantity}x
                      <NumberFormat
                        displayType="text"
                        value={product.installments[0].value}
                        format=" de R$ ##,##"
                      />
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
