"use client"

import Link from "next/link"

import {
  LayoutDashboard,
  Wallet,
  CandlestickChart,
  BrainCircuit,
  Settings,
  TrendingUp,
  DollarSign,
  Target,
  PieChart,
  Landmark
} from "lucide-react"

export default function Investidor() {

  const ativos = [
    {
      nome: "Bitcoin",
      valor: "R$ 420.000",
      lucro: "+18%"
    },
    {
      nome: "Tesouro Direto",
      valor: "R$ 180.000",
      lucro: "+9%"
    },
    {
      nome: "Ações Americanas",
      valor: "R$ 320.000",
      lucro: "+22%"
    },
    {
      nome: "Fundos Imobiliários",
      valor: "R$ 95.000",
      lucro: "+11%"
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
          ÁREA DO INVESTIDOR
        </span>

        <span style={ticker()}>
          PERFORMANCE EM TEMPO REAL
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
              href="/investidor"
              icon={<PieChart size={18} />}
              text="Investidor"
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
              fontSize: 42,
              marginBottom: 10
            }}>
              Área do Investidor
            </h1>

            <p style={{
              opacity: 0.6
            }}>
              Gestão institucional do patrimônio financeiro.
            </p>

          </div>

          {/* KPIs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
            marginBottom: 30
          }}>

            <KpiCard
              icon={<DollarSign size={28} color="#4ade80" />}
              title="Patrimônio Total"
              value="R$ 1.284.920"
            />

            <KpiCard
              icon={<TrendingUp size={28} color="#4ade80" />}
              title="Lucro Acumulado"
              value="+R$ 284.920"
            />

            <KpiCard
              icon={<Target size={28} color="#f5c542" />}
              title="Meta Financeira"
              value="78%"
            />

            <KpiCard
              icon={<Landmark size={28} color="#60a5fa" />}
              title="Renda Passiva"
              value="R$ 12.840/mês"
            />

          </div>

          {/* CARTEIRA */}
          <div style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: 24,
            padding: 25,
            marginBottom: 30
          }}>

            <div style={{
              marginBottom: 25
            }}>

              <h2 style={{
                fontSize: 30,
                color: "#f5c542",
                marginBottom: 10
              }}>
                Carteira de Ativos
              </h2>

              <p style={{
                opacity: 0.6
              }}>
                Distribuição premium da carteira.
              </p>

            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 18
            }}>

              {ativos.map((ativo) => (

                <div
                  key={ativo.nome}
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid #222",
                    borderRadius: 18,
                    padding: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >

                  <div>

                    <h3 style={{
                      marginBottom: 8,
                      fontSize: 22
                    }}>
                      {ativo.nome}
                    </h3>

                    <p style={{
                      opacity: 0.6
                    }}>
                      {ativo.valor}
                    </p>

                  </div>

                  <div style={{
                    color: "#4ade80",
                    fontSize: 24,
                    fontWeight: "bold"
                  }}>
                    {ativo.lucro}
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* IA + ESTRATÉGIA */}
          <div style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 1000
                ? "1fr"
                : "1fr 1fr",
            gap: 20
          }}>

            <div style={box()}>

              <h2 style={title()}>
                Pellegrineli AI
              </h2>

              <p style={paragraph()}>
                Sua carteira apresenta crescimento consistente em ativos de tecnologia e renda fixa.
              </p>

            </div>

            <div style={box()}>

              <h2 style={title()}>
                Estratégia Recomendada
              </h2>

              <p style={paragraph()}>
                Diversificação internacional e proteção cambial seguem como prioridade institucional.
              </p>

            </div>

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

function box(): React.CSSProperties {
  return {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 20,
    padding: 25
  }
}

function title(): React.CSSProperties {
  return {
    color: "#f5c542",
    marginBottom: 15,
    fontSize: 28
  }
}

function paragraph(): React.CSSProperties {
  return {
    opacity: 0.75,
    lineHeight: 1.7
  }
}