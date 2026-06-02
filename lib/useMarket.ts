"use client"

import {
  useEffect,
  useState
} from "react"

export function useMarket() {

  const [market, setMarket] =
    useState<any>(null)

  async function fetchMarket() {

    try {

      const response =
        await fetch("/api/market")

      const data =
        await response.json()

      setMarket(data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchMarket()

    const interval =
      setInterval(fetchMarket, 15000)

    return () =>
      clearInterval(interval)

  }, [])

  return {
    market
  }
}