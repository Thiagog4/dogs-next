"use client";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return <Button disabled>Enviando...</Button>;
  } else {
    return <Button>Enviar Email</Button>;
  }
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);
  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Email / Usuário" name="login" type="text" />
        <input type="hidden" value={url} name="url" />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "4c1" }}>Email enviado.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
