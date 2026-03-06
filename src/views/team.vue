<template>
  <div>
    <div class="team-header">
      <div class="controls-wrapper">
        <Dropdown
          v-model="selectedCategory"
          :options="categoryOptions"
          label="Selecciona un equipo:"
        />
        
        <a 
          href="https://competiciones.feb.es/autonomicas/Resultados.aspx?a=3" 
          target="_blank" 
          class="btn-clasificacion"
        >
          🏆 Ver Clasificación
        </a>
      </div>
    </div>

    <div v-if="loading" class="loading">Cargando datos del equipo...</div>
    
    <div v-else-if="teamData">
      <h2 class="Subtitulo">{{ teamData.nombre }}</h2>
      <h2 class="Subtitulo">Récord: {{ teamData.victorias }}V - {{ teamData.derrotas }}D</h2>
      
      <div class="cards-container">
        <PlayerCard
          v-for="player in players"
          :key="player.id"
          :player-id="player.id"
          :player-category="selectedCategory"
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

const categoryMap = {
  'nacA1Masc': 1,
  'nacA2Fem': 2,
  'nacA2Masc': 3,
  '2Arag': 4,
  '3Arag': 5
}

const categoryOptions = [
  { value: 'nacA1Masc', label: 'Nacional A1 Masculino' },
  { value: 'nacA2Fem', label: 'Nacional A2 Femenino' },
  { value: 'nacA2Masc', label: 'Nacional A2 Masculino' },
  { value: '2Arag', label: '2ª Aragonesa' },
  { value: '3Arag', label: '3ª Aragonesa' }
]

const selectedCategory = ref(route.params.categoria || 'nacA1Masc')

const loadTeamData = async (categoryKey) => {
  loading.value = true
  const teamId = categoryMap[categoryKey] || 1
  
  try {
    teamData.value = await fetchData(`/Equipo/${teamId}`)
    const playerPath = teamId <= 3 ? 'JugadoresNac' : 'JugadoresA'
    const response = await fetchData(`/${playerPath}/equipo/${teamId}`)
    const rawPlayers = Array.isArray(response) ? response : []
    
    players.value = rawPlayers.map(p => ({
      id: p.jugadorNacId || p.jugadorAId || p.id,
      nombre: p.nombre
    }))

  } catch (error) {
    console.error("Error cargando equipo o jugadores:", error)
    players.value = []
    teamData.value = null
  } finally {
    loading.value = false
  }
}

const formatPlayerImage = (name) => {
  const formattedName = name ? name.trim().toUpperCase() : 'default'
  return `/src/assets/img/${formattedName}.png`
}

watch(selectedCategory, (newCat) => {
  router.push(`/equipo/${newCat}`)
  loadTeamData(newCat)
})

onMounted(() => {
  loadTeamData(selectedCategory.value)
})
</script>

<style scoped>
.team-header {
  margin-top: 50px; /* Margen para separar del header */
  display: flex;
  justify-content: center;
}

</style>