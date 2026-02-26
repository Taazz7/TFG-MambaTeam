import { ref } from 'vue';
import { API_CONFIG } from '../config/api';

export function useTeams() {
  const teams = ref<any[]>([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchTeams = async () => {
    loading.value = true;
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/Equipo`);
      if (!response.ok) throw new Error('Error al obtener equipos');
      teams.value = await response.json();
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

  const deleteTeam = async (id: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/Equipo/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        teams.value = teams.value.filter(t => (t.id || t.Id) !== id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { teams, loading, error, fetchTeams, getTeamById, deleteTeam };
}