<template>
  <div class="formulario-container">
    <div class="formulario-card">
      <div class="formulario-header">
        <h2 class="formulario-titulo">Registro de Nuevo Jugador</h2>
        <p class="formulario-subtitulo">Completa la información del jugador</p>
      </div>

      <form @submit.prevent="handleSubmit" class="formulario-body">
        <!-- Información Personal -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Personal</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="nombre" class="form-label">
                Nombre <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                v-model="formData.nombre"
                class="form-input"
                placeholder="Nombre del jugador"
                required
              />
              <span v-if="errors.nombre" class="error-message">{{ errors.nombre }}</span>
            </div>

            <div class="form-group">
              <label for="apellidos" class="form-label">
                Apellidos <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="apellidos"
                v-model="formData.apellidos"
                class="form-input"
                placeholder="Apellidos del jugador"
                required
              />
              <span v-if="errors.apellidos" class="error-message">{{ errors.apellidos }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="fecha-nacimiento" class="form-label">
                Fecha de Nacimiento <span class="campo-requerido">*</span>
              </label>
              <input
                type="date"
                id="fecha-nacimiento"
                v-model="formData.fechaNacimiento"
                class="form-input"
                required
              />
              <span v-if="errors.fechaNacimiento" class="error-message">{{ errors.fechaNacimiento }}</span>
            </div>

            <div class="form-group">
              <label for="dni" class="form-label">
                DNI/NIE <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="dni"
                v-model="formData.dni"
                class="form-input"
                placeholder="12345678A"
                maxlength="9"
                required
              />
              <span v-if="errors.dni" class="error-message">{{ errors.dni }}</span>
            </div>
          </div>
        </div>

        <!-- Información de Contacto -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información de Contacto</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="email" class="form-label">
                Email <span class="campo-requerido">*</span>
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="form-input"
                placeholder="jugador@ejemplo.com"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="telefono" class="form-label">
                Teléfono <span class="campo-requerido">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                v-model="formData.telefono"
                class="form-input"
                placeholder="612345678"
                required
              />
              <span v-if="errors.telefono" class="error-message">{{ errors.telefono }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="direccion" class="form-label">Dirección</label>
            <input
              type="text"
              id="direccion"
              v-model="formData.direccion"
              class="form-input"
              placeholder="Calle, número, piso"
            />
          </div>
        </div>

        <!-- Información Deportiva -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Deportiva</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="posicion" class="form-label">
                Posición <span class="campo-requerido">*</span>
              </label>
              <select
                id="posicion"
                v-model="formData.posicion"
                class="form-input"
                required
              >
                <option value="">Selecciona una posición</option>
                <option value="base">Base</option>
                <option value="escolta">Escolta</option>
                <option value="alero">Alero</option>
                <option value="alapivot">Ala-Pívot</option>
                <option value="pivot">Pívot</option>
              </select>
              <span v-if="errors.posicion" class="error-message">{{ errors.posicion }}</span>
            </div>

            <div class="form-group">
              <label for="dorsal" class="form-label">
                Número de Dorsal <span class="campo-requerido">*</span>
              </label>
              <input
                type="number"
                id="dorsal"
                v-model.number="formData.dorsal"
                class="form-input"
                placeholder="0-99"
                min="0"
                max="99"
                required
              />
              <span v-if="errors.dorsal" class="error-message">{{ errors.dorsal }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="altura" class="form-label">Altura (cm)</label>
              <input
                type="number"
                id="altura"
                v-model.number="formData.altura"
                class="form-input"
                placeholder="180"
                min="150"
                max="250"
              />
            </div>

            <div class="form-group">
              <label for="peso" class="form-label">Peso (kg)</label>
              <input
                type="number"
                id="peso"
                v-model.number="formData.peso"
                class="form-input"
                placeholder="75"
                min="50"
                max="150"
              />
            </div>
          </div>
        </div>

        <!-- Información Adicional -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información Adicional</h3>
          
          <div class="form-group">
            <label for="foto" class="form-label">Fotografía</label>
            <input
              type="file"
              id="foto"
              @change="handleFileUpload"
              class="form-input-file"
              accept="image/*"
            />
            <div v-if="formData.fotoPreview" class="foto-preview">
              <img :src="formData.fotoPreview" alt="Preview" />
            </div>
          </div>

          <div class="form-group">
            <label for="observaciones" class="form-label">Observaciones</label>
            <textarea
              id="observaciones"
              v-model="formData.observaciones"
              class="form-textarea"
              placeholder="Información adicional sobre el jugador..."
              rows="4"
            ></textarea>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="formulario-footer">
          <button 
            type="button" 
            @click="handleCancel" 
            class="btn btn-secondary"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            class="btn btn-primary"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Guardando...</span>
            <span v-else>Registrar Jugador</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
  nombre: '',
  apellidos: '',
  fechaNacimiento: '',
  dni: '',
  email: '',
  telefono: '',
  direccion: '',
  posicion: '',
  dorsal: null,
  altura: null,
  peso: null,
  foto: null,
  fotoPreview: null,
  observaciones: ''
});

const errors = reactive({});
const isSubmitting = ref(false);

const validateForm = () => {
  const newErrors = {};
  
  if (!formData.nombre.trim()) {
    newErrors.nombre = 'El nombre es obligatorio';
  }
  
  if (!formData.apellidos.trim()) {
    newErrors.apellidos = 'Los apellidos son obligatorios';
  }
  
  if (!formData.dni.trim()) {
    newErrors.dni = 'El DNI/NIE es obligatorio';
  } else if (!/^[0-9]{8}[A-Za-z]$/.test(formData.dni)) {
    newErrors.dni = 'Formato de DNI inválido';
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'El email es obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Email inválido';
  }
  
  if (!formData.telefono.trim()) {
    newErrors.telefono = 'El teléfono es obligatorio';
  } else if (!/^[0-9]{9}$/.test(formData.telefono)) {
    newErrors.telefono = 'Formato de teléfono inválido (9 dígitos)';
  }
  
  if (!formData.posicion) {
    newErrors.posicion = 'La posición es obligatoria';
  }
  
  if (!formData.dorsal && formData.dorsal !== 0) {
    newErrors.dorsal = 'El dorsal es obligatorio';
  }
  
  Object.keys(errors).forEach(key => delete errors[key]);
  Object.assign(errors, newErrors);
  
  return Object.keys(newErrors).length === 0;
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.foto = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      formData.fotoPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos del formulario:', formData);
    
    // Simulación de llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirigir a la lista de jugadores o mostrar mensaje de éxito
    alert('Jugador registrado exitosamente');
    router.push('/jugadores'); // Ajusta esta ruta según tu aplicación
    
  } catch (error) {
    console.error('Error al registrar jugador:', error);
    alert('Error al registrar el jugador. Por favor, intenta de nuevo.');
  } finally {
    isSubmitting.value = false;
  }
};

const handleCancel = () => {
  if (confirm('¿Estás seguro de que quieres cancelar? Se perderán los datos ingresados.')) {
    router.push('/jugadores'); // Ajusta esta ruta según tu aplicación
  }
};
</script>

<style scoped>
.formulario-container {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.formulario-card {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.formulario-header {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.formulario-titulo {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.formulario-subtitulo {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
}

.formulario-body {
  padding: 2rem;
}

.seccion-formulario {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
}

.seccion-formulario:last-of-type {
  border-bottom: none;
}

.seccion-titulo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
}

.campo-requerido {
  color: #e53e3e;
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input-file {
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

.foto-preview {
  margin-top: 1rem;
  text-align: center;
}

.foto-preview img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-message {
  font-size: 0.75rem;
  color: #e53e3e;
  margin-top: 0.25rem;
}

.formulario-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #e2e8f0;
  color: #333;
}

.btn-secondary:hover {
  background: #cbd5e0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .formulario-container {
    padding: 1rem;
  }
  
  .formulario-body {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .formulario-titulo {
    font-size: 1.5rem;
  }
}
</style>