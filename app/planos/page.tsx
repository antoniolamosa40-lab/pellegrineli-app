"use client"

export default function Planos() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      {/* HEADLINE FORTE */}
      <h1 style={{
        fontSize: "46px",
        color: "#f5c542",
        marginBottom: "10px"
      }}>
        Acesso completo à inteligência de mercado
      </h1>

      <p style={{
        opacity: 0.7,
        fontSize: "18px",
        marginBottom: "30px",
        maxWidth: "800px"
      }}>
        Enquanto usuários gratuitos recebem dados limitados, usuários PRO operam com análise avançada, alertas em tempo real e sinais de mercado.
      </p>

      {/* BLOCO DE URGÊNCIA */}
      <div style={{
        background: "#111",
        border: "1px solid red",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "25px"
      }}>
        <p style={{ color: "#ff4d4d", fontWeight: "bold" }}>
          ⚠ Usuários gratuitos podem estar perdendo oportunidades de mercado em tempo real
        </p>
      </div>

      {/* OFERTA PRINCIPAL */}
      <div style={{
        background: "#111",
        border: "1px solid #f5c542",
        borderRadius: "16px",
        padding: "30px",
        maxWidth: "600px"
      }}>

        <h2 style={{ fontSize: "28px" }}>
          💎 Plano PRO
        </h2>

        <p style={{ opacity: 0.7 }}>
          Tudo o que você precisa para acompanhar o mercado com inteligência
        </p>

        <ul style={{ lineHeight: "1.9", marginTop: "15px" }}>
          <li>✔ IA de análise de mercado em tempo real</li>
          <li>✔ Alertas de oportunidade automáticos</li>
          <li>✔ Carteira dinâmica simulada</li>
          <li>✔ Sinais de alta e baixa</li>
          <li>✔ Acesso a insights avançados</li>
        </ul>

        <h3 style={{
          marginTop: "20px",
          color: "#f5c542",
          fontSize: "26px"
        }}>
          R$ 29,90 / mês
        </h3>

        <p style={{ fontSize: "12px", opacity: 0.6 }}>
          Cancele quando quiser
        </p>

        {/* CTA */}
        <a
          href="https://SEU_LINK_KIWIIFY_AQUI"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 24px",
            background: "#f5c542",
            color: "black",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px"
          }}
        >
          Liberar acesso agora
        </a>
      </div>

      {/* PROVA PSICOLÓGICA */}
      <div style={{
        marginTop: "30px",
        opacity: 0.6,
        maxWidth: "700px",
        fontSize: "14px"
      }}>
        <p>
          Usuários PRO recebem atualizações mais rápidas e acesso a sinais que não aparecem na versão gratuita.
        </p>
      </div>

    </main>
  )
}