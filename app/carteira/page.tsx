"use client"

import Link from "next/link"

import {
  PieChart,
  Wallet,
  LayoutDashboard,
  CandlestickChart,
  BrainCircuit,
  Settings,
  TrendingUp,
  ArrowUpRight
} from "lucide-react"

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function Carteira() {

  const data = [
    { name: "Ações", value: 45 },
    { name: "FIIs", value: 20 },
    { name: "Crypto", value: 15 },
    { name: "Renda Fixa", value: 20 }
  ]

  const COLORS = [
    "#f5c542",
    "#4ade80",
    "#60a5fa",
    "#f87171"
  ]

  const ativos = [
    {
      nome: "PETR4",
      valor: "R$ 12.420",
      variacao: "+4,12%"
    },
    {
      nome: "BTC",
      valor: "R$ 18.900",
      variacao: "+8,41%"
    },
    {
      nome: "MXRF11",
      valor: "R$ 6.120",
      variacao: "+1,08%"
    },
    {
      nome: "TESOURO",
      valor: "R$ 9.820",
      variacao: "+0,74%"
    }
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
          PATRIMÔNIO +18.4%
        </span>

        <span style={ticker()}>
          BTC +5.44%
        </span>

        <span style={ticker()}>
          PETR4 +3.12%
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
              href="/mercado"
              icon={<CandlestickChart size={18} />}
              text="Mercado"
            />

            <MenuItem
              active
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
              Carteira Institucional
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 16
            }}>
              Gestão patrimonial avançada.
            </p>

          </div>

          {/* CARDS */}
          <div style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: 15,
            marginBottom: 25
          }}>

            <Card
              title="Patrimônio"
              value="R$ 47.260"
            />

            <Card
              title="Rentabilidade"
              value="+18,42%"
              green
            />

            <Card
              title="Perfil"
              value="Moderado"
            />

          </div>

          {/* GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 1000
                ? "1fr"
                : "1fr 1fr",
            gap: 20
          }}>

            {/* GRÁFICO */}
            <div style={section()}>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20
              }}>

                <PieChart
                  size={22}
                  color="#f5c542"
                />

                <h2 style={title()}>
                  Distribuição da Carteira
                </h2>

              </div>

              <div style={{
                width: "100%",
                height: 350
              }}>

                <ResponsiveContainer>
                  <RePieChart>

                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={120}
                    >

                      {data.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                      ))}

                    </Pie>

                    <Tooltip />

                  </RePieChart>
                </ResponsiveContainer>

              </div>

            </div>

            {/* PERFORMANCE */}
            <div style={section()}>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20
              }}>

                <TrendingUp
                  size={22}
                  color="#4ade80"
                />

                <h2 style={title()}>
                  Performance
                </h2>

              </div>

              <div style={{
                background: "#111",
                border: "1px solid #222",
                borderRadius: 18,
                padding: 25
              }}>

                <h2 style={{
                  fontSize: 52,
                  color: "#4ade80"
                }}>
                  +18,42%
                </h2>

                <p style={{
                  marginTop: 15,
                  opacity: 0.7,
                  lineHeight: 1.6
                }}>
                  Sua carteira está acima de 87% dos investidores da plataforma.
                </p>

              </div>

            </div>

          </div>

          {/* ATIVOS */}
          <div style={{
            marginTop: 25
          }}>

            <h2 style={{
              color: "#f5c542",
              marginBottom: 20,
              fontSize: 28
            }}>
              Principais Ativos
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 15
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

                    <ArrowUpRight
                      size={18}
                      color="#4ade80"
                    />

                  </div>

                  <h2 style={{
                    marginTop: 15
                  }}>
                    {ativo.valor}
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

function Card({
  title,
  value,
  green = false
}: {
  title: string
  value: string
  green?: boolean
}) {
  return (
    <div style={card()}>
      <p style={{
        opacity: 0.5,
        fontSize: 13
      }}>
        {title}
      </p>

      <h2 style={{
        color: green
          ? "#4ade80"
          : "#fff",
        marginTop: 10
      }}>
        {value}
      </h2>
    </div>
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