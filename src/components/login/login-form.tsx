"use client";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";

function FormButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return <Button disabled>Carregando...</Button>;
  } else {
    return <Button>Entrar</Button>;
  }
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });
  return (
    <>
      <form action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <FormButton />
        {state!.error && <p>{state!.error}</p>}
      </form>
    </>
  );
}
