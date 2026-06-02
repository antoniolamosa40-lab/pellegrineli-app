"use client"

import {
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Bell,
  BrainCircuit,
  Flame,
  ArrowUpRight
} from "lucide-react"

export default function FeedFinanceiro() {

  const posts = [
    {
      autor: "Antonio Pellegrineli",
      cargo: "Especialista em Investimentos",
      texto:
        "Bitcoin continua apresentando forte fluxo institucional. O mercado segue atento ao movimento dos ETFs.",
      likes: 482,
      comments: 92,
      trend: "+12%"
    },
    {
      autor: "Pellegrineli AI",
      cargo: "Inteligência Artificial",
      texto:
        "Renda fixa e bancos seguem fortes no atual cenário de juros elevados.",
      likes: 284,
      comments: 41,
      trend: "+8%"
    },
    {
      autor: "Mercado Global",
      cargo: "Análise Macro",
      texto:
        "Investidores acompanham possíveis cortes de juros nos EUA para os próximos meses.",
      likes: 712,
      comments: 188,
      trend: "+18%"
    }
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#fff",
      fontFamily: "Arial"
    }}>

      {/* HEADER */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#000",
        borderBottom: "1px solid #1f1f1f",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <div>

          <h1 style={{
            fontSize: 34,
            color: "#f5c542"
          }}>
            Feed Financeiro
          </h1>

          <p style={{
            opacity: 0.6
          }}>
            Comunidade premium de investidores.
          </p>

        </div>

        <div style={{
          display: "flex",
          gap: 12
        }}>

          <TopButton icon={<Bell size={20} />} />

          <TopButton icon={<BrainCircuit size={20} />} />

        </div>

      </div>

      {/* HERO */}
      <div style={{
        padding: 24
      }}>

        <div style={{
          background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
          border: "1px solid rgba(245,197,66,0.15)",
          borderRadius: 30,
          padding: 30,
          marginBottom: 30
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginBottom: 18
          }}>

            <div style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              background: "rgba(245,197,66,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>

              <TrendingUp
                color="#f5c542"
                size={32}
              />

            </div>

            <div>

              <h2 style={{
                fontSize: 32
              }}>
                Mercado em Alta
              </h2>

              <p style={{
                opacity: 0.7
              }}>
                Fluxo institucional segue forte.
              </p>

            </div>

          </div>

          <div style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap"
          }}>

            <Tag text="Bitcoin +5.2%" />

            <Tag text="Nasdaq +2.1%" />

            <Tag text="IFIX +1.4%" />

            <Tag text="PETR4 +3.2%" />

          </div>

        </div>

        {/* POSTS */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 24
        }}>

          {posts.map((post, index) => (

            <div
              key={index}
              style={{
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: 30,
                padding: 28
              }}
            >

              {/* TOPO POST */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20
              }}>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15
                }}>

                  <div style={{
                    width: 60,
                    height: 60,
                    borderRadius: 20,
                    background: "rgba(245,197,66,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f5c542",
                    fontWeight: "bold",
                    fontSize: 22
                  }}>
                    PI
                  </div>

                  <div>

                    <h3 style={{
                      fontSize: 22,
                      marginBottom: 6
                    }}>
                      {post.autor}
                    </h3>

                    <p style={{
                      opacity: 0.6
                    }}>
                      {post.cargo}
                    </p>

                  </div>

                </div>

                <div style={{
                  background: "rgba(74,222,128,0.12)",
                  color: "#4ade80",
                  borderRadius: 999,
                  padding: "10px 14px",
                  fontWeight: "bold"
                }}>
                  {post.trend}
                </div>

              </div>

              {/* TEXTO */}
              <p style={{
                fontSize: 18,
                lineHeight: 1.8,
                opacity: 0.92,
                marginBottom: 24
              }}>
                {post.texto}
              </p>

              {/* CARD MARKET */}
              <div style={{
                background: "#0a0a0a",
                border: "1px solid #1f1f1f",
                borderRadius: 24,
                padding: 24,
                marginBottom: 24
              }}>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>

                  <div>

                    <p style={{
                      opacity: 0.6,
                      marginBottom: 10
                    }}>
                      Movimento do Mercado
                    </p>

                    <h2 style={{
                      fontSize: 30
                    }}>
                      Forte tendência de alta
                    </h2>

                  </div>

                  <ArrowUpRight
                    size={42}
                    color="#4ade80"
                  />

                </div>

              </div>

              {/* ACTIONS */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 14
              }}>

                <Action
                  icon={<Heart size={20} />}
                  text={`${post.likes} Likes`}
                />

                <Action
                  icon={<MessageCircle size={20} />}
                  text={`${post.comments} Comentários`}
                />

                <Action
                  icon={<Share2 size={20} />}
                  text="Compartilhar"
                />

                <Action
                  icon={<Flame size={20} />}
                  text="Trending"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

function TopButton({
  icon
}: {
  icon: React.ReactNode
}) {
  return (
    <button style={{
      width: 52,
      height: 52,
      borderRadius: 18,
      background: "#111",
      border: "1px solid #1f1f1f",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}>
      {icon}
    </button>
  )
}

function Tag({
  text
}: {
  text: string
}) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 999,
      padding: "10px 16px",
      color: "#4ade80",
      fontWeight: "bold"
    }}>
      {text}
    </div>
  )
}

function Action({
  icon,
  text
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <button style={{
      background: "#0a0a0a",
      border: "1px solid #1f1f1f",
      borderRadius: 16,
      padding: "12px 18px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    }}>

      {icon}

      {text}

    </button>
  )
}