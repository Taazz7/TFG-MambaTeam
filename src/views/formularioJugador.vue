<template>
  <div class="formulario-container">
    <div class="formulario-card">
      <div class="formulario-header">
        <h2 class="formulario-titulo">Registro de Nuevo Jugador</h2>
        <p class="formulario-subtitulo">Completa la información del jugador</p>
      </div>

      <form @submit.prevent="handleSubmit" class="formulario-body">
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Personal</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="nombre" class="form-label">Nombre <span class="campo-requerido">*</span></label>
              <input type="text" id="nombre" v-model="formData.nombre" class="form-input" placeholder="Nombre del jugador" required />
              <span v-if="errors.nombre" class="error-message">{{ errors.nombre }}</span>
            </div>

            <div class="form-group">
              <label for="apellidos" class="form-label">Apellidos <span class="campo-requerido">*</span></label>
              <input type="text" id="apellidos" v-model="formData.apellidos" class="form-input" placeholder="Apellidos del jugador" required />
              <span v-if="errors.apellidos" class="error-message">{{ errors.apellidos }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="fecha-nacimiento" class="form-label">Fecha de Nacimiento <span class="campo-requerido">*</span></label>
              <input
                type="date"
                id="fecha-nacimiento"
                v-model="formData.fechaNacimiento"
                class="form-input date-input"
                :class="{ 'input-placeholder': !formData.fechaNacimiento }"
                required
              />
            </div>

            <div class="form-group">
              <label for="dni" class="form-label">DNI/NIE <span class="campo-requerido">*</span></label>
              <input type="text" id="dni" v-model="formData.dni" class="form-input" placeholder="12345678A" maxlength="9" required />
            </div>
          </div>
        </div>

        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información de Contacto</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="email" class="form-label">Email <span class="campo-requerido">*</span></label>
              <input type="email" id="email" v-model="formData.email" class="form-input" placeholder="jugador@ejemplo.com" required />
            </div>
            <div class="form-group">
              <label for="telefono" class="form-label">Teléfono <span class="campo-requerido">*</span></label>
              <input type="tel" id="telefono" v-model="formData.telefono" class="form-input" placeholder="612345678" required />
            </div>
          </div>
        </div>

        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Deportiva</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="posicion" class="form-label">Posición <span class="campo-requerido">*</span></label>
              <select 
                id="posicion" 
                v-model="formData.posicion" 
                class="form-input" 
                :class="{ 'input-placeholder': !formData.posicion }"
                required
              >
                <option value="" disabled selected>Selecciona una posición</option>
                <option value="base">Base</option>
                <option value="escolta">Escolta</option>
                <option value="alero">Alero</option>
                <option value="alapivot">Ala-Pívot</option>
                <option value="pivot">Pívot</option>
              </select>
            </div>
            <div class="form-group">
              <label for="altura" class="form-label">Altura (cm)</label>
              <input type="number" id="altura" v-model.number="formData.altura" class="form-input" placeholder="180" />
            </div>
          </div>
        </div>

        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Adicional</h3>
          <div class="form-group">
            <label for="observaciones" class="form-label">Observaciones / Experiencia previa</label>
            <textarea
              id="observaciones"
              v-model="formData.observaciones"
              class="form-textarea"
              placeholder="Cuéntanos un poco sobre ti, clubes anteriores, etc."
              rows="4"
            ></textarea>
          </div>
        </div>

        <div class="formulario-footer">
          <button type="button" @click="handleCancel" class="btn btn-secondary">Cancelar</button>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else>Registrar y Enviar</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';

const router = useRouter();
const isSubmitting = ref(false);
const errors = reactive({});

const formData = reactive({
  nombre: '',
  apellidos: '',
  fechaNacimiento: '',
  dni: '',
  email: '',
  telefono: '',
  posicion: '',
  altura: null,
  observaciones: '' // Asegúrate de que esto esté aquí para el v-model
});

const validateForm = () => {
  const newErrors = {};
  if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
  if (!formData.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios';
  // ... resto de tus validaciones
  Object.assign(errors, newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  isSubmitting.value = true;

  const templateParams = {
    nombre_completo: `${formData.nombre} ${formData.apellidos}`,
    fecha_nacimiento: formData.fechaNacimiento,
    dni: formData.dni,
    email_jugador: formData.email,
    telefono: formData.telefono,
    posicion: formData.posicion,
    altura: formData.altura || 'No especificada',
    observaciones: formData.observaciones || 'Sin observaciones adicionales'
  };

  try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
    alert('¡Registro enviado con éxito!');
    router.push('/jugadores');
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario.');
  } finally {
    isSubmitting.value = false;
  }
};

const handleCancel = () => { if (confirm('¿Cancelar?')) router.push('/jugadores'); };
</script>

<style scoped>
/* (Estilos anteriores se mantienen igual) */
.formulario-container { min-height: 100vh; padding: 2rem; background: #f3f3f3; }
.formulario-card { max-width: 900px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); overflow: hidden; }
.formulario-header { padding: 2rem; background: #611979; color: #F4FA57; text-align: center; }
.formulario-body { padding: 2rem; }
.seccion-formulario { margin-bottom: 2rem; }
.seccion-titulo { font-size: 1.25rem; font-weight: 600; color: #333; margin-bottom: 1.5rem; border-bottom: 2px solid #611979; padding-bottom: 5px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.form-group { display: flex; flex-direction: column; }
.form-label { font-size: 0.875rem; font-weight: 600; color: #555; margin-bottom: 0.5rem; }
.campo-requerido { color: #e53e3e; }

/* Estilos de inputs unificados */
.form-input, .form-textarea {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s ease;
  outline: none;
  width: 100%;
  box-sizing: border-box; /* Importante para que el padding no rompa el ancho */
}

.form-textarea {
  resize: vertical; /* Permite al usuario estirarlo solo hacia abajo */
  min-height: 100px;
  font-family: inherit;
}

.form-input::placeholder, .form-textarea::placeholder {
  color: #a0aec0;
}

.input-placeholder { color: #a0aec0 !important; }

.form-input:focus, .form-textarea:focus {
  border-color: #611979;
  box-shadow: 0 0 0 3px rgba(97, 25, 121, 0.1);
}

.formulario-footer { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; border-top: 1px solid #eee; padding-top: 2rem; }
.btn { padding: 0.75rem 2rem; font-weight: 600; border-radius: 8px; cursor: pointer; border: none; }
.btn-primary { background: #611979; color: white; }
.btn-secondary { background: #e2e8f0; color: #4a5568; }

@media (max-width: 768px) { .form-row { grid-template-columns: 1fr; } }
</style>