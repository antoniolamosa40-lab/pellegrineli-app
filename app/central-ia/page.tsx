"use client"

import Link from "next/link"

import {
  BrainCircuit,
  LayoutDashboard,
  Wallet,
  CandlestickChart,
  Settings,
  Sparkles,
  TrendingUp,
  Send,
  Bot
} from "lucide-react"

import { useState } from "react"

export default function CentralIA() {

  const [question, setQuestion] = useState("")

  const [messages, setMessages] = useState([
    {
      role: "ia",
      text: "Olá. Sou a Pellegrineli AI Ultra."
    }
  ])

  function sendMessage() {

    if (!question) return

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question
      },
      {
        role: "ia",
        text: "Análise gerada com sucesso. O cenário atual favorece ativos defensivos e tecnologia."
      }
    ])

    setQuestion("")
  }

  const sugestoes = [
    "Melhores investimentos para 2026",
    "Vale a pena comprar Bitcoin?",
    "Como investir com pouco dinheiro?",
    "O que fazer em crise econômica?",
    "Quais setores podem subir?"
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#fff",
      fontFamily: "Arial"
    }}>

      {/* TOPO */}
      <div style={{
        background: "#000",
        borderBottom: "1px solid #1f1f1f",
        padding: "12px 18px",
        overflowX: "auto",
        whiteSpace: "nowrap"
      }}>

        <span style={ticker()}>
          PELLEGRINELI AI ULTRA
        </span>

        <span style={ticker()}>
          INTELIGÊNCIA FINANCEIRA
        </span>

      </div>

      <div style={{
        display: "flex",
        flexDirection:
          window.innerWidth < 900
            ? "column"
            : "row"
      }}>

        {/* SIDEBAR */}
        <div style={{
          width:
            window.innerWidth < 900
              ? "100%"
              : 270,
          background: "#0d0d0d",
          borderRight: "1px solid #1f1f1f",
          padding: 20
        }}>

          <h2 style={{
            color: "#f5c542",
            marginBottom: 25
          }}>
            PELLEGRINELI TERMINAL
          </h2>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10
          }}>

            <MenuItem
              href="/dashboard"
              icon={<LayoutDashboard size={18} />}
              text="Dashboard"
            />

            <MenuItem
              active
              href="/central-ia"
              icon={<BrainCircuit size={18} />}
              text="Central IA"
            />

            <MenuItem
              href="/mercado"
              icon={<CandlestickChart size={18} />}
              text="Mercado"
            />

            <MenuItem
              href="/carteira"
              icon={<Wallet size={18} />}
              text="Carteira"
            />

            <MenuItem
              href="/configuracoes"
              icon={<Settings size={18} />}
              text="Configurações"
            />

          </div>

        </div>

        {/* CONTEÚDO */}
        <div style={{
          flex: 1,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          height: "100vh"
        }}>

          {/* HEADER */}
          <div style={{
            marginBottom: 30
          }}>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              marginBottom: 15
            }}>

              <div style={{
                width: 60,
                height: 60,
                borderRadius: 18,
                background: "rgba(245,197,66,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Bot color="#f5c542" size={32} />
              </div>

              <div>

                <h1 style={{
                  fontSize: 40
                }}>
                  Pellegrineli AI Ultra
                </h1>

                <p style={{
                  opacity: 0.6
                }}>
                  Inteligência financeira premium.
                </p>

              </div>

            </div>

          </div>

          {/* KPIs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
            marginBottom: 30
          }}>

            <KpiCard
              icon={<Sparkles size={26} color="#f5c542" />}
              title="Insights Gerados"
              value="12.480"
            />

            <KpiCard
              icon={<TrendingUp size={26} color="#4ade80" />}
              title="Precisão IA"
              value="94%"
            />

            <KpiCard
              icon={<BrainCircuit size={26} color="#60a5fa" />}
              title="Modelos IA"
              value="8"
            />

          </div>

          {/* SUGESTÕES */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20
          }}>

            {sugestoes.map((s) => (

              <button
                key={s}
                onClick={() => setQuestion(s)}
                style={{
                  background: "#111",
                  border: "1px solid #222",
                  color: "#fff",
                  borderRadius: 999,
                  padding: "10px 16px",
                  cursor: "pointer"
                }}
              >
                {s}
              </button>

            ))}

          </div>

          {/* CHAT */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 15,
            paddingRight: 5
          }}>

            {messages.map((msg, index) => (

              <div
                key={index}
                style={{
                  alignSelf:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start",

                  background:
                    msg.role === "user"
                      ? "#f5c542"
                      : "#111",

                  color:
                    msg.role === "user"
                      ? "#000"
                      : "#fff",

                  border:
                    msg.role === "user"
                      ? "none"
                      : "1px solid #222",

                  borderRadius: 18,
                  padding: 16,
                  maxWidth: "80%",
                  lineHeight: 1.6
                }}
              >
                {msg.text}
              </div>

            ))}

          </div>

          {/* INPUT */}
          <div style={{
            marginTop: 20,
            display: "flex",
            gap: 10
          }}>

            <textarea
              placeholder="Pergunte qualquer coisa sobre investimentos..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{
                flex: 1,
                height: 70,
                background: "#111",
                border: "1px solid #222",
                borderRadius: 16,
                color: "#fff",
                padding: 15,
                resize: "none"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                width: 70,
                background: "#f5c542",
                border: "none",
                borderRadius: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >

              <Send color="#000" />

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

function KpiCard({
  icon,
  title,
  value
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid #222",
      borderRadius: 20,
      padding: 22
    }}>

      <div style={{
        marginBottom: 20
      }}>
        {icon}
      </div>

      <p style={{
        opacity: 0.6,
        marginBottom: 10
      }}>
        {title}
      </p>

      <h2 style={{
        fontSize: 32
      }}>
        {value}
      </h2>

    </div>
  )
}

function MenuItem({
  icon,
  text,
  active = false,
  href = "#"
}: {
  icon: React.ReactNode
  text: string
  active?: boolean
  href?: string
}) {
  return (
    <Link
      href={href}
      style={{
        width: "100%",
        padding: 14,
        borderRadius: 12,
        border: active
          ? "1px solid rgba(245,197,66,0.3)"
          : "1px solid #222",
        background: active
          ? "rgba(245,197,66,0.08)"
          : "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 12,
        textDecoration: "none",
        boxSizing: "border-box"
      }}
    >
      {icon}
      {text}
    </Link>
  )
}

function ticker(): React.CSSProperties {
  return {
    marginRight: 30,
    color: "#4ade80",
    fontWeight: "bold"
  }
}