import { ref } from 'vue';
import { API_CONFIG } from '../config/api';

export function useTeams() {
  const teams = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Diccionario para convertir nombres de la API a tus IDs deseados
  const nameToIdMap: Record<string, string> = {
    'Nacional A1 Masculino': 'nacA1Masc',
    'Nacional A2 Femenino': 'nacA2Fem',
    'Nacional A2 Masculino': 'nacA2Masc',
    'Segunda Aragonesa': '2Arag',
    'Tercera Aragonesa': '3Arag'
  };

  const fetchTeams = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/Equipo`);
      if (!response.ok) throw new Error('Error al obtener equipos');
      
      const data = await response.json();
      
      // Transformamos los datos
      teams.value = data.map((team: any) => {
        // Buscamos si el nombre existe en nuestro mapa, si no, usamos el original
        const customId = nameToIdMap[team.nombre] || team.id || team.Id;
        
        return {
          ...team,
          id: customId
        };
      });
      
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const getTeamById = async (id: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/Equipo/${id}`);
      return await response.json();
    } catch (err) {
      return null;
    }
  };

  return { teams, loading, error, fetchTeams, getTeamById };
}