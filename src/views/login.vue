<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>

    <form @submit.prevent="onLogin">
      <input v-model="username" placeholder="Usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />

      <button type="submit">Entrar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref(null)

const { login } = useAuth()
const router = useRouter()

const onLogin = async () => {
  const ok = await login(username.value, password.value)
  if (!ok) {
    error.value = 'Credenciales incorrectas'
    return
  }

  router.push('/admin/stats/nac')
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px 20px;
}
.error {
  color: red;
}
</style>
