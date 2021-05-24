import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CircularProgress, TextField } from "@material-ui/core";

import { PostNewsletter } from "../../services/newsletter";

import { Container, FormContainer, Title, SubTitle, Button } from "./styles";
import { schema } from "./validation";

function Newsletter() {
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const [enableNewRegister, setEnableNewRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function onSubmit(data) {
    try {
      setLoading(true);
      await PostNewsletter({
        email: data.email,
        name: data.name,
      });
    } catch {
    } finally {
      setLoading(false);
      setCreatedSuccessfully(true);
      setEnableNewRegister(true);
    }
  }

  function handleNew() {
    setCreatedSuccessfully(false);
    setEnableNewRegister(false);
  }

  return (
    <Container>
      {loading && <CircularProgress style={{ margin: "51px" }} />}
      {!loading && !createdSuccessfully && (
        <>
          <Title>Participe de nossas news com promoções e novidades!</Title>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-basic"
              label="Digite seu nome"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <TextField
              className="input-email"
              id="outlined-basic"
              label="Digite seu email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <Button type="submit">Eu quero!</Button>
          </FormContainer>
        </>
      )}
      {!loading && enableNewRegister && (
        <>
          <Title className="created-successfully">
            Seu e-mail foi cadastrado com sucesso!
          </Title>
          <SubTitle>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </SubTitle>
          <Button className="reset-button" type="reset" onClick={handleNew}>
            Cadastrar novo e-mail
          </Button>
        </>
      )}
    </Container>
  );
}

export default Newsletter;
