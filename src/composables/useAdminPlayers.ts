import { ref } from 'vue';
import { API_CONFIG } from '../config/api';

export function useAdminPlayers() {
  const playersA = ref<any[]>([]);
  const playersNac = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Cargar jugadores Aragonesa
  const fetchPlayersA = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/JugadoresA`);
      playersA.value = await response.json();
    } catch (e) {
      error.value = 'Error cargando jugadores Aragonesa';
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  // Cargar jugadores Nacional
  const fetchPlayersNac = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/JugadoresNac`);
      playersNac.value = await response.json();
    } catch (e) {
      error.value = 'Error cargando jugadores Nacional';
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  // Actualizar jugador Aragonesa
  const updatePlayerA = async (player: any) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/JugadoresA/${player.jugadorAId}`,
        {
          method: 'PUT',
          headers: API_CONFIG.HEADERS,
          body: JSON.stringify(player)
        }
      );
      return response.ok;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  // Actualizar jugador Nacional
  const updatePlayerNac = async (player: any) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/JugadoresNac/${player.jugadorNacId}`,
        {
          method: 'PUT',
          headers: API_CONFIG.HEADERS,
          body: JSON.stringify(player)
        }
      );
      return response.ok;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return {
    playersA,
    playersNac,
    loading,
    error,
    fetchPlayersA,
    fetchPlayersNac,
    updatePlayerA,
    updatePlayerNac
  };
}
