import { ref, computed } from 'vue'

/**
 * Composable para gestionar datos de equipos
 */
export function useTeams() {
  const teams = ref({
    nacA1Masc: {
      id: 'nacA1Masc',
      name: 'Nacional A1 Masculino',
      record: '7V 1D',
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Jugador ${i + 1}`,
        image: `/img/${i + 1}.png`,
        position: i % 2 === 0 ? 'Base/Escolta' : 'Alero',
        stats: {
          points: (Math.random() * 30).toFixed(1),
          rebounds: (Math.random() * 10).toFixed(1),
          assists: (Math.random() * 10).toFixed(1)
        }
      }))
    },
    nacA2Masc: {
      id: 'nacA2Masc',
      name: 'Nacional A2 Masculino',
      record: '5V 3D',
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 13,
        name: `Jugador ${i + 1}`,
        image: `/img/${(i % 12) + 1}.png`,
        position: i % 2 === 0 ? 'Base' : 'Pivot',
        stats: {
          points: (Math.random() * 25).toFixed(1),
          rebounds: (Math.random() * 8).toFixed(1),
          assists: (Math.random() * 8).toFixed(1)
        }
      }))
    },
    nacA2Fem: {
      id: 'nacA2Fem',
      name: 'Nacional A2 Femenino',
      record: '6V 2D',
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 25,
        name: `Jugadora ${i + 1}`,
        image: `/img/${(i % 12) + 1}.png`,
        position: i % 3 === 0 ? 'Base' : i % 3 === 1 ? 'Escolta' : 'Alero',
        stats: {
          points: (Math.random() * 20).toFixed(1),
          rebounds: (Math.random() * 7).toFixed(1),
          assists: (Math.random() * 6).toFixed(1)
        }
      }))
    },
    '2Arag': {
      id: '2Arag',
      name: '2ª División Aragón',
      record: '8V 0D',
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 37,
        name: `Jugador ${i + 1}`,
        image: `/img/${(i % 12) + 1}.png`,
        position: i % 2 === 0 ? 'Alero' : 'Pivot',
        stats: {
          points: (Math.random() * 22).toFixed(1),
          rebounds: (Math.random() * 9).toFixed(1),
          assists: (Math.random() * 5).toFixed(1)
        }
      }))
    },
    '3Arag': {
      id: '3Arag',
      name: '3ª División Aragón',
      record: '4V 4D',
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 49,
        name: `Jugador ${i + 1}`,
        image: `/img/${(i % 12) + 1}.png`,
        position: i % 2 === 0 ? 'Base/Escolta' : 'Pivot',
        stats: {
          points: (Math.random() * 18).toFixed(1),
          rebounds: (Math.random() * 6).toFixed(1),
          assists: (Math.random() * 4).toFixed(1)
        }
      }))
    }
  })

  /**
   * Obtener un equipo por su ID
   */
  const getTeam = (teamId) => {
    return teams.value[teamId] || teams.value.nacA1Masc
  }

  /**
   * Obtener todos los equipos como array
   */
  const allTeams = computed(() => Object.values(teams.value))

  /**
   * Obtener lista de categorías
   */
  const categories = computed(() => 
    Object.keys(teams.value).map(key => ({
      id: key,
      name: teams.value[key].name
    }))
  )

  return {
    teams,
    getTeam,
    allTeams,
    categories
  }
}