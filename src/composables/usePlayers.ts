// src/composables/usePlayers.ts
import { ref } from 'vue';
import { apiFetch } from '../services/api';

export interface Player {
  id?: number;
  nombre: string;
  apellidos: string;
  posicion: string;
  dorsal: number;
  fotoUrl?: string;
}

export function usePlayers() {
  const players = ref<Player[]>([]);
  const loading = ref(false);
  // SOLUCIÓN AL ERROR DE TU IMAGEN: Tipamos como string o null
  const error = ref<string | null>(null);

  const fetchPlayers = async (type: 'JugadoresA' | 'JugadoresNac') => {
    loading.value = true;
    error.value = null; 
    try {
      // Usamos el formato /api/JugadoresA o /api/JugadoresNac según tu Swagger
      const data = await apiFetch<Player[]>(`/api/${type}`);
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