"use client"

import {
  Trophy,
  Flame,
  Crown,
  Star,
  Medal,
  TrendingUp,
  Target,
  Gem,
  ShieldCheck
} from "lucide-react"

export default function GamificacaoPage() {

  const conquistas = [
    {
      nome: "Primeiro Investimento",
      desc: "Realizou o primeiro aporte.",
      icon: <Star color="#f5c542" />,
      unlocked: true
    },
    {
      nome: "Investidor Premium",
      desc: "Atingiu patrimônio acima de R$100 mil.",
      icon: <Gem color="#60a5fa" />,
      unlocked: true
    },
    {
      nome: "Mestre da Renda Fixa",
      desc: "Concluiu metas da carteira defensiva.",
      icon: <ShieldCheck color="#4ade80" />,
      unlocked: false
    },
    {
      nome: "Trader Elite",
      desc: "30 dias seguidos acessando a plataforma.",
      icon: <Flame color="#f87171" />,
      unlocked: true
    }
  ]

  const ranking = [
    {
      nome: "Antonio Pellegrineli",
      pontos: "12.480 XP"
    },
    {
      nome: "Investidor Alpha",
      pontos: "11.920 XP"
    },
    {
      nome: "Mercado Premium",
      pontos: "10.440 XP"
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
            width: 72,
            height: 72,
            borderRadius: 24,
            background: "rgba(245,197,66,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>

            <Trophy
              size={40}
              color="#f5c542"
            />

          </div>

          <div>

            <h1 style={{
              fontSize: 46,
              marginBottom: 8
            }}>
              Gamificação Premium
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 18
            }}>
              Evolua como investidor e desbloqueie conquistas.
            </p>

          </div>

        </div>

      </div>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
        border: "1px solid rgba(245,197,66,0.15)",
        borderRadius: 32,
        padding: 32,
        marginBottom: 30
      }}>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
          alignItems: "center",
          justifyContent: "space-between"
        }}>

          <div>

            <p style={{
              opacity: 0.7,
              marginBottom: 10
            }}>
              Nível Atual
            </p>

            <h2 style={{
              fontSize: 54,
              color: "#f5c542"
            }}>
              INVESTIDOR ELITE
            </h2>

          </div>

          <div style={{
            textAlign: "right"
          }}>

            <p style={{
              opacity: 0.7,
              marginBottom: 10
            }}>
              XP Total
            </p>

            <h2 style={{
              fontSize: 48,
              color: "#4ade80"
            }}>
              12.480 XP
            </h2>

          </div>

        </div>

        {/* BARRA XP */}
        <div style={{
          marginTop: 30
        }}>

          <div style={{
            width: "100%",
            height: 18,
            background: "#111",
            borderRadius: 999,
            overflow: "hidden"
          }}>

            <div style={{
              width: "78%",
              height: "100%",
              background: "linear-gradient(90deg,#f5c542,#4ade80)"
            }} />

          </div>

          <p style={{
            opacity: 0.7,
            marginTop: 10
          }}>
            78% para o próximo nível.
          </p>

        </div>

      </div>

      {/* KPIs */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: 20,
        marginBottom: 30
      }}>

        <KpiCard
          icon={<Flame color="#f87171" size={28} />}
          title="Streak Diário"
          value="18 dias"
        />

        <KpiCard
          icon={<TrendingUp color="#4ade80" size={28} />}
          title="Performance"
          value="+28%"
        />

        <KpiCard
          icon={<Target color="#60a5fa" size={28} />}
          title="Metas"
          value="12/18"
        />

        <KpiCard
          icon={<Crown color="#f5c542" size={28} />}
          title="Ranking"
          value="#1"
        />

      </div>

      {/* CONQUISTAS */}
      <div style={{
        background: "#111",
        border: "1px solid #1f1f1f",
        borderRadius: 30,
        padding: 30,
        marginBottom: 30
      }}>

        <h2 style={{
          fontSize: 34,
          marginBottom: 25,
          color: "#f5c542"
        }}>
          Conquistas
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20
        }}>

          {conquistas.map((item, index) => (

            <div
              key={index}
              style={{
                background:
                  item.unlocked
                    ? "#0d0d0d"
                    : "#090909",

                border:
                  item.unlocked
                    ? "1px solid rgba(245,197,66,0.18)"
                    : "1px solid #1f1f1f",

                borderRadius: 24,
                padding: 24,
                opacity:
                  item.unlocked
                    ? 1
                    : 0.5
              }}
            >

              <div style={{
                marginBottom: 18
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontSize: 24,
                marginBottom: 12
              }}>
                {item.nome}
              </h3>

              <p style={{
                opacity: 0.7,
                lineHeight: 1.6
              }}>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* RANKING */}
      <div style={{
        background: "#111",
        border: "1px solid #1f1f1f",
        borderRadius: 30,
        padding: 30
      }}>

        <h2 style={{
          fontSize: 34,
          marginBottom: 25,
          color: "#f5c542"
        }}>
          Ranking Global
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 18
        }}>

          {ranking.map((user, index) => (

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

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 18
              }}>

                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  background: "rgba(245,197,66,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>

                  <Medal color="#f5c542" />

                </div>

                <div>

                  <h3 style={{
                    fontSize: 22,
                    marginBottom: 6
                  }}>
                    {user.nome}
                  </h3>

                  <p style={{
                    opacity: 0.6
                  }}>
                    Investidor Elite
                  </p>

                </div>

              </div>

              <div style={{
                color: "#4ade80",
                fontWeight: "bold",
                fontSize: 24
              }}>
                {user.pontos}
              </div>

            </div>

          ))}

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