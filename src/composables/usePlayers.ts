import { ref } from 'vue';
import { API_CONFIG } from '../config/api';

export function usePlayers() {
  const playersA = ref<any[]>([]);
  const playersNac = ref<any[]>([]);
  const loading = ref(false);

  // Carga jugadores de la categoría A
  const fetchPlayersA = async () => {
    loading.value = true;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/JugadoresA`);
      playersA.value = await response.json();
    } finally {
      loading.value = false;
    }
  };

  // Carga jugadores Nacionales
  const fetchPlayersNac = async () => {
    loading.value = true;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/JugadoresNac`);
      playersNac.value = await response.json();
    } finally {
      loading.value = false;
    }
  };

  const addPlayerA = async (player: any) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/JugadoresA`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(player)
    });
    return response.ok;
  };

  return { 
    playersA, 
    playersNac, 
    loading, 
    fetchPlayersA, 
    fetchPlayersNac, 
    addPlayerA 
  };
}