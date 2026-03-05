<template>
  <main class="main">
    <section class="player">
      <div class="player-header">
        <Dropdown
          v-model="selectedPlayerId"
          :options="playerOptions"
          label="Selecciona un jugador:"
        />
      </div>

      <div v-if="loading" class="loading">Cargando estadísticas...</div>

      <div v-else-if="playerData" class="player__content">
        <div class="player__left">       
          <img 
            :src="formatPlayerImage(playerData.nombre)" 
            :alt="playerData.nombre" 
            class="player__photo"
          >
          <div class="player__position">
            {{ playerData.posicion }}
          </div>
        </div>

        <div class="player__right">
          <h2 class="player__title">{{ playerData.nombre }}</h2>
          <h4 class="player__team">{{ formatTeamName(playerData.equipo) }}</h4>
          
          <div 
            v-for="(stat, index) in mappedStats" 
            :key="index" 
            class="player__stat"
          >
            <span class="player__stat-label">{{ stat.label }}:</span>
            <span class="player__stat-value">{{ stat.value }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchData } from '@/config/api'
import Dropdown from '@/components/dropDown.vue'

const route = useRoute()
const router = useRouter()

const playerData = ref(null)
const allPlayers = ref([]) 
const loading = ref(true)

const teamNames = {
  1: 'NACIONAL A1', 2: 'NACIONAL A2 MASCULINO', 3: 'NACIONAL A2 FEMENINO',
  4: '2ª ARAGONESA', 5: '3ª ARAGONESA'
}

const selectedPlayerId = ref(route.params.id || '')

const loadDropdownData = async () => {
  try {
    const [nac, arag] = await Promise.all([
      fetchData('/JugadoresNac'),
      fetchData('/JugadoresA')
    ])
    
    const listNac = (Array.isArray(nac) ? nac : [nac]).map(p => ({
      value: `Nac-${p.jugadorNacId}`,
      label: `${p.nombre} - ${teamNames[p.equipo] || 'Nacional'}`
    }))
    
    const listArag = (Array.isArray(arag) ? arag : [arag]).map(p => ({
      value: `A-${p.jugadorAId}`,
      label: `${p.nombre} - ${teamNames[p.equipo] || 'Aragonesa'}`
    }))

    allPlayers.value = [...listNac, ...listArag]
    
    if (!selectedPlayerId.value && allPlayers.value.length > 0) {
      selectedPlayerId.value = allPlayers.value[0].value
    }
  } catch (e) {
    console.error("Error en dropdown", e)
  }
}

const loadPlayerData = async (compositeId) => {
  if (!compositeId) return
  loading.value = true
  
  const [type, id] = compositeId.split('-')
  const endpoint = type === 'Nac' ? '/JugadoresNac' : '/JugadoresA'

  try {
    const data = await fetchData(`${endpoint}/${id}`)
    playerData.value = Array.isArray(data) ? data[0] : data
  } catch (error) {
    console.error("Error cargando jugador", error)
  } finally {
    loading.value = false
  }
}

// Mapeo diferenciado según el origen del jugador (Nacional vs Aragonesa)
const mappedStats = computed(() => {
  if (!playerData.value) return []
  const d = playerData.value
  const [type] = selectedPlayerId.value.split('-')

  if (type === 'Nac') {
    // Estructura para JugadoresNac
    return [
      { label: 'PUNTOS POR PARTIDO', value: d.puntos || '0' },
      { label: 'VALORACIÓN', value: d.valoracion || '0' },
      { label: 'REBOTES POR PARTIDO', value: d.rebotes || '0' },
      { label: 'ASISTENCIAS POR PARTIDO', value: d.asistencias || '0' },
      { label: '% TIROS LIBRES', value: `${d.libres || 0}%` },
      { label: '% TIROS 2PTS', value: `${d.por2Pts || 0}%` },
      { label: '% TIROS 3PTS', value: `${d.por3Pts || 0}%` }
    ]
  } else {
    // Estructura para JugadoresA según Swagger
    return [
      { label: 'PUNTOS POR PARTIDO', value: d.puntos || '0' },
      { label: 'TIROS LIBRES', value: d.libres || '0' },
      { label: '% TIROS LIBRES', value: `${d.porLibres || 0}%` },
      { label: 'TIROS DE 2PTS', value: d.dosPts || '0' },
      { label: 'TIROS DE 3PTS', value: d.tresPts || '0' }
    ]
  }
})

const playerOptions = computed(() => allPlayers.value)
const formatPlayerImage = (name) => `/src/assets/img/${name}.png`
const formatTeamName = (id) => teamNames[id] || `Equipo ${id}`

watch(selectedPlayerId, (newId) => {
  if (newId) {
    router.push(`/jugador/${newId}`)
    loadPlayerData(newId)
  }
})

onMounted(async () => {
  await loadDropdownData()
  loadPlayerData(selectedPlayerId.value)
})
</script>