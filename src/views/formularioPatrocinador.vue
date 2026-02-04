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

          <div class="form-group">
            <label for="direccion" class="form-label">
              Dirección <span class="campo-requerido">*</span>
            </label>
            <input
              type="text"
              id="direccion"
              v-model="formData.direccion"
              class="form-input"
              placeholder="Calle, número, ciudad, código postal"
              required
            />
            <span v-if="errors.direccion" class="error-message">{{ errors.direccion }}</span>
          </div>
        </div>

        <!-- Persona de Contacto -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Persona de Contacto</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="nombre-contacto" class="form-label">
                Nombre Completo <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="nombre-contacto"
                v-model="formData.nombreContacto"
                class="form-input"
                placeholder="Nombre y apellidos"
                required
              />
              <span v-if="errors.nombreContacto" class="error-message">{{ errors.nombreContacto }}</span>
            </div>

            <div class="form-group">
              <label for="cargo-contacto" class="form-label">
                Cargo <span class="campo-requerido">*</span>
              </label>
              <input
                type="text"
                id="cargo-contacto"
                v-model="formData.cargoContacto"
                class="form-input"
                placeholder="Director de Marketing, Gerente, etc."
                required
              />
              <span v-if="errors.cargoContacto" class="error-message">{{ errors.cargoContacto }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email-contacto" class="form-label">
                Email de Contacto <span class="campo-requerido">*</span>
              </label>
              <input
                type="email"
                id="email-contacto"
                v-model="formData.emailContacto"
                class="form-input"
                placeholder="nombre@empresa.com"
                required
              />
              <span v-if="errors.emailContacto" class="error-message">{{ errors.emailContacto }}</span>
            </div>

            <div class="form-group">
              <label for="telefono-contacto" class="form-label">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                id="telefono-contacto"
                v-model="formData.telefonoContacto"
                class="form-input"
                placeholder="612345678"
              />
            </div>
          </div>
        </div>

        <!-- Información del Patrocinio -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Información del Patrocinio</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="tipo-patrocinio" class="form-label">
                Tipo de Patrocinio <span class="campo-requerido">*</span>
              </label>
              <select
                id="tipo-patrocinio"
                v-model="formData.tipoPatrocinio"
                class="form-input"
                required
              >
                <option value="">Selecciona el tipo</option>
                <option value="principal">Principal</option>
                <option value="oro">Oro</option>
                <option value="plata">Plata</option>
                <option value="bronce">Bronce</option>
                <option value="colaborador">Colaborador</option>
              </select>
              <span v-if="errors.tipoPatrocinio" class="error-message">{{ errors.tipoPatrocinio }}</span>
            </div>

            <div class="form-group">
              <label for="importe" class="form-label">
                Importe Anual (€) <span class="campo-requerido">*</span>
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

          <div class="form-row">
            <div class="form-group">
              <label for="fecha-inicio" class="form-label">
                Fecha de Inicio <span class="campo-requerido">*</span>
              </label>
              <input
                type="date"
                id="fecha-inicio"
                v-model="formData.fechaInicio"
                class="form-input"
                required
              />
              <span v-if="errors.fechaInicio" class="error-message">{{ errors.fechaInicio }}</span>
            </div>

            <div class="form-group">
              <label for="fecha-fin" class="form-label">
                Fecha de Fin <span class="campo-requerido">*</span>
              </label>
              <input
                type="date"
                id="fecha-fin"
                v-model="formData.fechaFin"
                class="form-input"
                required
              />
              <span v-if="errors.fechaFin" class="error-message">{{ errors.fechaFin }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="beneficios" class="form-label">Beneficios del Patrocinio</label>
            <textarea
              id="beneficios"
              v-model="formData.beneficios"
              class="form-textarea"
              placeholder="Logo en camisetas, banners en el pabellón, menciones en redes sociales..."
              rows="4"
            ></textarea>
          </div>
        </div>

        <!-- Logo del Patrocinador -->
        <div class="seccion-formulario">
          <h3 class="seccion-titulo">Identidad Visual</h3>
          
          <div class="form-group">
            <label for="logo" class="form-label">
              Logo del Patrocinador <span class="campo-requerido">*</span>
            </label>
            <input
              type="file"
              id="logo"
              @change="handleFileUpload"
              class="form-input-file"
              accept="image/*"
              required
            />
            <small class="form-help">Formatos aceptados: PNG, JPG, SVG. Tamaño máximo: 2MB</small>
            <div v-if="formData.logoPreview" class="logo-preview">
              <img :src="formData.logoPreview" alt="Preview del logo" />
            </div>
            <span v-if="errors.logo" class="error-message">{{ errors.logo }}</span>
          </div>

          <div class="form-group">
            <label for="observaciones" class="form-label">Observaciones</label>
            <textarea
              id="observaciones"
              v-model="formData.observaciones"
              class="form-textarea"
              placeholder="Información adicional, requisitos especiales, condiciones del acuerdo..."
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
  direccion: '',
  nombreContacto: '',
  cargoContacto: '',
  emailContacto: '',
  telefonoContacto: '',
  tipoPatrocinio: '',
  importe: null,
  fechaInicio: '',
  fechaFin: '',
  beneficios: '',
  logo: null,
  logoPreview: null,
  observaciones: ''
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
  
  if (!formData.direccion.trim()) {
    newErrors.direccion = 'La dirección es obligatoria';
  }
  
  if (!formData.nombreContacto.trim()) {
    newErrors.nombreContacto = 'El nombre de contacto es obligatorio';
  }
  
  if (!formData.cargoContacto.trim()) {
    newErrors.cargoContacto = 'El cargo de contacto es obligatorio';
  }
  
  if (!formData.emailContacto.trim()) {
    newErrors.emailContacto = 'El email de contacto es obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailContacto)) {
    newErrors.emailContacto = 'Email de contacto inválido';
  }
  
  if (!formData.tipoPatrocinio) {
    newErrors.tipoPatrocinio = 'El tipo de patrocinio es obligatorio';
  }
  
  if (!formData.importe || formData.importe <= 0) {
    newErrors.importe = 'El importe debe ser mayor a 0';
  }
  
  if (!formData.fechaInicio) {
    newErrors.fechaInicio = 'La fecha de inicio es obligatoria';
  }
  
  if (!formData.fechaFin) {
    newErrors.fechaFin = 'La fecha de fin es obligatoria';
  }
  
  if (formData.fechaInicio && formData.fechaFin) {
    if (new Date(formData.fechaFin) <= new Date(formData.fechaInicio)) {
      newErrors.fechaFin = 'La fecha de fin debe ser posterior a la fecha de inicio';
    }
  }
  
  if (!formData.logo) {
    newErrors.logo = 'El logo del patrocinador es obligatorio';
  }
  
  Object.keys(errors).forEach(key => delete errors[key]);
  Object.assign(errors, newErrors);
  
  return Object.keys(newErrors).length === 0;
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Validar tamaño del archivo (2MB máximo)
    if (file.size > 2 * 1024 * 1024) {
      errors.logo = 'El archivo es demasiado grande. Máximo 2MB';
      return;
    }
    
    formData.logo = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      formData.logoPreview = e.target.result;
    };
    reader.readAsDataURL(file);
    
    // Limpiar error si existía
    if (errors.logo) {
      delete errors.logo;
    }
  }
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