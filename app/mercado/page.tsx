"use client"

import Link from "next/link"

import {
  ArrowUpRight,
  TrendingUp,
  CandlestickChart,
  LayoutDashboard,
  Wallet,
  BrainCircuit,
  Settings
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function Mercado() {

  const chartData = [
    { name: "09h", value: 121000 },
    { name: "10h", value: 122500 },
    { name: "11h", value: 123200 },
    { name: "12h", value: 124800 },
    { name: "13h", value: 124200 },
    { name: "14h", value: 126000 }
  ]

  const ativos = [
    {
      nome: "PETR4",
      preco: "R$ 41,29",
      variacao: "+3,12%"
    },
    {
      nome: "VALE3",
      preco: "R$ 68,10",
      variacao: "+1,44%"
    },
    {
      nome: "BTC",
      preco: "US$ 108.420",
      variacao: "+5,44%"
    },
    {
      nome: "NASDAQ",
      preco: "19.420 pts",
      variacao: "+2,11%"
    }
  ]

  const noticias = [
    "Ibovespa sobe impulsionado por commodities.",
    "Bitcoin mantém tendência de alta institucional.",
    "Mercado aguarda novos dados dos EUA.",
    "Setor bancário segue forte no Brasil.",
    "Fundos imobiliários atraem investidores."
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
          IBOV +1.42%
        </span>

        <span style={ticker()}>
          BTC +5.44%
        </span>

        <span style={ticker()}>
          NASDAQ +2.11%
        </span>

        <span style={ticker()}>
          PETR4 +3.12%
        </span>

      </div>

      <div style={{
        display: "flex",
        flexDirection: window.innerWidth < 900
          ? "column"
          : "row"
      }}>

        {/* SIDEBAR */}
        <div style={{
          width: window.innerWidth < 900
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
              href="/ia"
              icon={<BrainCircuit size={18} />}
              text="IA Financeira"
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
          padding: 20
        }}>

          {/* HEADER */}
          <div style={{
            marginBottom: 30
          }}>

            <h1 style={{
              fontSize: 38,
              marginBottom: 10
            }}>
              Mercado Financeiro
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 16
            }}>
              Monitoramento institucional em tempo real.
            </p>

          </div>

          {/* CARDS */}
          <div style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: 15,
            marginBottom: 25
          }}>

            {ativos.map((ativo) => (
              <div
                key={ativo.nome}
                style={card()}
              >

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>

                  <p style={{
                    opacity: 0.6
                  }}>
                    {ativo.nome}
                  </p>

                  <TrendingUp
                    size={18}
                    color="#4ade80"
                  />

                </div>

                <h2 style={{
                  marginTop: 15
                }}>
                  {ativo.preco}
                </h2>

                <p style={{
                  color: "#4ade80",
                  marginTop: 10,
                  fontWeight: "bold"
                }}>
                  {ativo.variacao}
                </p>

              </div>
            ))}

          </div>

          {/* GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 1000
                ? "1fr"
                : "2fr 1fr",
            gap: 20
          }}>

            {/* GRÁFICO */}
            <div style={section()}>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20
              }}>

                <h2 style={title()}>
                  Ibovespa
                </h2>

                <div style={{
                  color: "#4ade80",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 5
                }}>

                  <ArrowUpRight size={18} />

                  +1,42%

                </div>

              </div>

              <div style={{
                width: "100%",
                height: 350
              }}>

                <ResponsiveContainer>
                  <LineChart data={chartData}>
                    <XAxis
                      dataKey="name"
                      stroke="#666"
                    />

                    <YAxis stroke="#666" />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f5c542"
                      strokeWidth={4}
                      dot={false}
                    />

                  </LineChart>
                </ResponsiveContainer>

              </div>

            </div>

            {/* FEED */}
            <div style={section()}>

              <h2 style={title()}>
                Radar Institucional
              </h2>

              <div style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 15
              }}>

                {noticias.map((n) => (
                  <div
                    key={n}
                    style={{
                      background: "#111",
                      border: "1px solid #222",
                      borderRadius: 14,
                      padding: 15,
                      lineHeight: 1.5
                    }}
                  >
                    {n}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

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

function card() {
  return {
    background: "#0d0d0d",
    border: "1px solid #1f1f1f",
    borderRadius: 16,
    padding: 18
  }
}

function section() {
  return {
    background: "#0d0d0d",
    border: "1px solid #1f1f1f",
    borderRadius: 18,
    padding: 20
  }
}

function title(): React.CSSProperties {
  return {
    color: "#f5c542",
    fontSize: 24
  }
}