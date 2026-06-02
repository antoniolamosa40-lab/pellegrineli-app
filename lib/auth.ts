"use client"

import {
  useEffect,
  useState
} from "react"

import { supabase } from "./supabase"

export function useAuth() {

  const [user, setUser] =
    useState<any>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    async function getUser() {

      const {
        data
      } = await supabase.auth.getUser()

      setUser(data.user)

      setLoading(false)
    }

    getUser()

  }, [])

  async function logout() {

    await supabase.auth.signOut()

    window.location.href = "/login"
  }

  // 🔥 CONTROLE PREMIUM
  const premium =
    true

  return {
    user,
    loading,
    logout,
    premium
  }
}