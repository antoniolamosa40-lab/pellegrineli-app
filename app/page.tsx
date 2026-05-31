"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      overflow: "hidden",
      position: "relative",
      fontFamily: "Arial"
    }}>

      {/* NAVBAR */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        backdropFilter: "blur(20px)",
        background: "rgba(5,5,5,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h2 style={{
            color: "#f5c542",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "1px"
          }}>
            PELLEGRINELI AI
          </h2>

          <div style={{
            display: "flex",
            gap: "24px",
            alignItems: "center"
          }}>
            <a href="#" style={{ color: "white", opacity: 0.7, textDecoration: "none" }}>
              Mercado
            </a>

            <a href="#" style={{ color: "white", opacity: 0.7, textDecoration: "none" }}>
              Plataforma
            </a>

            <a href="#" style={{ color: "white", opacity: 0.7, textDecoration: "none" }}>
              IA
            </a>

            <Link href="/login">
              <button style={{
                background: "linear-gradient(90deg,#f5c542,#ffdf70)",
                border: "none",
                color: "#000",
                padding: "10px 16px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle,#f5c54220,transparent 70%)",
          top: "-200px",
          right: "-200px"
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle,#00ff9920,transparent 70%)",
          bottom: "-200px",
          left: "-200px"
        }}
      />

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 30px 60px"
      }}>

        <div style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center"
        }}>

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(245,197,66,0.08)",
              border: "1px solid rgba(245,197,66,0.25)",
              marginBottom: "20px",
              color: "#f5c542",
              fontSize: "12px",
              fontWeight: "bold"
            }}>
              IA FINANCEIRA INSTITUCIONAL
            </div>

            <h1 style={{
              fontSize: "64px",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontWeight: "bold",
              background: "linear-gradient(90deg,#fff,#f5c542)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              O futuro dos investimentos
            </h1>

            <p style={{
              fontSize: "18px",
              opacity: 0.7,
              marginBottom: "30px",
              lineHeight: 1.6
            }}>
              Plataforma de inteligência financeira com IA para análise de mercado,
              dados em tempo real e decisões estratégicas.
            </p>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <Link href="/login">
                <button style={{
                  background: "linear-gradient(90deg,#f5c542,#ffdf70)",
                  border: "none",
                  color: "#000",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}>
                  ACESSAR
                </button>
              </Link>

              <button style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                padding: "14px 20px",
                borderRadius: "14px",
                cursor: "pointer"
              }}>
                DEMONSTRAÇÃO
              </button>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
              padding: "25px",
              backdropFilter: "blur(20px)"
            }}
          >

            <p style={{ opacity: 0.6 }}>Patrimônio</p>
            <h2 style={{ fontSize: "40px", color: "#00ff99" }}>
              R$ 842.420
            </h2>

            <div style={{ marginTop: "20px", display: "grid", gap: "10px" }}>
              <Mini ativo="Bitcoin" valor="$108.420" />
              <Mini ativo="NASDAQ" valor="19.420" />
              <Mini ativo="PETR4" valor="R$ 42.10" />
            </div>

          </motion.div>

        </div>

      </section>

    </div>
  )
}

function Mini({ ativo, valor }: any) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "14px",
      padding: "12px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <span>{ativo}</span>
      <strong>{valor}</strong>
    </div>
  )
}