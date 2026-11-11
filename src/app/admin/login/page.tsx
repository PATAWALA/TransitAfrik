"use client";

import { useActionState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <h1 className="font-display text-4xl font-extrabold uppercase mb-6">Espace admin</h1>
      <form action={action} className="space-y-4 border border-slate-800 bg-surface p-6">
        <input name="password" type="password" placeholder="Mot de passe" className="field" autoFocus required />
        {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
        <button disabled={pending} className="btn-red w-full">{pending ? "Connexion…" : "Se connecter"}</button>
      </form>
    </div>
  );
}
