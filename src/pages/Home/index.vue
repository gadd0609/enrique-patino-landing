<template>
  <div class="home-page container">
    <section class="hero-section">
      <h1 class="title-giant">
        Precisión estructural.<br />
        Soluciones que perduran.
      </h1>
      <p class="subtitle" style="margin-bottom: 2.5rem;">
        Servicios de consultoría, diseño estructural e infraestructura por el Ing. Enrique Alejandro Patiño Hernández. Creamos cimientos firmes para el futuro de la arquitectura y la obra civil.
      </p>
      <div class="hero-actions">
        <router-link to="/contact" class="btn-pill" style="margin-right: 15px;">
          Iniciar un proyecto
        </router-link>
        <router-link to="/works" class="btn-pill-outline">
          Ver portafolio
        </router-link>
      </div>
    </section>

    <div class="divider-line"></div>

    <section class="services-section">
      <h2 class="title-large" style="margin-bottom: 3rem;">Especialidades</h2>
      <div class="services-grid">
        <div class="service-card">
          <span class="service-number">01</span>
          <h3 class="service-title">Cálculo Estructural</h3>
          <p class="service-desc">
            Análisis sísmico y diseño de estructuras de concreto, acero y mampostería. Garantizamos la seguridad y optimización de materiales bajo las normativas nacionales e internacionales.
          </p>
        </div>
        <div class="service-card">
          <span class="service-number">02</span>
          <h3 class="service-title">Dirección de Obra</h3>
          <p class="service-desc">
            Supervisión técnica en sitio para verificar que el proceso constructivo se apegue estrictamente a las especificaciones estructurales, de calidad y de seguridad.
          </p>
        </div>
        <div class="service-card">
          <span class="service-number">03</span>
          <h3 class="service-title">Dictámenes Técnicos</h3>
          <p class="service-desc">
            Evaluación de la seguridad estructural de edificaciones existentes. Diagnósticos de patología del concreto y propuestas de reforzamiento estructural.
          </p>
        </div>
      </div>
    </section>

    <div class="divider-line"></div>

    <section class="cta-section">
      <div class="cta-content">
        <h2 class="title-large">¿Listo para construir?</h2>
        <p class="subtitle" style="margin-top: 1rem; margin-bottom: 2rem;">
          Colaboremos en tu próximo proyecto de infraestructura o edificación. Deja tus datos y platicamos sobre las soluciones técnicas idóneas para tu obra.
        </p>
        <router-link to="/contact" class="btn-pill">
          Contactar ahora
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.hero-section {
  padding: 80px 0 40px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  border-top: 1px solid var(--color-border);
  padding-top: 24px;
}

.service-number {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.service-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.cta-section {
  padding: 60px 0;
}

.cta-content {
  max-width: 800px;
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
