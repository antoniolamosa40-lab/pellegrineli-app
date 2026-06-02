"use client"

import {
  User,
  Shield,
  Bell,
  Palette,
  LogOut,
  Key,
  Database,
  BrainCircuit,
  Settings
} from "lucide-react"

export default function ConfiguracoesPage() {

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
          gap: 18
        }}>

          <div style={{
            width: 70,
            height: 70,
            borderRadius: 24,
            background: "rgba(245,197,66,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>

            <Settings size={38} color="#f5c542" />

          </div>

          <div>

            <h1 style={{
              fontSize: 44,
              marginBottom: 8
            }}>
              Configurações
            </h1>

            <p style={{
              opacity: 0.6,
              fontSize: 18
            }}>
              Gerencie sua conta e preferências da plataforma.
            </p>

          </div>

        </div>

      </div>

      {/* SEÇÕES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: 24
      }}>

        {/* PERFIL */}
        <Section title="Perfil" icon={<User color="#f5c542" />}>
          <Item text="Nome do usuário" />
          <Item text="E-mail cadastrado" />
          <Item text="Alterar senha" />
        </Section>

        {/* SEGURANÇA */}
        <Section title="Segurança" icon={<Shield color="#4ade80" />}>
          <Item text="Autenticação em 2 fatores" />
          <Item text="Dispositivos conectados" />
          <Item text="Sessões ativas" />
        </Section>

        {/* NOTIFICAÇÕES */}
        <Section title="Notificações" icon={<Bell color="#60a5fa" />}>
          <Item text="Alertas de mercado" />
          <Item text="IA insights" />
          <Item text="E-mails automáticos" />
        </Section>

        {/* APARÊNCIA */}
        <Section title="Aparência" icon={<Palette color="#f87171" />}>
          <Item text="Tema escuro premium" />
          <Item text="Modo investidor PRO" />
          <Item text="Dashboard personalizado" />
        </Section>

        {/* DADOS */}
        <Section title="Dados" icon={<Database color="#f5c542" />}>
          <Item text="Exportar carteira" />
          <Item text="Histórico financeiro" />
          <Item text="Backup da conta" />
        </Section>

        {/* IA */}
        <Section title="Inteligência Artificial" icon={<BrainCircuit color="#4ade80" />}>
          <Item text="Modelo financeiro ativo" />
          <Item text="Histórico de prompts" />
          <Item text="Personalização da IA" />
        </Section>

      </div>

      {/* LOGOUT */}
      <div style={{
        marginTop: 40,
        display: "flex",
        justifyContent: "center"
      }}>

        <button style={{
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 20,
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "#f87171",
          fontWeight: "bold",
          cursor: "pointer"
        }}>

          <LogOut size={20} />

          Sair da conta

        </button>

      </div>

    </div>
  )
}

/* COMPONENTES */

function Section({
  title,
  icon,
  children
}: any) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 28,
      padding: 24
    }}>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 18
      }}>

        {icon}

        <h2 style={{
          fontSize: 22
        }}>
          {title}
        </h2>

      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
        {children}
      </div>

    </div>
  )
}

function Item({
  text
}: {
  text: string
}) {
  return (
    <div style={{
      background: "#0d0d0d",
      border: "1px solid #1f1f1f",
      borderRadius: 16,
      padding: 14,
      opacity: 0.9,
      fontSize: 14
    }}>
      {text}
    </div>
  )
}