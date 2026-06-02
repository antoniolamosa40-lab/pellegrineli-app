"use client"

import {
  useState
} from "react"

import {
  TrendingUp,
  Bitcoin,
  DollarSign,
  Activity,
  Wallet,
  BarChart3,
  LogOut,
  Send,
  Sparkles,
  Crown
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

import { useAuth } from "@/lib/auth"

const chartData = [
  { mes: "Jan", valor: 12000 },
  { mes: "Fev", valor: 18000 },
  { mes: "Mar", valor: 26000 },
  { mes: "Abr", valor: 34000 },
  { mes: "Mai", valor: 52000 },
  { mes: "Jun", valor: 68000 }
]

const watchlist = [
  {
    ativo: "BTC",
    nome: "Bitcoin",
    valor: "R$ 612.420",
    variacao: "+4.28%"
  },
  {
    ativo: "PETR4",
    nome: "Petrobras",
    valor: "R$ 41,82",
    variacao: "+2.12%"
  },
  {
    ativo: "VALE3",
    nome: "Vale",
    valor: "R$ 63,10",
    variacao: "+1.82%"
  },
  {
    ativo: "ETH",
    nome: "Ethereum",
    valor: "R$ 18.240",
    variacao: "+6.12%"
  }
]

export default function DashboardPage() {

  const {
    user,
    logout,
    premium
  } = useAuth()

  const [prompt, setPrompt] =
    useState("")

  const [response, setResponse] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  async function askAI() {

    if (!prompt) return

    setLoading(true)

    try {

      const req =
        await fetch("/api/ai", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            prompt
          })
        })

      const data =
        await req.json()

      setResponse(
        data.response
      )

    } catch (error) {

      setResponse(
        "Erro ao consultar IA."
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#fff",
      fontFamily: "Arial",
      padding: 24
    }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        flexWrap: "wrap",
        gap: 20
      }}>

        <div>

          <h1 style={{
            fontSize: 42,
            color: "#f5c542",
            marginBottom: 8
          }}>
            Pellegrineli Terminal
          </h1>

          <p style={{
            opacity: 0.7
          }}>
            {user?.email}
          </p>

        </div>

        <button
          onClick={logout}
          style={{
            background: "#111",
            border: "1px solid #1f1f1f",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
        >

          <LogOut size={18} />

          Sair

        </button>

      </div>

      {/* TOP CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(240px,1fr))",
        gap: 20,
        marginBottom: 30
      }}>

        <Card
          icon={<Wallet color="#f5c542" />}
          title="Patrimônio"
          value="R$ 128.420"
          change="+18.42%"
        />

        <Card
          icon={<TrendingUp color="#4ade80" />}
          title="Rentabilidade"
          value="+28.14%"
          change="Últimos 30 dias"
        />

        <Card
          icon={<Bitcoin color="#f7931a" />}
          title="Bitcoin"
          value="R$ 612.420"
          change="+4.82%"
        />

        <Card
          icon={<Activity color="#60a5fa" />}
          title="Performance"
          value="92%"
          change="Assertividade"
        />

      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns:
          "2fr 1fr",
        gap: 24,
        marginBottom: 30
      }}>

        {/* CHART */}
        <div style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 30,
          padding: 30
        }}>

          <div style={{
            marginBottom: 24
          }}>

            <h2 style={{
              fontSize: 32,
              color: "#f5c542",
              marginBottom: 10
            }}>
              Evolução Patrimonial
            </h2>

          </div>

          <div style={{
            width: "100%",
            height: 360
          }}>

            <ResponsiveContainer>

              <AreaChart data={chartData}>

                <XAxis dataKey="mes" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="valor"
                  stroke="#f5c542"
                  fill="rgba(245,197,66,0.2)"
                  strokeWidth={4}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* WATCHLIST */}
        <div style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 30,
          padding: 30
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24
          }}>

            <BarChart3 color="#f5c542" />

            <h2 style={{
              fontSize: 28
            }}>
              Watchlist
            </h2>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>

            {watchlist.map((item, index) => (

              <div
                key={index}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  borderRadius: 18,
                  padding: 18
                }}
              >

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8
                }}>

                  <strong>
                    {item.ativo}
                  </strong>

                  <span style={{
                    color: "#4ade80"
                  }}>
                    {item.variacao}
                  </span>

                </div>

                <div style={{
                  opacity: 0.7,
                  fontSize: 14
                }}>
                  {item.nome}
                </div>

                <div style={{
                  marginTop: 8,
                  fontSize: 20
                }}>
                  {item.valor}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* IA PREMIUM */}
      <div style={{
        background: "#111",
        border: "1px solid #1f1f1f",
        borderRadius: 30,
        padding: 30
      }}>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 24
        }}>

          <Sparkles color="#f5c542" />

          <h2 style={{
            fontSize: 32
          }}>
            Pellegrineli AI
          </h2>

        </div>

        {premium ? (

          <>
            <div style={{
              display: "flex",
              gap: 14,
              marginBottom: 24,
              flexWrap: "wrap"
            }}>

              <input
                value={prompt}
                onChange={(e) =>
                  setPrompt(
                    e.target.value
                  )
                }
                placeholder="Pergunte sobre investimentos..."
                style={{
                  flex: 1,
                  minWidth: 260,
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  color: "#fff",
                  padding: 18,
                  borderRadius: 18,
                  outline: "none",
                  fontSize: 16
                }}
              />

              <button
                onClick={askAI}
                style={{
                  background: "#f5c542",
                  color: "#000",
                  border: "none",
                  padding: "18px 24px",
                  borderRadius: 18,
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                }}
              >

                <Send size={18} />

                Perguntar

              </button>

            </div>

            <div style={{
              background: "#0d0d0d",
              border: "1px solid #1f1f1f",
              borderRadius: 24,
              padding: 24,
              minHeight: 140,
              lineHeight: 1.7,
              color: "#d4d4d4"
            }}>

              {loading
                ? "Pensando..."
                : response || "A IA financeira responderá aqui."}

            </div>
          </>

        ) : (

          <div style={{
            background:
              "linear-gradient(135deg,#f5c54222,#0d0d0d)",
            border:
              "1px solid #f5c54244",
            borderRadius: 24,
            padding: 40,
            textAlign: "center"
          }}>

            <Crown
              size={64}
              color="#f5c542"
              style={{
                marginBottom: 24
              }}
            />

            <h2 style={{
              fontSize: 34,
              marginBottom: 18,
              color: "#f5c542"
            }}>
              Conteúdo Premium
            </h2>

            <p style={{
              opacity: 0.7,
              marginBottom: 30,
              fontSize: 18
            }}>
              Faça upgrade para acessar
              IA financeira ilimitada.
            </p>

            <button
              style={{
                background: "#f5c542",
                color: "#000",
                border: "none",
                padding: "18px 32px",
                borderRadius: 18,
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              VIRAR PREMIUM
            </button>

          </div>

        )}

      </div>

    </div>
  )
}

function Card({
  icon,
  title,
  value,
  change
}: any) {

  return (
    <div style={{
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 24,
      padding: 24
    }}>

      <div style={{
        marginBottom: 18
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
        fontSize: 30,
        marginBottom: 10
      }}>
        {value}
      </h2>

      <div style={{
        color: "#4ade80",
        fontWeight: "bold"
      }}>
        {change}
      </div>

    </div>
  )
}