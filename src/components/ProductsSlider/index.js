// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from "swiper";
import NumberFormat from "react-number-format";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { Container, CustomSwiper, Title, Divider } from "./styles";

// install Swiper modules
SwiperCore.use([Navigation, A11y]);

const products = [
  {
    productId: 1,
    productName: "SAPATO FLOATER PRETO",
    stars: 1,
    imageUrl: "https://corebiz-test.herokuapp.com/images/product-1.png",
    listPrice: null,
    price: 25990,
    installments: [
      {
        quantity: 9,
        value: 2887,
      },
    ],
  },
  {
    productId: 2,
    productName: "SANDÁLIA LINHO BROWN",
    stars: 4,
    imageUrl: "https://corebiz-test.herokuapp.com/images/product-2.png",
    listPrice: 29900,
    price: 19900,
    installments: [
      {
        quantity: 4,
        value: 4975,
      },
    ],
  },
  {
    productId: 3,
    productName: "BOTA MUSTANG PRETO",
    stars: 2,
    imageUrl: "https://corebiz-test.herokuapp.com/images/product-3.png",
    listPrice: 32900,
    price: 29900,
    installments: [
      {
        quantity: 10,
        value: 2990,
      },
    ],
  },
  {
    productId: 4,
    productName: "CINTO SEMICROMO PRETO 40MM",
    stars: 3,
    imageUrl: "https://corebiz-test.herokuapp.com/images/product-4.png",
    listPrice: null,
    price: 7990,
    installments: [],
  },
  {
    productId: 5,
    productName: "CINTO SEMICROMO PRETO 40MM",
    stars: 3,
    imageUrl: "https://corebiz-test.herokuapp.com/images/product-4.png",
    listPrice: null,
    price: 7990,
    installments: [],
  },
];

function ProductsSlider() {
  return (
    <Container>
      <Title>Mais Vendidos</Title>
      <Divider />
      <CustomSwiper navigation slidesPerView={4} spaceBetween={99} width={216}>
        {products.map((product) => (
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
                    ou em {product.installments[0].quantity} x
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
