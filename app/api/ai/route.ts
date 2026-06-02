import OpenAI from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json()

    const prompt =
      body.prompt

    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Você é um especialista financeiro premium da Pellegrineli Invest."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      })

    return NextResponse.json({
      response:
        response.choices[0].message.content
    })

  } catch (error) {

    return NextResponse.json(
      {
        error: "Erro na IA"
      },
      {
        status: 500
      }
    )
  }
}