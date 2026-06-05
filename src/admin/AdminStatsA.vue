<template>
  <div class="admin-container">
    <h1>Estadísticas — 2ª Aragonesa</h1>

    <div v-if="loading" class="loading">Cargando jugadores...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <table v-if="playersA.length" class="stats-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
          <th>Libres</th>
          <th>% Libres</th>
          <th>2PTS</th>
          <th>3PTS</th>
          <th>Guardar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="p in playersA" :key="p.jugadorAId">
          <td>{{ p.nombre }}</td>

          <td><input v-model.number="p.puntos" type="number" step="0.1" /></td>
          <td><input v-model.number="p.libres" type="number" step="0.1" /></td>
          <td><input v-model.number="p.porLibres" type="number" step="0.1" /></td>
          <td><input v-model.number="p.dosPts" type="number" step="0.1" /></td>
          <td><input v-model.number="p.tresPts" type="number" step="0.1" /></td>

          <td>
            <button class="save-btn" @click="guardar(p)">💾</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAdminPlayers } from '../composables/useAdminPlayers'

const {
  playersA,
  loading,
  error,
  fetchPlayersA,
  updatePlayerA
} = useAdminPlayers()

onMounted(() => {
  fetchPlayersA()
})

const guardar = async (player) => {
  const ok = await updatePlayerA(player)
  if (ok) {
    alert(`Estadísticas de ${player.nombre} guardadas correctamente`)
  } else {
    alert('Error al guardar')
  }
}
</script>

<style scoped>
.admin-container {
  padding: 20px;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.stats-table th,
.stats-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.stats-table input {
  width: 70px;
  padding: 4px;
}

.save-btn {
  background: #4caf50;
  color: white;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.save-btn:hover {
  background: #45a049;
}

.loading {
  font-size: 18px;
  margin-top: 20px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
