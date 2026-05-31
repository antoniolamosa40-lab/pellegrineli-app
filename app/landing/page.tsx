"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Landing() {

  const [online, setOnline] = useState(128)
  const [vagas, setVagas] = useState(42)

  useEffect(() => {

    const interval = setInterval(() => {

      setOnline(prev => prev + Math.floor(Math.random() * 5 - 2))

      setVagas(prev => {
        const drop = Math.random() > 0.6 ? 1 : 0
        return Math.max(10, prev - drop)
      })

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      fontFamily: "Arial"
    }}>

      {/* TOP BAR */}
      <div style={{
        position: "sticky",
        top: 0,
        background: "#0b0b0b",
        borderBottom: "1px solid #222",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "13px",
        color: "#f5c542",
        zIndex: 10
      }}>
        <span>🔥 {online} investidores online agora</span>
        <span>⚡ apenas {vagas} vagas disponíveis</span>
      </div>

      {/* HERO */}
      <div style={{
        padding: "100px 30px 40px",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto"
      }}>

        <div style={{
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: "999px",
          background: "rgba(245,197,66,0.08)",
          border: "1px solid rgba(245,197,66,0.25)",
          color: "#f5c542",
          fontSize: "12px",
          marginBottom: "20px"
        }}>
          ⚡ FUNIL DE INVESTIDORES PROFISSIONAIS
        </div>

        <h1 style={{
          fontSize: "54px",
          lineHeight: 1.1,
          marginBottom: "20px",
          color: "#f5c542",
          fontWeight: "bold"
        }}>
          O mercado não muda rápido.
          <br />
          <span style={{ color: "#fff" }}>Você que está atrasado.</span>
        </h1>

        <p style={{
          fontSize: "18px",
          opacity: 0.7,
          marginBottom: "30px",
          lineHeight: 1.6
        }}>
          A PELLEGRINELI AI identifica movimentações institucionais e transforma dados em decisões antes da maioria dos investidores reagirem.
        </p>

        <Link href="/login">
          <button style={{
            background: "linear-gradient(90deg,#f5c542,#ffdf70)",
            border: "none",
            padding: "16px 28px",
            borderRadius: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#000",
            fontSize: "16px"
          }}>
            QUERO COMEÇAR AGORA
          </button>
        </Link>

        <p style={{
          marginTop: "12px",
          fontSize: "12px",
          opacity: 0.5
        }}>
          🔒 acesso liberado por ordem de entrada
        </p>

      </div>

      {/* FUNIL VISUAL */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "20px",
        padding: "40px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        <Step number="1" title="Acesso gratuito" desc="Criação de conta na plataforma" />
        <Step number="2" title="Dashboard ativo" desc="Visualização do mercado em tempo real" />
        <Step number="3" title="Upgrade PRO" desc="Liberação da IA financeira completa" />

      </div>

      {/* DIFERENCIAÇÃO */}
      <div style={{
        textAlign: "center",
        padding: "60px 30px",
        background: "rgba(245,197,66,0.05)",
        borderTop: "1px solid rgba(245,197,66,0.15)",
        borderBottom: "1px solid rgba(245,197,66,0.15)"
      }}>

        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Você não precisa de mais informação.
        </h2>

        <p style={{ opacity: 0.7, marginBottom: "20px" }}>
          Você precisa de direção baseada em dados reais do mercado.
        </p>

        <Link href="/login">
          <button style={{
            background: "#f5c542",
            border: "none",
            padding: "14px 26px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#000"
          }}>
            ENTRAR NA PLATAFORMA
          </button>
        </Link>

      </div>

    </div>
  )
}

/* COMPONENTES */

function Step({ number, title, desc }: any) {
  return (
    <div style={{
      background: "#111",
      padding: "25px",
      borderRadius: "16px",
      border: "1px solid #222"
    }}>
      <div style={{
        color: "#f5c542",
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "10px"
      }}>
        {number}
      </div>

      <h3 style={{ marginBottom: "10px" }}>
        {title}
      </h3>

      <p style={{ opacity: 0.7 }}>
        {desc}
      </p>
    </div>
  )
}