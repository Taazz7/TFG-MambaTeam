
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Autenticación
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  
  // Restaurantes
  RESTAURANTS: `${API_BASE_URL}/api/restaurants`,
  RESTAURANT_BY_ID: (id) => `${API_BASE_URL}/api/restaurants/${id}`,
  
  // Menús
  MENUS: `${API_BASE_URL}/api/menus`,
  MENU_BY_ID: (id) => `${API_BASE_URL}/api/menus/${id}`,
  
  // Pedidos
  ORDERS: `${API_BASE_URL}/api/orders`,
  ORDER_BY_ID: (id) => `${API_BASE_URL}/api/orders/${id}`,
};

export default API_BASE_URL;