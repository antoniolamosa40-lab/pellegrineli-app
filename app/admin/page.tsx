"use client"

import Link from "next/link"

import {
  LayoutDashboard,
  Users,
  DollarSign,
  TrendingUp,
  Settings,
  BrainCircuit,
  Shield,
  Activity,
  BarChart3,
  Wallet,
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

const growthData = [
  { month: "Jan", users: 120 },
  { month: "Fev", users: 260 },
  { month: "Mar", users: 480 },
  { month: "Abr", users: 720 },
  { month: "Mai", users: 1200 },
  { month: "Jun", users: 1840 },
]

export default function AdminPage() {

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
          ADMIN MASTER
        </span>

        <span style={ticker()}>
          CONTROLE TOTAL DA PLATAFORMA
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
              : 280,
          background: "#0d0d0d",
          borderRight: "1px solid #1f1f1f",
          padding: 20
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 30
          }}>

            <div style={{
              width: 55,
              height: 55,
              borderRadius: 18,
              background: "rgba(245,197,66,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Crown color="#f5c542" />
            </div>

            <div>
              <h2 style={{
                color: "#f5c542"
              }}>
                ADMIN MASTER
              </h2>

              <p style={{
                opacity: 0.6,
                fontSize: 13
              }}>
                Controle institucional
              </p>
            </div>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10
          }}>

            <MenuItem
              active
              href="/admin"
              icon={<Shield size={18} />}
              text="Painel Admin"
            />

            <MenuItem
              href="/dashboard"
              icon={<LayoutDashboard size={18} />}
              text="Dashboard"
            />

            <MenuItem
              href="/central-ia"
              icon={<BrainCircuit size={18} />}
              text="Central IA"
            />

            <MenuItem
              href="/investidor"
              icon={<Wallet size={18} />}
              text="Investidor"
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
              fontSize: 44,
              marginBottom: 10
            }}>
              Dashboard Admin
            </h1>

            <p style={{
              opacity: 0.6
            }}>
              Métricas institucionais da plataforma.
            </p>

          </div>

          {/* KPIS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
            marginBottom: 30
          }}>

            <KpiCard
              icon={<Users size={28} color="#60a5fa" />}
              title="Usuários"
              value="12.480"
            />

            <KpiCard
              icon={<DollarSign size={28} color="#4ade80" />}
              title="MRR"
              value="R$ 184.420"
            />

            <KpiCard
              icon={<TrendingUp size={28} color="#f5c542" />}
              title="Crescimento"
              value="+28%"
            />

            <KpiCard
              icon={<Activity size={28} color="#f87171" />}
              title="Retenção"
              value="87%"
            />

          </div>

          {/* GRÁFICO */}
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
                color: "#f5c542",
                fontSize: 30,
                marginBottom: 10
              }}>
                Crescimento da Plataforma
              </h2>

              <p style={{
                opacity: 0.6
              }}>
                Evolução institucional dos usuários.
              </p>

            </div>

            <div style={{
              width: "100%",
              height: 350
            }}>

              <ResponsiveContainer>

                <AreaChart data={growthData}>

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#f5c542"
                    fill="rgba(245,197,66,0.25)"
                    strokeWidth={4}
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* BLOCOS */}
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
                Receita da Plataforma
              </h2>

              <p style={paragraph()}>
                Assinaturas premium seguem aumentando com forte crescimento de usuários recorrentes.
              </p>

            </div>

            <div style={box()}>

              <h2 style={title()}>
                Expansão Estratégica
              </h2>

              <p style={paragraph()}>
                A plataforma apresenta crescimento acelerado em investidores iniciantes e premium.
              </p>

            </div>

          </div>

          {/* TABELA */}
          <div style={{
            marginTop: 30,
            background: "#111",
            border: "1px solid #222",
            borderRadius: 24,
            padding: 25
          }}>

            <h2 style={{
              color: "#f5c542",
              marginBottom: 20,
              fontSize: 28
            }}>
              Últimas Assinaturas
            </h2>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 14
            }}>

              {[
                "Plano PRO adquirido",
                "Novo assinante premium",
                "Upgrade para institucional",
                "Renovação anual realizada"
              ].map((item) => (

                <div
                  key={item}
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid #222",
                    borderRadius: 16,
                    padding: 18
                  }}
                >
                  {item}
                </div>

              ))}

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