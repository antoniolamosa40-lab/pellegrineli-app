import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Pellegrineli Invest",
  description: "Terminal financeiro institucional"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body>

        <div style={{
          display:"flex",
          minHeight:"100vh"
        }}>

          {/* SIDEBAR */}
          <aside
            className="glass fade-up"
            style={{
              width:"250px",
              padding:"25px",
              position:"fixed",
              top:0,
              left:0,
              bottom:0,
              borderRight:"1px solid rgba(255,255,255,0.05)"
            }}
          >

            <h1
              className="title-gradient"
              style={{
                fontSize:"30px",
                marginBottom:"30px",
                fontWeight:"bold"
              }}
            >
              Pellegrineli AI
            </h1>

            <MenuItem
              titulo="📊 Dashboard"
              href="/dashboard"
            />

            <MenuItem
              titulo="🪙 Crypto"
              href="/crypto"
            />

            <MenuItem
              titulo="🏦 Renda Fixa"
              href="/renda-fixa"
            />

            <MenuItem
              titulo="🧠 IA"
              href="/ia"
            />

            <MenuItem
              titulo="👤 Perfil"
              href="/perfil"
            />

            <MenuItem
              titulo="⚙ Configurações"
              href="/configuracoes"
            />

          </aside>

          {/* CONTEÚDO */}
          <main style={{
            flex:1,
            marginLeft:"250px",
            padding:"30px"
          }}>
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}

function MenuItem({
  titulo,
  href
}:{
  titulo:string
  href:string
}){

  return(
    <Link
      href={href}
      className="sidebar-link"
      style={{
        display:"block",
        textDecoration:"none",
        color:"#fff",
        marginBottom:"12px",
        padding:"14px",
        borderRadius:"14px",
        border:"1px solid rgba(255,255,255,0.06)",
        background:"rgba(255,255,255,0.03)"
      }}
    >
      {titulo}
    </Link>
  )
}