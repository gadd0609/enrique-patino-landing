<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <!-- Fila de nombres (First Name / Last Name) -->
    <div class="form-group">
      <label class="form-label-top">Nombre completo (requerido)</label>
      <div class="form-group-row">
        <div>
          <input 
            type="text" 
            v-model="form.firstName" 
            required 
            placeholder="Nombre" 
            class="form-input-line"
          />
        </div>
        <div>
          <input 
            type="text" 
            v-model="form.lastName" 
            required 
            placeholder="Apellido" 
            class="form-input-line"
          />
        </div>
      </div>
    </div>

    <!-- Dropdown de Servicio -->
    <div class="form-group">
      <label class="form-label-top">Servicios solicitados</label>
      <div class="form-select-wrapper">
        <select v-model="form.service" class="form-select" required>
          <option value="" disabled selected>Selecciona un servicio</option>
          <option value="diseno-estructural">Diseño y Cálculo Estructural</option>
          <option value="supervision-obra">Supervisión y Dirección de Obra</option>
          <option value="consultoria">Consultoría y Dictámenes Técnicos</option>
          <option value="obra-civil">Construcción y Obra Civil</option>
        </select>
      </div>
    </div>

    <!-- Email -->
    <div class="form-group">
      <label class="form-label-top">Email (requerido)</label>
      <input 
        type="email" 
        v-model="form.email" 
        required 
        placeholder="ejemplo@correo.com" 
        class="form-input-line"
      />
      <span class="form-error-msg">Por favor ingresa un correo válido.</span>
    </div>

    <!-- Checkbox para boletín informativo -->
    <div class="form-checkbox-group" @click="toggleCheckbox">
      <input 
        type="checkbox" 
        v-model="form.newsletter" 
        class="form-checkbox"
        id="newsletter-chk"
        @click.stop
      />
      <label for="newsletter-chk" class="form-checkbox-label" @click.prevent>
        Registrarme para recibir noticias y actualizaciones de proyectos
      </label>
    </div>

    <!-- Descripción del proyecto -->
    <div class="form-group" style="margin-bottom: 3rem;">
      <label class="form-label-top">Descripción del proyecto</label>
      <textarea 
        v-model="form.description" 
        placeholder="Cuéntanos brevemente sobre tu proyecto (ubicación, tipo de estructura, plazos)..." 
        class="form-input-line"
        rows="3"
        style="resize: none;"
      ></textarea>
    </div>

    <!-- Botón de Envío -->
    <div>
      <button type="submit" class="btn-pill" :disabled="submitting">
        {{ submitting ? 'Enviando...' : 'Enviar solicitud' }}
      </button>
    </div>

    <!-- Notificación de Éxito -->
    <transition name="fade">
      <div v-if="submitted" class="success-message">
        <p>¡Gracias por contactarme, {{ form.firstName }}!</p>
        <p>Me pondré en contacto contigo a la brevedad para analizar tu proyecto de ingeniería.</p>
      </div>
    </transition>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        service: '',
        email: '',
        newsletter: false,
        description: ''
      },
      submitting: false,
      submitted: false
    }
  },
  methods: {
    toggleCheckbox() {
      this.form.newsletter = !this.form.newsletter
    },
    handleSubmit() {
      this.submitting = true
      // Simular petición API
      setTimeout(() => {
        this.submitting = false
        this.submitted = true
        // Limpiar formulario después de mostrar el mensaje
        setTimeout(() => {
          this.submitted = false
          this.form = {
            firstName: '',
            lastName: '',
            service: '',
            email: '',
            newsletter: false,
            description: ''
          }
        }, 5000)
      }, 1500)
    }
  }
}
</script>

<style scoped>
.contact-form {
  width: 100%;
}

.success-message {
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid var(--color-text);
  background-color: var(--color-text);
  color: var(--color-bg);
  border-radius: 4px;
}

.success-message p:first-child {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.success-message p:last-child {
  font-size: 0.95rem;
  opacity: 0.85;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
