"use client"

import {
  PlayCircle,
  GraduationCap,
  Trophy,
  Clock3,
  CheckCircle2,
  BookOpen,
  BrainCircuit,
  TrendingUp,
  ShieldCheck
} from "lucide-react"

export default function AcademyPage() {

  const cursos = [
    {
      titulo: "Investimentos para Iniciantes",
      aulas: 24,
      progresso: 82,
      categoria: "Básico",
      icon: <BookOpen color="#f5c542" />
    },
    {
      titulo: "Renda Fixa Premium",
      aulas: 18,
      progresso: 64,
      categoria: "Renda Fixa",
      icon: <ShieldCheck color="#4ade80" />
    },
    {
      titulo: "Criptomoedas Estratégicas",
      aulas: 32,
      progresso: 28,
      categoria: "Crypto",
      icon: <TrendingUp color="#60a5fa" />
    },
    {
      titulo: "IA para Investidores",
      aulas: 12,
      progresso: 91,
      categoria: "IA",
      icon: <BrainCircuit color="#f87171" />
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
            width: 74,
            height: 74,
            borderRadius: 24,
            background: "rgba(245,197,66,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>

            <GraduationCap
              size={42}
              color="#f5c542"
            />

          </div>

          <div>

            <h1 style={{
              fontSize: 48,
              marginBottom: 8
            }}>
              Academy Premium
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 18
            }}>
              Evolua como investidor através da educação financeira.
            </p>

          </div>

        </div>

      </div>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#f5c54222,#4ade8022)",
        border: "1px solid rgba(245,197,66,0.15)",
        borderRadius: 32,
        padding: 34,
        marginBottom: 30
      }}>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 24,
          alignItems: "center"
        }}>

          <div>

            <p style={{
              opacity: 0.7,
              marginBottom: 10
            }}>
              Continue sua evolução
            </p>

            <h2 style={{
              fontSize: 52,
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
              Progresso Total
            </p>

            <h2 style={{
              fontSize: 46,
              color: "#4ade80"
            }}>
              78%
            </h2>

          </div>

        </div>

        {/* PROGRESS */}
        <div style={{
          marginTop: 30
        }}>

          <div style={{
            width: "100%",
            height: 18,
            borderRadius: 999,
            background: "#111",
            overflow: "hidden"
          }}>

            <div style={{
              width: "78%",
              height: "100%",
              background: "linear-gradient(90deg,#f5c542,#4ade80)"
            }} />

          </div>

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
          icon={<PlayCircle color="#f5c542" size={28} />}
          title="Aulas Assistidas"
          value="184"
        />

        <KpiCard
          icon={<Clock3 color="#60a5fa" size={28} />}
          title="Horas de Conteúdo"
          value="92h"
        />

        <KpiCard
          icon={<CheckCircle2 color="#4ade80" size={28} />}
          title="Cursos Concluídos"
          value="12"
        />

        <KpiCard
          icon={<Trophy color="#f87171" size={28} />}
          title="Certificados"
          value="8"
        />

      </div>

      {/* CURSOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: 24
      }}>

        {cursos.map((curso, index) => (

          <div
            key={index}
            style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: 30,
              padding: 28
            }}
          >

            {/* TOPO */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24
            }}>

              <div style={{
                width: 68,
                height: 68,
                borderRadius: 22,
                background: "rgba(245,197,66,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {curso.icon}
              </div>

              <div style={{
                background: "#0d0d0d",
                border: "1px solid #1f1f1f",
                borderRadius: 999,
                padding: "10px 14px",
                fontSize: 14,
                opacity: 0.8
              }}>
                {curso.categoria}
              </div>

            </div>

            {/* TEXTO */}
            <h2 style={{
              fontSize: 28,
              marginBottom: 16
            }}>
              {curso.titulo}
            </h2>

            <p style={{
              opacity: 0.6,
              marginBottom: 24
            }}>
              {curso.aulas} aulas disponíveis
            </p>

            {/* BARRA */}
            <div style={{
              marginBottom: 18
            }}>

              <div style={{
                width: "100%",
                height: 14,
                background: "#0d0d0d",
                borderRadius: 999,
                overflow: "hidden"
              }}>

                <div style={{
                  width: `${curso.progresso}%`,
                  height: "100%",
                  background: "linear-gradient(90deg,#f5c542,#4ade80)"
                }} />

              </div>

            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24
            }}>

              <span style={{
                opacity: 0.7
              }}>
                Progresso
              </span>

              <span style={{
                color: "#4ade80",
                fontWeight: "bold"
              }}>
                {curso.progresso}%
              </span>

            </div>

            {/* BOTÃO */}
            <button style={{
              width: "100%",
              background: "#f5c542",
              color: "#000",
              border: "none",
              borderRadius: 20,
              padding: 18,
              fontWeight: "bold",
              fontSize: 16,
              cursor: "pointer"
            }}>
              CONTINUAR CURSO
            </button>

          </div>

        ))}

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