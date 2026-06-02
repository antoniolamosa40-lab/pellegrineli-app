"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    setTimeout(() => {
      if (email && password) {
        // simulação de login

        localStorage.setItem("usuario_logado", "true")

        // ⚠️ IMPORTANTE: agora vai para HOME (onboarding)
        router.push("/home")
      } else {
        setError("Preencha e-mail e senha corretamente")
      }

      setLoading(false)
    }, 800)
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial",
      color: "#fff",
      padding: 20
    }}>

      <div style={{
        width: "100%",
        maxWidth: 420,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 30
      }}>

        <h1 style={{
          color: "#f5c542",
          fontSize: 28,
          marginBottom: 10
        }}>
          Pellegrineli Invest
        </h1>

        <p style={{ opacity: 0.6, marginBottom: 25 }}>
          Acesse sua conta para continuar
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              marginBottom: 12,
              borderRadius: 10,
              border: "1px solid #333",
              background: "#111",
              color: "#fff",
              outline: "none"
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              marginBottom: 15,
              borderRadius: 10,
              border: "1px solid #333",
              background: "#111",
              color: "#fff",
              outline: "none"
            }}
          />

          {error && (
            <p style={{
              color: "red",
              fontSize: 13,
              marginBottom: 10
            }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 15,
              borderRadius: 12,
              background: "#f5c542",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </form>

        <p style={{
          marginTop: 20,
          fontSize: 12,
          opacity: 0.5,
          textAlign: "center"
        }}>
          Sistema de inteligência financeira
        </p>

      </div>
    </div>
  )
}