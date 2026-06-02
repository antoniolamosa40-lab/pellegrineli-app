"use client"

import {
  Crown,
  Check,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Brain
} from "lucide-react"

export default function PremiumPage() {

  const plans = [
    {
      name: "PRO",
      price: "R$ 97",
      desc: "Ideal para investidores iniciantes.",
      features: [
        "Dashboard Premium",
        "Watchlist Inteligente",
        "IA Financeira",
        "Feed de Mercado"
      ]
    },
    {
      name: "PREMIUM INVEST",
      price: "R$ 297",
      desc: "Experiência institucional completa.",
      features: [
        "Tudo do plano PRO",
        "Estratégias Avançadas",
        "Alertas Inteligentes",
        "Prioridade em novidades",
        "Acesso vitalício futuro"
      ],
      highlight: true
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

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginBottom: 70,
        marginTop: 30
      }}>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#111",
          border: "1px solid #1f1f1f",
          padding: "12px 20px",
          borderRadius: 999,
          marginBottom: 30
        }}>

          <Crown color="#f5c542" />

          <span>
            Pellegrineli Premium
          </span>

        </div>

        <h1 style={{
          fontSize: 64,
          marginBottom: 24,
          color: "#f5c542",
          fontWeight: "bold"
        }}>
          Plataforma Premium
        </h1>

        <p style={{
          maxWidth: 900,
          margin: "0 auto",
          opacity: 0.7,
          fontSize: 22,
          lineHeight: 1.7
        }}>
          Inteligência financeira, IA aplicada ao mercado,
          dashboard institucional e ferramentas premium
          para investidores modernos.
        </p>

      </div>

      {/* BENEFÍCIOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",
        gap: 24,
        marginBottom: 80
      }}>

        <BenefitCard
          icon={<Sparkles color="#f5c542" />}
          title="IA Financeira"
          desc="Pergunte sobre investimentos e receba insights automatizados."
        />

        <BenefitCard
          icon={<BarChart3 color="#4ade80" />}
          title="Dashboard Premium"
          desc="Visual institucional com métricas avançadas."
        />

        <BenefitCard
          icon={<ShieldCheck color="#60a5fa" />}
          title="Estrutura Segura"
          desc="Login seguro, autenticação e proteção escalável."
        />

        <BenefitCard
          icon={<Brain color="#f97316" />}
          title="Estratégias Inteligentes"
          desc="Análises modernas para investidores de alta performance."
        />

      </div>

      {/* PLANOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
        gap: 30,
        maxWidth: 1200,
        margin: "0 auto"
      }}>

        {plans.map((plan, index) => (

          <div
            key={index}
            style={{
              background:
                plan.highlight
                  ? "linear-gradient(135deg,#f5c54222,#111)"
                  : "#111",
              border:
                plan.highlight
                  ? "1px solid #f5c54255"
                  : "1px solid #1f1f1f",
              borderRadius: 30,
              padding: 40,
              position: "relative"
            }}
          >

            {plan.highlight && (

              <div style={{
                position: "absolute",
                top: -14,
                right: 24,
                background: "#f5c542",
                color: "#000",
                padding: "8px 18px",
                borderRadius: 999,
                fontWeight: "bold",
                fontSize: 14
              }}>
                MAIS POPULAR
              </div>

            )}

            <h2 style={{
              fontSize: 36,
              marginBottom: 12,
              color:
                plan.highlight
                  ? "#f5c542"
                  : "#fff"
            }}>
              {plan.name}
            </h2>

            <div style={{
              fontSize: 54,
              fontWeight: "bold",
              marginBottom: 20
            }}>
              {plan.price}
              <span style={{
                fontSize: 18,
                opacity: 0.6
              }}>
                /mês
              </span>
            </div>

            <p style={{
              opacity: 0.7,
              marginBottom: 30,
              lineHeight: 1.6
            }}>
              {plan.desc}
            </p>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 40
            }}>

              {plan.features.map((feature, i) => (

                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                  }}
                >

                  <Check
                    size={18}
                    color="#4ade80"
                  />

                  <span>
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <a
              href="https://pay.kiwify.com.br/RNajtfy"
              target="_blank"
              style={{
                display: "block",
                textAlign: "center",
                background:
                  plan.highlight
                    ? "#f5c542"
                    : "#222",
                color:
                  plan.highlight
                    ? "#000"
                    : "#fff",
                padding: "18px 24px",
                borderRadius: 18,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              ASSINAR AGORA
            </a>

          </div>

        ))}

      </div>

    </div>
  )
}

function BenefitCard({
  icon,
  title,
  desc
}: any) {

  return (
    <div style={{
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 28,
      padding: 30
    }}>

      <div style={{
        marginBottom: 20
      }}>
        {icon}
      </div>

      <h2 style={{
        fontSize: 28,
        marginBottom: 14
      }}>
        {title}
      </h2>

      <p style={{
        opacity: 0.7,
        lineHeight: 1.7
      }}>
        {desc}
      </p>

    </div>
  )
}