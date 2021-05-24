import React from "react";

import {
  Background,
  Container,
  Informations,
  Title,
  Infos,
  Divider,
  Buttons,
  Button,
  IconButton,
  IconText,
  Logos,
} from "./styles";

import iconMail from "../../assets/mail.svg";
import iconHeadset from "../../assets/headset.svg";
import LogosFooter from "../../assets/LogosFooter.svg";

function Footer() {
  return (
    <Background>
      <Container>
        <Informations>
          <Title>Localização</Title>
          <Divider />
          <Infos>Avenida Andrômeda, 2000. Bloco 6 e 8 </Infos>
          <Infos>Alphavile SP</Infos>
          <Infos>brasil@corebiz.ag</Infos>
          <Infos>+55 11 3090 1039</Infos>
        </Informations>
        <Buttons>
          <Button>
            <IconButton src={iconMail} alt="Mensagem" />
            <IconText>Entre em contato</IconText>
          </Button>
          <Button>
            <IconButton src={iconHeadset} alt="Consultor online" />
            <IconText>Fale com nosso consultor online</IconText>
          </Button>
        </Buttons>
        <Logos src={LogosFooter} alt="Consultor online" />
      </Container>
    </Background>
  );
}

export default Footer;
