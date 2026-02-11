const API_URL = import.meta.env.VITE_API_URL as string;

if (!API_URL) {
  console.warn("⚠️ VITE_API_URL no está definida en el .env");
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Error ${response.status}: ${text || response.statusText}`);
  }

  // Si no hay body (204, etc.)
  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}

// Ejemplos de funciones concretas (ajusta rutas y tipos a tu API)
export const api = {
  // GET /api/users
  getUsers: () => request<any[]>("/api/users"),

  // GET /api/teams
  getTeams: () => request<any[]>("/api/teams"),
  // GET /api/players/:id
  getPlayerById: (id: number) => request(`/api/jugadoresA/${id}`)


};
