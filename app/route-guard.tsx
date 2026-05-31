"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("usuario_logado")

    if (!user) {
      router.replace("/login")
    }
  }, [router])

  return <>{children}</>
}