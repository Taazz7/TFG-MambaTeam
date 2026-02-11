import { apiFetch } from "../api/api";

export function getTeams() {
  return apiFetch("/api/teams", {
    method: "GET"
  });
}

export function getTeamById(id) {
  return apiFetch(`/api/teams/${id}`, {
    method: "GET"
  });
}

export function createTeam(data) {
  return apiFetch("/api/teams", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export function updateTeam(id, data) {
  return apiFetch(`/api/teams/${id}`, {
    method: "PUT",
    body: JSON.stringify(data)
  });
}

export function deleteTeam(id) {
  return apiFetch(`/api/teams/${id}`, {
    method: "DELETE"
  });
}
