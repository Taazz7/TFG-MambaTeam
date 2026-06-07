import { ref } from 'vue'
import { API_CONFIG } from '../config/api'

interface JugadorAdmin {
  idJugador: number
  nombre: string
  estadisticas: any
  puntos?: number
  valoracion?: number
  rebotes?: number
  asistencias?: number
  libres?: number
  porLibres?: number
  por2Pts?: number
  por3Pts?: number
  dosPts?: number
  tresPts?: number
  _saved?: boolean
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
      // NACIONAL
      const resNac = await fetch(`${API_CONFIG.BASE_URL}/JugadoresNac`)
      const dataNac = await resNac.json()

      jugadoresNac.value = dataNac.map((j: any) => ({
        ...j,
        idJugador: j.jugadorNacId,
        estadisticas: {
          puntos: j.puntos,
          valoracion: j.valoracion,
          rebotes: j.rebotes,
          asistencias: j.asistencias,
          libres: j.libres,
          por2Pts: j.por2Pts,
          por3Pts: j.por3Pts
        },
        _saved: false
      }))

      // ARAGONESA
      const resArag = await fetch(`${API_CONFIG.BASE_URL}/JugadoresA`)
      const dataArag = await resArag.json()

      jugadoresArag.value = dataArag.map((j: any) => ({
        ...j,
        idJugador: j.jugadorAId,
        estadisticas: {
          puntos: j.puntos,
          libres: j.libres,
          porLibres: j.porLibres,
          dosPts: j.dosPts,
          tresPts: j.tresPts
        },
        _saved: false
      }))
    } catch (err) {
      error.value = 'Error cargando jugadores'
    } finally {
      loading.value = false
    }
  }

  const saveNac = async (jugador: JugadorAdmin): Promise<void> => {
    jugador._saved = false

    const dto = {
      puntos: jugador.puntos,
      valoracion: jugador.valoracion,
      rebotes: jugador.rebotes,
      asistencias: jugador.asistencias,
      libres: jugador.libres,
      por2Pts: jugador.por2Pts,
      por3Pts: jugador.por3Pts
    }

    await fetch(`${API_CONFIG.BASE_URL}/JugadoresNac/estadisticas/${jugador.idJugador}`, {
      method: 'PUT',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(dto)
    })

    jugador._saved = true
    setTimeout(() => jugador._saved = false, 2000)
  }

  const saveArag = async (jugador: JugadorAdmin): Promise<void> => {
    jugador._saved = false

    const dto = {
      puntos: jugador.puntos,
      libres: jugador.libres,
      porLibres: jugador.porLibres,
      dosPts: jugador.dosPts,
      tresPts: jugador.tresPts
    }

    await fetch(`${API_CONFIG.BASE_URL}/JugadoresA/estadisticas/${jugador.idJugador}`, {
      method: 'PUT',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(dto)
    })

    jugador._saved = true
    setTimeout(() => jugador._saved = false, 2000)
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
