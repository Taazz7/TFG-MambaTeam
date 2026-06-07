import { ref } from 'vue'
import { API_CONFIG } from '../config/api'
import { useRouter } from 'vue-router'

const token = ref(localStorage.getItem('token') || null)
const user = ref(null)

export function useAuth() {
  const router = useRouter()

  const isLoggedIn = () => token.value !== null

  const login = async (username: string, password: string) => {
    const response = await fetch(`http://localhost:5000/Auth/Login`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify({ userName: username, password })
    })

    if (!response.ok) return false

    const jwt = await response.text()
    token.value = jwt
    localStorage.setItem('token', jwt)

    const payload = JSON.parse(atob(jwt.split('.')[1]))
    user.value = payload

    // 🔥 Redirigir automáticamente a Home
    router.push('/')

    return true
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')

    
    router.push('/')
  }

  const isAdmin = () => {
    if (!token.value) return false
    const payload = JSON.parse(atob(token.value.split('.')[1]))
    return payload.role === 'Admin'
  }

  return {
    token,
    user,
    isLoggedIn,
    isAdmin,
    login,
    logout
  }
}
