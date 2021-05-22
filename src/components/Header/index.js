import React from "react";

import {
  Container,
  Content,
  Search,
  Menu,
  IconUser,
  TextUser,
  IconCart,
  Hamburguer,
  IconSearch,
} from "./styles";

import logo from "../../assets/logo-corebiz-preto-cinza.svg";
import iconSearch from "../../assets/magnifying-glass.svg";
import iconUser from "../../assets/user.svg";
import iconCart from "../../assets/Minicart.svg";
import hamburguer from "../../assets/Icon.svg";

function Header() {
  return (
    <Container>
      <Content>
        <Hamburguer src={hamburguer} alt="Menu" />
        <img src={logo} alt="Logo" />
        <Search>
          O que esta procurando?
          <IconSearch src={iconSearch} alt="Buscar" />
        </Search>
        <Menu>
          <IconUser src={iconUser} alt="Minha Conta" />
          <TextUser>Minha Conta</TextUser>
          <IconCart src={iconCart} alt="Meu Carrinho" />
        </Menu>
      </Content>
    </Container>
  );
}

export default Header;
