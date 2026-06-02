"use client"

import {
  Home,
  CandlestickChart,
  Wallet,
  BrainCircuit,
  User,
  Bell,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function MobileApp() {

  const ativos = [
    {
      nome: "Bitcoin",
      valor: "R$ 420.840",
      variacao: "+5.42%",
      up: true
    },
    {
      nome: "Ethereum",
      valor: "R$ 18.420",
      variacao: "+3.18%",
      up: true
    },
    {
      nome: "PETR4",
      valor: "R$ 41,82",
      variacao: "-1.24%",
      up: false
    }
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#fff",
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      padding: 20
    }}>

      {/* APP */}
      <div style={{
        width: "100%",
        maxWidth: 430,
        background: "#000",
        border: "1px solid #1f1f1f",
        borderRadius: 40,
        overflow: "hidden",
        position: "relative",
        minHeight: "95vh"
      }}>

        {/* TOPO */}
        <div style={{
          padding: 25,
          borderBottom: "1px solid #1f1f1f"
        }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 25
          }}>

            <div>

              <p style={{
                opacity: 0.6,
                marginBottom: 8
              }}>
                Patrimônio Total
              </p>

              <h1 style={{
                fontSize: 38
              }}>
                R$ 1.284.920
              </h1>

            </div>

            <div style={{
              width: 52,
              height: 52,
              borderRadius: 18,
              background: "rgba(245,197,66,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>

              <Bell color="#f5c542" />

            </div>

          </div>

          {/* PERFORMANCE */}
          <div style={{
            background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
            border: "1px solid rgba(245,197,66,0.18)",
            borderRadius: 24,
            padding: 22
          }}>

            <p style={{
              opacity: 0.7,
              marginBottom: 12
            }}>
              Performance Mensal
            </p>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>

              <h2 style={{
                fontSize: 34,
                color: "#4ade80"
              }}>
                +18,42%
              </h2>

              <TrendingUp
                size={38}
                color="#4ade80"
              />

            </div>

          </div>

        </div>

        {/* BOTÕES */}
        <div style={{
          padding: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14
        }}>

          <ActionButton
            title="Comprar"
            icon={<ArrowUpRight />}
          />

          <ActionButton
            title="Vender"
            icon={<ArrowDownRight />}
          />

          <ActionButton
            title="IA Premium"
            icon={<BrainCircuit />}
          />

          <ActionButton
            title="Carteira"
            icon={<Wallet />}
          />

        </div>

        {/* MERCADO */}
        <div style={{
          padding: 20
        }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
          }}>

            <h2 style={{
              fontSize: 28
            }}>
              Mercado
            </h2>

            <span style={{
              color: "#f5c542"
            }}>
              Ver tudo
            </span>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 15
          }}>

            {ativos.map((ativo) => (

              <div
                key={ativo.nome}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1f1f1f",
                  borderRadius: 22,
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
                    opacity: 0.65
                  }}>
                    {ativo.valor}
                  </p>

                </div>

                <div style={{
                  color:
                    ativo.up
                      ? "#4ade80"
                      : "#f87171",

                  fontWeight: "bold",
                  fontSize: 20
                }}>
                  {ativo.variacao}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* NAVIGATION */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#050505",
          borderTop: "1px solid #1f1f1f",
          padding: "14px 10px",
          display: "flex",
          justifyContent: "space-around"
        }}>

          <NavItem
            active
            icon={<Home />}
            text="Home"
          />

          <NavItem
            icon={<CandlestickChart />}
            text="Mercado"
          />

          <NavItem
            icon={<Wallet />}
            text="Carteira"
          />

          <NavItem
            icon={<BrainCircuit />}
            text="IA"
          />

          <NavItem
            icon={<User />}
            text="Perfil"
          />

        </div>

      </div>

    </div>
  )
}

function ActionButton({
  title,
  icon
}: {
  title: string
  icon: React.ReactNode
}) {
  return (
    <button style={{
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 22,
      padding: 22,
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>

      <div style={{
        width: 50,
        height: 50,
        borderRadius: 16,
        background: "rgba(245,197,66,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#f5c542"
      }}>
        {icon}
      </div>

      <span style={{
        fontSize: 18,
        fontWeight: "bold"
      }}>
        {title}
      </span>

    </button>
  )
}

function NavItem({
  icon,
  text,
  active = false
}: {
  icon: React.ReactNode
  text: string
  active?: boolean
}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      color: active
        ? "#f5c542"
        : "#777"
    }}>

      {icon}

      <span style={{
        fontSize: 12
      }}>
        {text}
      </span>

    </div>
  )
}