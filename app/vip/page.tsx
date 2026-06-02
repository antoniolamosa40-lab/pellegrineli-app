"use client"

import {
  Crown,
  Wallet,
  TrendingUp,
  Gem,
  ShieldCheck,
  Target,
  ArrowUpRight,
  DollarSign
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const patrimonioData = [
  { mes: "Jan", valor: 120000 },
  { mes: "Fev", valor: 180000 },
  { mes: "Mar", valor: 260000 },
  { mes: "Abr", valor: 420000 },
  { mes: "Mai", valor: 610000 },
  { mes: "Jun", valor: 840000 },
]

export default function VipPage() {

  const ativos = [
    {
      nome: "Bitcoin",
      valor: "R$ 420.840",
      rent: "+18%"
    },
    {
      nome: "Tesouro Direto",
      valor: "R$ 182.400",
      rent: "+12%"
    },
    {
      nome: "Fundos Imobiliários",
      valor: "R$ 248.900",
      rent: "+9%"
    }
  ]

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
        marginBottom: 30
      }}>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginBottom: 20
        }}>

          <div style={{
            width: 78,
            height: 78,
            borderRadius: 26,
            background: "rgba(245,197,66,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>

            <Crown
              size={42}
              color="#f5c542"
            />

          </div>

          <div>

            <h1 style={{
              fontSize: 48,
              marginBottom: 8
            }}>
              Área VIP
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 18
            }}>
              Gestão patrimonial premium institucional.
            </p>

          </div>

        </div>

      </div>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
        border: "1px solid rgba(245,197,66,0.15)",
        borderRadius: 34,
        padding: 34,
        marginBottom: 30
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center"
        }}>

          <div>

            <p style={{
              opacity: 0.7,
              marginBottom: 10
            }}>
              Patrimônio Total
            </p>

            <h2 style={{
              fontSize: 56,
              color: "#f5c542"
            }}>
              R$ 1.284.920
            </h2>

          </div>

          <div style={{
            textAlign: "right"
          }}>

            <p style={{
              opacity: 0.7,
              marginBottom: 10
            }}>
              Evolução Patrimonial
            </p>

            <h2 style={{
              fontSize: 48,
              color: "#4ade80"
            }}>
              +28,42%
            </h2>

          </div>

        </div>

      </div>

      {/* KPIS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: 20,
        marginBottom: 30
      }}>

        <KpiCard
          icon={<Wallet color="#f5c542" size={28} />}
          title="Patrimônio"
          value="R$ 1.2M"
        />

        <KpiCard
          icon={<TrendingUp color="#4ade80" size={28} />}
          title="Rentabilidade"
          value="+28%"
        />

        <KpiCard
          icon={<ShieldCheck color="#60a5fa" size={28} />}
          title="Perfil"
          value="Moderado"
        />

        <KpiCard
          icon={<Gem color="#f87171" size={28} />}
          title="Plano"
          value="Ultra VIP"
        />

      </div>

      {/* GRÁFICO */}
      <div style={{
        background: "#111",
        border: "1px solid #1f1f1f",
        borderRadius: 30,
        padding: 30,
        marginBottom: 30
      }}>

        <div style={{
          marginBottom: 24
        }}>

          <h2 style={{
            fontSize: 34,
            color: "#f5c542",
            marginBottom: 10
          }}>
            Evolução do Patrimônio
          </h2>

          <p style={{
            opacity: 0.6
          }}>
            Crescimento financeiro ao longo dos meses.
          </p>

        </div>

        <div style={{
          width: "100%",
          height: 360
        }}>

          <ResponsiveContainer>

            <AreaChart data={patrimonioData}>

              <XAxis dataKey="mes" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="valor"
                stroke="#f5c542"
                fill="rgba(245,197,66,0.22)"
                strokeWidth={4}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* METAS + CARTEIRA */}
      <div style={{
        display: "grid",
        gridTemplateColumns:
          window.innerWidth < 1000
            ? "1fr"
            : "1fr 1fr",
        gap: 24
      }}>

        {/* METAS */}
        <div style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 30,
          padding: 28
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 24
          }}>

            <Target color="#f5c542" size={30} />

            <h2 style={{
              fontSize: 32
            }}>
              Metas Financeiras
            </h2>

          </div>

          <Goal
            title="Primeiro milhão"
            progress={82}
          />

          <Goal
            title="Renda passiva"
            progress={58}
          />

          <Goal
            title="Carteira internacional"
            progress={44}
          />

        </div>

        {/* CARTEIRA */}
        <div style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 30,
          padding: 28
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 24
          }}>

            <DollarSign color="#4ade80" size={30} />

            <h2 style={{
              fontSize: 32
            }}>
              Carteira Premium
            </h2>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 18
          }}>

            {ativos.map((ativo, index) => (

              <div
                key={index}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  borderRadius: 22,
                  padding: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >

                <div>

                  <h3 style={{
                    fontSize: 22,
                    marginBottom: 8
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
                  fontWeight: "bold",
                  fontSize: 22
                }}>
                  {ativo.rent}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CTA */}
      <div style={{
        marginTop: 30,
        background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
        border: "1px solid rgba(245,197,66,0.15)",
        borderRadius: 30,
        padding: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24
      }}>

        <div>

          <h2 style={{
            fontSize: 34,
            marginBottom: 12
          }}>
            Evolua sua estratégia financeira
          </h2>

          <p style={{
            opacity: 0.7,
            maxWidth: 600,
            lineHeight: 1.7
          }}>
            Utilize inteligência artificial, gestão patrimonial e análises premium para acelerar sua evolução financeira.
          </p>

        </div>

        <button style={{
          background: "#f5c542",
          color: "#000",
          border: "none",
          borderRadius: 20,
          padding: "18px 28px",
          fontWeight: "bold",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 10
        }}>

          ACESSAR CONSULTORIA

          <ArrowUpRight />

        </button>

      </div>

    </div>
  )
}

function Goal({
  title,
  progress
}: {
  title: string
  progress: number
}) {
  return (
    <div style={{
      marginBottom: 24
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10
      }}>

        <span>{title}</span>

        <span style={{
          color: "#4ade80",
          fontWeight: "bold"
        }}>
          {progress}%
        </span>

      </div>

      <div style={{
        width: "100%",
        height: 14,
        background: "#0d0d0d",
        borderRadius: 999,
        overflow: "hidden"
      }}>

        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg,#f5c542,#4ade80)"
        }} />

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
        fontSize: 34
      }}>
        {value}
      </h2>

    </div>
  )
}