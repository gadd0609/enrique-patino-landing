<template>
  <div class="contact-page container">
    <section class="contact-hero">
      <h1 class="title-giant">Conversemos</h1>
    </section>

    <div class="divider-line" style="margin-top: 1rem;"></div>

    <div class="contact-grid">
      <!-- Columna Izquierda: Información de contacto -->
      <div class="info-column">
        <div class="info-block">
          <p class="info-label">Oficina Técnica</p>
          <p class="info-text">Colima, Colima, México</p>
          <p class="info-text-muted">Área Metropolitana y proyectos remotos</p>
        </div>

        <div class="info-block">
          <p class="info-label">Horario de Oficina</p>
          <p class="info-text">Lunes a Viernes</p>
          <p class="info-text">9:00 AM - 6:00 PM</p>
        </div>

        <div class="info-block">
          <p class="info-label">Email Directo</p>
          <p class="info-text">
            <a href="mailto:contacto@enriquepatino.com" class="link-line">contacto@enriquepatino.com</a>
          </p>
        </div>

        <div class="info-block">
          <p class="info-label">Línea Telefónica</p>
          <p class="info-text">
            <a href="tel:+528112345678" class="link-line">+52 31 2112 1585</a>
          </p>
        </div>
      </div>

      <!-- Columna Derecha: Formulario -->
      <div class="form-column">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm/index.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.contact-hero {
  padding: 80px 0 20px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: var(--grid-gap);
  margin-top: 2rem;
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-block {
  border-top: 1px solid var(--color-border);
  padding-top: 20px;
}

.info-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  letter-spacing: 0.05em;
}

.info-text {
  font-size: 1.1rem;
  color: var(--color-text);
  font-weight: 500;
}

.info-text-muted {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-top: 4px;
}

.link-line {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.link-line:hover {
  opacity: 0.7;
}

.form-column {
  padding-left: 20px;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .form-column {
    padding-left: 0;
  }
}
</style>
