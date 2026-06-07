<template>
  <div class="admin-stats">

    <h2>ESTADÍSTICAS – NACIONAL</h2>
    <table class="stats-table">
      <thead>
        <tr>
          <th>Jugador</th>
          <th>Puntos</th>
          <th>Valoración</th>
          <th>Rebotes</th>
          <th>Asistencias</th>
          <th>% Libres</th>
          <th>% 2 Pts</th>
          <th>% 3 Pts</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="j in jugadoresNac" :key="j.idJugador">
          <td>{{ j.nombre }}</td>
          <td><input v-model.number="j.puntos" /></td>
          <td><input v-model.number="j.valoracion" /></td>
          <td><input v-model.number="j.rebotes" /></td>
          <td><input v-model.number="j.asistencias" /></td>
          <td><input v-model.number="j.libres" /></td>
          <td><input v-model.number="j.por2Pts" /></td>
          <td><input v-model.number="j.por3Pts" /></td>

          <td>
            <button class="btn-guardar" @click="saveNac(j)">
            💾 Guardar
            </button>

          </td>
        </tr>
      </tbody>
    </table>

    <h2 style="margin-top: 40px;">ESTADÍSTICAS – ARAGONESA</h2>
    <table class="stats-table">
      <thead>
        <tr>
          <th>Jugador</th>
          <th>Puntos</th>
          <th>Libres</th>
          <th>% Libres</th>
          <th>2 Pts</th>
          <th>3 Pts</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="j in jugadoresArag" :key="j.idJugador">
          <td>{{ j.nombre }}</td>
          <td><input v-model.number="j.puntos" /></td>
          <td><input v-model.number="j.libres" /></td>
          <td><input v-model.number="j.porLibres" /></td>
          <td><input v-model.number="j.dosPts" /></td>
          <td><input v-model.number="j.tresPts" /></td>

          <td>
            <button class="btn-guardar" @click="saveArag(j)">
            💾 Guardar
            </button>

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
  jugadoresNac,
  jugadoresArag,
  loadAll,
  saveNac,
  saveArag
} = useAdminPlayers()

onMounted(() => {
  loadAll()
})
</script>

<style>
.stats-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.stats-table th,
.stats-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.stats-table input {
  width: 70px;
}

.btn-guardar {
  background-color: #28a745; /* Verde */
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s ease;
}

.btn-guardar:hover {
  background-color: #218838; /* Verde más oscuro */
}

.btn-guardar:active {
  background-color: #1e7e34;
  transform: scale(0.97);
}

</style>
