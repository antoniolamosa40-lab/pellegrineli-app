export function isPro() {

  if (typeof window === "undefined") {
    return false
  }

  const plan = localStorage.getItem("plan")

  return plan === "PRO"
}

export function activatePro() {

  if (typeof window === "undefined") {
    return
  }

  localStorage.setItem("plan", "PRO")
}

export function deactivatePro() {

  if (typeof window === "undefined") {
    return
  }

  localStorage.setItem("plan", "FREE")
}