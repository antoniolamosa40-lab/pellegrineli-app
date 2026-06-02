export function login(email: string) {
  localStorage.setItem("logged", "true")

  localStorage.setItem("userEmail", email)

  const proUsers = [
    "pro@pellegrineli.com",
    "admin@pellegrineli.com",
    "antonio@pro.com"
  ]

  const isPro = proUsers.includes(email.toLowerCase())

  localStorage.setItem("isPro", isPro ? "true" : "false")
}

export function logout() {
  localStorage.removeItem("logged")
  localStorage.removeItem("isPro")
  localStorage.removeItem("userEmail")
}

export function isLoggedIn() {
  return localStorage.getItem("logged") === "true"
}

export function isProUser() {
  return localStorage.getItem("isPro") === "true"
}

export function getUserEmail() {
  return localStorage.getItem("userEmail")
}