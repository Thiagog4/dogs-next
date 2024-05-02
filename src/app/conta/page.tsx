import { useUser } from "@/context/user-context";
import React from "react";

export default async function ContaPage() {
  const { user } = useUser();
  return (
    <main>
      <h1>Conta: {user?.nome}</h1>
    </main>
  );
}
