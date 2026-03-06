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
              <span v-if="errors.dni" class="error-message">{{ errors.dni }}</span>
            </div>
          </div>
        </div>

        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información de Contacto</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="email" class="form-label">Email <span class="campo-requerido">*</span></label>
              <input type="email" id="email" v-model="formData.email" class="form-input" placeholder="jugador@ejemplo.com" required />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
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
            <span v-if="isSubmitting">Enviando Correo...</span>
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
  observaciones: ''
});

const validateForm = () => {
  const newErrors = {};
  
  // Validación Nombre y Apellidos
  if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
  if (!formData.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios';
  
  // Validación DNI (Formato estándar España)
  const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
  if (!formData.dni.trim()) {
    newErrors.dni = 'El DNI es obligatorio';
  } else if (!dniRegex.test(formData.dni)) {
    newErrors.dni = 'Formato de DNI inválido';
  }

  // Validación Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    newErrors.email = 'El email es obligatorio';
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Email no válido';
  }

  // Limpiar errores anteriores y asignar nuevos
  Object.keys(errors).forEach(key => delete errors[key]);
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
    await emailjs.send(
      'service_36h5xbz',      // Tu Service ID
      'template_feml7qp',     // RECUERDA CAMBIAR ESTO por tu Template ID de EmailJS
      templateParams,
      'd3nd1Xg1EDGHddK67'     // Tu Public Key
    );

    alert('¡Registro enviado con éxito! Nos pondremos en contacto contigo pronto.');
    router.push('/');
  } catch (error) {
    console.error('Error al enviar:', error);
    alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
  } finally {
    isSubmitting.value = false;
  }
};

const handleCancel = () => { 
  if (confirm('¿Estás seguro de que quieres cancelar el registro?')) {
    router.push('/');
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.input-placeholder { 
  color: #a0aec0 !important; 
}
</style>