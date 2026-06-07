<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const { login } = useAuth()
const router = useRouter()

const doLogin = async () => {
  const ok = await login(username.value, password.value)

  if (ok) {
    router.push('/')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<template>
  <div class="login-page">
    <form @submit.prevent class="login-container">
      <h2 class="login-title">Iniciar Sesión</h2>

      <input
        v-model="username"
        class="login-input"
        placeholder="Usuario"
      />

      <input
        v-model="password"
        type="password"
        class="login-input"
        placeholder="Contraseña"
      />

      <button
        type="button"
        class="login-button"
        @click="doLogin"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<style lang="scss">
/* CONTENEDOR GENERAL */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

/* TARJETA DEL LOGIN */
.login-container {
  max-width: 400px;
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  text-align: center;
  color: white;
}

/* TÍTULO */
.login-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: #f1c40f; /* amarillo corporativo */
}

/* INPUTS */
.login-input {
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 18px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.15);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }

  &:focus {
    outline: none;
    border-color: #f1c40f;
    background: rgba(255,255,255,0.25);
  }
}

/* BOTÓN */
.login-button {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  background: linear-gradient(to right, #000000, #f1c40f);
  color: white;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
}
</style>
