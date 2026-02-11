import { apiFetch } from "../api/api";

export function login(email, password) {
  return apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export function register(userData) {
  return apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData)
  });
}

export function getProfile() {
  return apiFetch("/api/auth/profile", {
    method: "GET"
  });
}
