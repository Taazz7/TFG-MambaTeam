<template>
  <div>
    <div class="team-header">
      <Dropdown
        v-model="selectedCategory"
        :options="categoryOptions"
        label="Selecciona un equipo:"
      />
    </div>

    <div v-if="loading" class="loading">Cargando datos del equipo...</div>
    
    <div v-else-if="teamData">
      <h2 class="Subtitulo">{{ teamData.nombre }}</h2>
      <h2 class="Subtitulo">Record: {{ teamData.victorias }}V - {{ teamData.derrotas }}D</h2>
      
      <div class="cards-container">
        <PlayerCard
          v-for="player in players"
          :key="player.id"
          :player-id="player.id"
          :player-image="formatPlayerImage(player.nombre)"
          :player-name="player.nombre"
        />
      </div>
    </div>
    
    <div v-else class="loading">No se encontraron datos para este equipo.</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchData } from '@/config/api'
import PlayerCard from '@/components/playerCard.vue'
import Dropdown from '@/components/dropDown.vue'

const route = useRoute()
const router = useRouter()

const teamData = ref(null)
const players = ref([])
const loading = ref(true)

// Mapeo de categorías a IDs de la API
const categoryMap = {
  'nacA1Masc': 1,
  'nacA2Masc': 2,
  'nacA2Fem': 3,
  '2Arag': 4,
  '3Arag': 5
}

const categoryOptions = [
  { value: 'nacA1Masc', label: 'Nacional A1 Masculino' },
  { value: 'nacA2Masc', label: 'Nacional A2 Masculino' },
  { value: 'nacA2Fem', label: 'Nacional A2 Femenino' },
  { value: '2Arag', label: '2ª Aragonesa' },
  { value: '3Arag', label: '3ª Aragonesa' }
]

const selectedCategory = ref(route.params.categoria || 'nacA1Masc')

const loadTeamData = async (categoryKey) => {
  loading.value = true
  const teamId = categoryMap[categoryKey] || 1
  
  try {
    // 1. Datos del equipo
    teamData.value = await fetchData(`/Equipo/${teamId}`)

    // 2. Datos de los jugadores
    const playerEndpoint = teamId <= 3 ? `/JugadoresNac` : `/JugadoresA`
    const response = await fetchData(`${playerEndpoint}/${teamId}`)
    
    /* IMPORTANTE: Si tu API devuelve un objeto único por ID de equipo en lugar de una lista,
       asegúrate de que el endpoint del backend devuelva un Array (List<Jugador>).
       Aquí forzamos que sea Array para que el .map() no falle.
    */
    const rawPlayers = Array.isArray(response) ? response : [response]
    
    players.value = rawPlayers.map(p => ({
      id: p.jugadorNacId || p.jugadorAId || p.id,
      nombre: p.nombre
    }))

  } catch (error) {
    console.error("Error cargando equipo:", error)
    players.value = []
  } finally {
    loading.value = false
  }
}

const formatPlayerImage = (name) => {
  return `/src/assets/img/${name}.png`
}

watch(selectedCategory, (newCat) => {
  router.push(`/equipo/${newCat}`)
  loadTeamData(newCat)
})

onMounted(() => {
  loadTeamData(selectedCategory.value)
})
</script>