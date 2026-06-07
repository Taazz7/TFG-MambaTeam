<template>
  <div class="admin-stats">

    <h2 class="Subtitulo">ESTADÍSTICAS – NACIONAL</h2>

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
          <button class="btn btn--success" @click="saveNac(j)">
            💾 Guardar
          </button>


          </td>
        </tr>
      </tbody>
    </table>

   <h2 class="Subtitulo">ESTADÍSTICAS – ARAGONESA</h2>

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
          <button class="btn btn--success" @click="saveArag(j)">
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
