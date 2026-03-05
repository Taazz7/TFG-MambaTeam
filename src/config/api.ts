export const API_CONFIG = {
  BASE_URL: 'https://localhost:7278/api', 
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    headers: API_CONFIG.HEADERS
  });
  if (!response.ok) throw new Error(`Error en ${endpoint}: ${response.statusText}`);
  return response.json();
};