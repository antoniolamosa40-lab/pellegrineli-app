"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false)

  function entrar() {

    if (!email || !senha) {
      alert("Preencha todos os campos")
      return
    }

    setLoading(true)

    setTimeout(() => {

      // 🔐 SIMULAÇÃO DE LOGIN
      localStorage.setItem("usuario_logado", email)

      // 🟡 padrão FREE inicial
      localStorage.setItem("usuario_pro", "false")

      setLoading(false)

      router.push("/dashboard")

    }, 800)

  }

  function entrarPro() {

    if (!email || !senha) {
      alert("Preencha todos os campos")
      return
    }

    setLoading(true)

    setTimeout(() => {

      // 🔐 LOGIN
      localStorage.setItem("usuario_logado", email)

      // 💎 MARCA COMO PRO
      localStorage.setItem("usuario_pro", "true")

      setLoading(false)

      router.push("/dashboard")

    }, 800)

  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0b0b0b",
      color: "white",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "360px",
        background: "#111",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #222"
      }}>

        <h1 style={{
          color: "#f5c542",
          marginBottom: "20px"
        }}>
          Login Plataforma
        </h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            background: "#0b0b0b",
            border: "1px solid #222",
            color: "white",
            borderRadius: "8px"
          }}
        />

        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            background: "#0b0b0b",
            border: "1px solid #222",
            color: "white",
            borderRadius: "8px"
          }}
        />

        <button
          onClick={entrar}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          Entrar FREE
        </button>

        <button
          onClick={entrarPro}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg,#f5c542,#ffdf70)",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Entrar PRO
        </button>

      </div>

    </div>
  )
}