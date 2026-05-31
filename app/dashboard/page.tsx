"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isLoggedIn, isProUser, logout } from "@/lib/authGuard"

const mensagens = [
  "Fluxo institucional detectado",
  "Movimento de grandes players",
  "Alta liquidez em ativos chave",
  "Tendência macro positiva",
  "Correlação entre mercados ativa",
  "Pressão compradora aumentando",
  "Volatilidade controlada",
  "Oportunidade identificada pela IA"
]

export default function Dashboard() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [carteira, setCarteira] = useState(12840)
  const [mercado, setMercado] = useState("NEUTRO")
  const [view, setView] = useState("dashboard")
  const [isPro, setIsPro] = useState(false)
  const [feed, setFeed] = useState(["Sistema inicializado"])

  const KIWIFY = "https://pay.kiwify.com.br/SEU-LINK-AQUI"

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login")
      return
    }

    setIsPro(isProUser())
    setLoading(false)
  }, [router])

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.random()

      setMercado(
        r > 0.6 ? "📈 Alta" :
        r < 0.3 ? "📉 Queda" :
        "➖ Lateral"
      )

      if (r > 0.6) setCarteira(v => v + Math.random() * 300)
      if (r < 0.3) setCarteira(v => v - Math.random() * 250)

      const msg = mensagens[Math.floor(Math.random() * mensagens.length)]
      setFeed(prev => [msg, ...prev.slice(0, 5)])
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  function sair() {
    logout()
    router.replace("/login")
  }

  function ativarPro() {
    window.location.href = KIWIFY
  }

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
        color: "#f5c542",
        flexDirection: "column"
      }}>
        <div style={{
          width: 45,
          height: 45,
          border: "3px solid rgba(245,197,66,0.2)",
          borderTop: "3px solid #f5c542",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />
        <p style={{ marginTop: 15 }}>Carregando sistema financeiro...</p>
      </div>
    )
  }

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#050505",
      color: "#fff",
      fontFamily: "Arial"
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: 260,
        background: "rgba(15,15,15,0.95)",
        padding: 25,
        borderRight: "1px solid rgba(255,255,255,0.05)"
      }}>

        <h2 style={{ color: "#f5c542" }}>
          Pellegrineli Invest
        </h2>

        <p style={{ opacity: 0.5, marginBottom: 20 }}>
          {isPro ? "Conta PRO ativa" : "Conta FREE - limitada"}
        </p>

        {["dashboard", "carteira", "mercado"].map(v => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={btn(view === v)}
          >
            {v.toUpperCase()}
          </button>
        ))}

        {/* 🔥 BLOCO DE CONVERSÃO PRO */}
        {!isPro && (
          <div style={{
            marginTop: 25,
            padding: 15,
            borderRadius: 12,
            background: "rgba(245,197,66,0.08)",
            border: "1px solid rgba(245,197,66,0.25)"
          }}>
            <p style={{ fontSize: 13, opacity: 0.8 }}>
              🚀 IA Financeira ilimitada + sinais avançados
            </p>

            <button
              onClick={ativarPro}
              style={{
                width: "100%",
                marginTop: 10,
                padding: 12,
                borderRadius: 10,
                background: "linear-gradient(90deg,#f5c542,#ffdf70)",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Desbloquear PRO
            </button>

            <p style={{ fontSize: 11, opacity: 0.6, marginTop: 8 }}>
              acesso completo ao painel institucional
            </p>
          </div>
        )}

        <button onClick={sair} style={{
          width: "100%",
          marginTop: 15,
          padding: 12,
          borderRadius: 10,
          background: "transparent",
          border: "1px solid #333",
          color: "#fff"
        }}>
          Sair
        </button>

      </div>

      {/* CONTEÚDO */}
      <div style={{
        flex: 1,
        padding: 35,
        animation: "fadeIn 0.4s ease"
      }}>

        <h1 style={{ fontSize: 34 }}>
          {view.toUpperCase()}
        </h1>

        <p style={{ opacity: 0.5, marginBottom: 25 }}>
          Sistema de inteligência financeira em tempo real
        </p>

        {/* CARDS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20
        }}>
          <Card title="Carteira" value={`R$ ${carteira.toFixed(2)}`} />
          <Card title="Mercado" value={mercado} />
        </div>

        {/* FEED */}
        <div style={{
          marginTop: 30,
          padding: 20,
          borderRadius: 16,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <h3 style={{ color: "#f5c542" }}>Inteligência de Mercado</h3>

          {(isPro ? feed : feed.slice(0, 2)).map((item, i) => (
            <div key={i} style={{
              marginTop: 10,
              padding: 12,
              background: "#111",
              borderRadius: 10
            }}>
              {item}
            </div>
          ))}

          {!isPro && (
            <div style={{
              marginTop: 15,
              padding: 12,
              border: "1px dashed #f5c542",
              borderRadius: 10,
              color: "#f5c542"
            }}>
              desbloqueie insights completos no PRO
            </div>
          )}
        </div>

      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  )
}

function Card({ title, value }: any) {
  return (
    <div style={{
      padding: 20,
      borderRadius: 16,
      background: "#111",
      border: "1px solid #222"
    }}>
      <p style={{ opacity: 0.5 }}>{title}</p>
      <h2>{value}</h2>
    </div>
  )
}

function btn(active: boolean) {
  return {
    width: "100%",
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    background: active ? "#1a1a1a" : "transparent",
    border: "1px solid #333",
    color: "#fff",
    textAlign: "left",
    cursor: "pointer"
  }
}