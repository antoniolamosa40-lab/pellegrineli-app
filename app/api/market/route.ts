import { NextResponse } from "next/server"

export async function GET() {

  try {

    const response =
      await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl&include_24hr_change=true",
        {
          cache: "no-store"
        }
      )

    const data =
      await response.json()

    return NextResponse.json({
      bitcoin: data.bitcoin,
      ethereum: data.ethereum
    })

  } catch (error) {

    return NextResponse.json(
      {
        error: "Erro ao buscar mercado"
      },
      {
        status: 500
      }
    )
  }
}