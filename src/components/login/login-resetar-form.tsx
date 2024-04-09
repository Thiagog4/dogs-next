"use client";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./login-form.module.css";
import passwordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return <Button disabled>Resetando ..</Button>;
  } else {
    return <Button>Resetar senha</Button>;
  }
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
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
        <Input label="Nova senha" name="password" type="password" />
        <input type="hidden" value={keyToken} name="key" />
        <input type="hidden" value={login} name="login" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
