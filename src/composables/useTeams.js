import { ref } from 'vue'

/**
 * Composable para gestionar datos de jugadores
 */
export function usePlayers() {
  const players = ref({
    1: {
      id: 1,
      name: 'Jorge García',
      team: 'NACIONAL A1',
      photo: '/img/4-removebg-preview.png',
      position: 'Base/Escolta',
      stats: [
        { label: 'PUNTOS POR PARTIDO', value: '23.3' },
        { label: 'REBOTES POR PARTIDO', value: '7.9' },
        { label: 'ASISTENCIAS POR PARTIDO', value: '8.1' },
        { label: 'MINUTOS POR PARTIDO', value: '24:37' },
        { label: 'VALORACIÓN POR PARTIDO', value: '20.5' }
      ]
    },
    2: {
      id: 2,
      name: 'Carlos Martínez',
      team: 'NACIONAL A1',
      photo: '/img/1.png',
      position: 'Alero',
      stats: [
        { label: 'PUNTOS POR PARTIDO', value: '18.5' },
        { label: 'REBOTES POR PARTIDO', value: '5.3' },
        { label: 'ASISTENCIAS POR PARTIDO', value: '4.2' },
        { label: 'MINUTOS POR PARTIDO', value: '22:15' },
        { label: 'VALORACIÓN POR PARTIDO', value: '16.8' }
      ]
    },
    3: {
      id: 3,
      name: 'Miguel Ángel López',
      team: 'NACIONAL A1',
      photo: '/img/2.png',
      position: 'Pivot',
      stats: [
        { label: 'PUNTOS POR PARTIDO', value: '15.7' },
        { label: 'REBOTES POR PARTIDO', value: '9.2' },
        { label: 'ASISTENCIAS POR PARTIDO', value: '2.8' },
        { label: 'MINUTOS POR PARTIDO', value: '26:43' },
        { label: 'VALORACIÓN POR PARTIDO', value: '18.3' }
      ]
    },
    4: {
      id: 4,
      name: 'David Fernández',
      team: 'NACIONAL A1',
      photo: '/img/3.png',
      position: 'Escolta',
      stats: [
        { label: 'PUNTOS POR PARTIDO', value: '21.1' },
        { label: 'REBOTES POR PARTIDO', value: '4.5' },
        { label: 'ASISTENCIAS POR PARTIDO', value: '6.7' },
        { label: 'MINUTOS POR PARTIDO', value: '28:12' },
        { label: 'VALORACIÓN POR PARTIDO', value: '19.4' }
      ]
    }
  })

  /**
   * Obtener un jugador por su ID
   */
  const getPlayer = (playerId) => {
    return players.value[playerId] || players.value[1]
  }

  /**
   * Añadir un nuevo jugador
   */
  const addPlayer = (player) => {
    const newId = Math.max(...Object.keys(players.value).map(Number)) + 1
    players.value[newId] = { ...player, id: newId }
    return newId
  }

  /**
   * Actualizar estadísticas de un jugador
   */
  const updatePlayerStats = (playerId, newStats) => {
    if (players.value[playerId]) {
      players.value[playerId].stats = newStats
    }
  }

  return {
    players,
    getPlayer,
    addPlayer,
    updatePlayerStats
  }
}