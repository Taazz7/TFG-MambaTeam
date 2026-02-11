import { apiFetch } from "../api/api";

export function getUsers() {
  return apiFetch("/api/users", {
    method: "GET"
  });
}

export function getUserById(id) {
  return apiFetch(`/api/users/${id}`, {
    method: "GET"
  });
}

export function updateUser(id, data) {
  return apiFetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data)
  });
}

export function deleteUser(id) {
  return apiFetch(`/api/users/${id}`, {
    method: "DELETE"
  });
}
