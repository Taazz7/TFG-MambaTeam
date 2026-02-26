// src/composables/usePlayers.ts
import { ref } from 'vue';
import { apiFetch } from '../services/api';

export interface Player {
  id?: number;
  nombre: string;
  posicion?: string;
  imagen?: string;
}

export function usePlayers() {
  const players = ref<Player[]>([]);
  const loading = ref(false);
  // Solución al error de la imagen: definimos que puede ser string o null
  const error = ref<string | null>(null);

  const fetchPlayers = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Usamos apiFetch (que es lo que exportamos en api.ts)
      const data = await apiFetch<Player[]>('/Jugadores');
      players.value = data;
    } catch (err: any) {
      error.value = "No se pudieron cargar los jugadores";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return { players, loading, error, fetchPlayers };
}