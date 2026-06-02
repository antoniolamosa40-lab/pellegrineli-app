"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  async function handleLogin() {

    setLoading(true)

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (error) {

      alert(error.message)

      setLoading(false)

      return
    }

    window.location.href = "/dashboard"
  }

  async function handleRegister() {

    setLoading(true)

    const { error } =
      await supabase.auth.signUp({
        email,
        password
      })

    if (error) {

      alert(error.message)

      setLoading(false)

      return
    }

    alert(
      "Conta criada! Verifique seu e-mail."
    )

    setLoading(false)
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      color: "#fff",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "100%",
        maxWidth: 420,
        background: "#111",
        border: "1px solid #1f1f1f",
        borderRadius: 30,
        padding: 35
      }}>

        <h1 style={{
          fontSize: 42,
          marginBottom: 10,
          color: "#f5c542"
        }}>
          LOGIN
        </h1>

        <p style={{
          opacity: 0.6,
          marginBottom: 30
        }}>
          Entre na plataforma premium.
        </p>

        <input
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            borderRadius: 18,
            padding: 18,
            color: "#fff",
            marginBottom: 18,
            outline: "none"
          }}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            borderRadius: 18,
            padding: 18,
            color: "#fff",
            marginBottom: 18,
            outline: "none"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background: "#f5c542",
            color: "#000",
            border: "none",
            borderRadius: 18,
            padding: 18,
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >

          {loading
            ? "Entrando..."
            : "ENTRAR"}

        </button>

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: 18,
            padding: 18,
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: 14
          }}
        >
          CRIAR CONTA
        </button>

      </div>

    </div>
  )
}