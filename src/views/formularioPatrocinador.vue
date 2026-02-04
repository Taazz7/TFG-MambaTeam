<template>
  <div class="formulario-container">
    <div class="formulario-card">
      <div class="formulario-header">
        <h2 class="formulario-titulo">Registro de Nuevo Patrocinador</h2>
        <p class="formulario-subtitulo">Completa la información del patrocinador</p>
      </div>

      <form @submit.prevent="handleSubmit" class="formulario-body">
        <!-- Información de la Empresa -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información de la Empresa</h3>
          
          <div class="form-group">
            <label for="nombre-empresa" class="form-label">
              Nombre de la Empresa <span class="campo-requerido">*</span>
            </label>
            <input
              type="text"
              id="nombre-empresa"
              v-model="formData.nombreEmpresa"
              class="form-input"
              placeholder="Nombre comercial o razón social"
              required
            />
            <span v-if="errors.nombreEmpresa" class="error-message">{{ errors.nombreEmpresa }}</span>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="cif" class="form-label">
                CIF/NIF <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="cif"
                v-model="formData.cif"
                class="form-input"
                placeholder="A12345678"
                maxlength="9"
                required
              />
              <span v-if="errors.cif" class="error-message">{{ errors.cif }}</span>
            </div>

            <div class="form-group">
              <label for="sector" class="form-label">
                Sector <span class="campo-requerido">*</span>
              </label>
              <select
                id="sector"
                v-model="formData.sector"
                class="form-input"
                required
              >
                <option value="">Selecciona un sector</option>
                <option value="tecnologia">Tecnología</option>
                <option value="deportes">Deportes</option>
                <option value="alimentacion">Alimentación</option>
                <option value="textil">Textil</option>
                <option value="salud">Salud</option>
                <option value="automocion">Automoción</option>
                <option value="construccion">Construcción</option>
                <option value="finanzas">Finanzas</option>
                <option value="otro">Otro</option>
              </select>
              <span v-if="errors.sector" class="error-message">{{ errors.sector }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="descripcion" class="form-label">Descripción de la Empresa</label>
            <textarea
              id="descripcion"
              v-model="formData.descripcion"
              class="form-textarea"
              placeholder="Breve descripción de la actividad de la empresa..."
              rows="3"
            ></textarea>
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
                placeholder="contacto@empresa.com"
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
                placeholder="912345678"
                required
              />
              <span v-if="errors.telefono" class="error-message">{{ errors.telefono }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="web" class="form-label">Sitio Web</label>
            <input
              type="url"
              id="web"
              v-model="formData.web"
              class="form-input"
              placeholder="https://www.empresa.com"
            />
          </div>

        </div>

        <!-- Información del Patrocinio -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información del Patrocinio</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="importe" class="form-label">
                Importe Por Temporada (€) <span class="campo-requerido">*</span>
              </label>
              <input
                type="number"
                id="importe"
                v-model.number="formData.importe"
                class="form-input"
                placeholder="5000"
                min="0"
                step="0.01"
                required
              />
              <span v-if="errors.importe" class="error-message">{{ errors.importe }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="beneficios" class="form-label">Beneficios del Patrocinio</label>
            <textarea
              id="beneficios"
              v-model="formData.beneficios"
              class="form-textarea"
              placeholder="Camisetas de entrenamiento, material deportivo, eventos presenciales..."
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
            <span v-else>Registrar Patrocinador</span>
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
  nombreEmpresa: '',
  cif: '',
  sector: '',
  descripcion: '',
  email: '',
  telefono: '',
  web: '',
  importe: null,
  beneficios: ''
});

const errors = reactive({});
const isSubmitting = ref(false);

const validateForm = () => {
  const newErrors = {};
  
  if (!formData.nombreEmpresa.trim()) {
    newErrors.nombreEmpresa = 'El nombre de la empresa es obligatorio';
  }
  
  if (!formData.cif.trim()) {
    newErrors.cif = 'El CIF/NIF es obligatorio';
  } else if (!/^[A-Za-z0-9]{9}$/.test(formData.cif)) {
    newErrors.cif = 'Formato de CIF/NIF inválido';
  }
  
  if (!formData.sector) {
    newErrors.sector = 'El sector es obligatorio';
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
  
  if (!formData.importe || formData.importe <= 0) {
    newErrors.importe = 'El importe debe ser mayor a 0';
  }
  
  Object.keys(errors).forEach(key => delete errors[key]);
  Object.assign(errors, newErrors);
  
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    // Scroll al primer error
    const firstError = document.querySelector('.error-message');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Aquí iría la lógica para enviar los datos al backend
    // Crear FormData para enviar archivos
    const submitData = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key !== 'logoPreview' && formData[key] !== null) {
        submitData.append(key, formData[key]);
      }
    });
    
    console.log('Datos del formulario:', formData);
    
    // Simulación de llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirigir a la lista de patrocinadores o mostrar mensaje de éxito
    alert('Patrocinador registrado exitosamente');
    router.push('/patrocinadores'); // Ajusta esta ruta según tu aplicación
    
  } catch (error) {
    console.error('Error al registrar patrocinador:', error);
    alert('Error al registrar el patrocinador. Por favor, intenta de nuevo.');
  } finally {
    isSubmitting.value = false;
  }
};

const handleCancel = () => {
  if (confirm('¿Estás seguro de que quieres cancelar? Se perderán los datos ingresados.')) {
    router.push('/patrocinadores'); // Ajusta esta ruta según tu aplicación
  }
};
</script>

<style scoped>
.formulario-container {
  min-height: 100vh;
  padding: 2rem;
  background: #f3f3f3;
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
  background: #F4FA57;
  color: #611979;
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
  border-bottom: 2px solid #611979;
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
  margin-bottom: 1.5rem;
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
  border-color: #611979;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input-file {
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

.form-help {
  font-size: 0.75rem;
  color: #718096;
  margin-top: 0.25rem;
}

.logo-preview {
  margin-top: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  text-align: center;
}

.logo-preview img {
  max-width: 300px;
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
  background: #611979;
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