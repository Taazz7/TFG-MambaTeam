import { ref } from 'vue'
import { API_CONFIG } from '../config/api'

interface JugadorAdmin {
  idJugador: number
  nombre: string
  estadisticas: any
}

export function useAdminPlayers() {
  const jugadoresNac = ref<JugadorAdmin[]>([])
  const jugadoresArag = ref<JugadorAdmin[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadAll = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const resNac = await fetch(`${API_CONFIG.BASE_URL}/JugadoresNac`)
      const dataNac = await resNac.json()

      jugadoresNac.value = dataNac.map((j: any) => ({
        ...j,
        estadisticas: j.estadisticas || {
          puntos: 0,
          valoracion: 0,
          rebotes: 0,
          asistencias: 0,
          porLibres: 0,
          por2Pts: 0,
          por3Pts: 0
        }
      }))

      const resArag = await fetch(`${API_CONFIG.BASE_URL}/JugadoresA`)
      const dataArag = await resArag.json()

      jugadoresArag.value = dataArag.map((j: any) => ({
        ...j,
        estadisticas: j.estadisticas || {
          puntos: 0,
          libres: 0,
          porLibres: 0,
          dosPts: 0,
          tresPts: 0
        }
      }))
    } catch (err) {
      error.value = 'Error cargando jugadores'
    } finally {
      loading.value = false
    }
  }

  const saveNac = async (jugador: JugadorAdmin): Promise<void> => {
    await fetch(`${API_CONFIG.BASE_URL}/EstadisticasNac/${jugador.idJugador}`, {
      method: 'PUT',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(jugador.estadisticas)
    })
  }

  const saveArag = async (jugador: JugadorAdmin): Promise<void> => {
    await fetch(`${API_CONFIG.BASE_URL}/EstadisticasArag/${jugador.idJugador}`, {
      method: 'PUT',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(jugador.estadisticas)
    })
  }

  return {
    jugadoresNac,
    jugadoresArag,
    loading,
    error,
    loadAll,
    saveNac,
    saveArag
  }
}
