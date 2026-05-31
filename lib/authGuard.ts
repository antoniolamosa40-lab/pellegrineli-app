// lib/authGuard.ts

export function isLoggedIn() {
  if (typeof window === "undefined") return false
  return !!localStorage.getItem("usuario_logado")
}

export function isProUser() {
  if (typeof window === "undefined") return false
  return localStorage.getItem("usuario_pro") === "true"
}

export function logout() {
  localStorage.removeItem("usuario_logado")
  localStorage.removeItem("usuario_pro")
}