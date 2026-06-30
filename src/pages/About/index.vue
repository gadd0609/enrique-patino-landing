<template>
  <div class="about-page container">
    <section class="about-hero">
      <h1 class="title-giant">Ing. Enrique Alejandro Patiño H.</h1>
      <p class="subtitle">Ingeniero Civil con especialización en análisis estructural e infraestructura, enfocado en el desarrollo de soluciones óptimas, seguras e integradas con la visión arquitectónica moderna.</p>
    </section>

    <div class="divider-line"></div>

    <section class="about-bio grid grid-cols-2">
      <div>
        <h2 class="title-medium" style="margin-bottom: 2rem;">Trayectoria y Filosofía</h2>
        <p class="bio-text">
          Como ingeniero civil, entiendo que cada estructura es la materialización de un sueño y el soporte de la vida cotidiana. Mi enfoque combina el rigor del cálculo analítico con las herramientas de modelado de última generación, logrando estructuras eficientes que respetan el diseño arquitectónico sin comprometer la seguridad.
        </p>
        <p class="bio-text" style="margin-top: 1.5rem;">
          Creo firmemente en la ingeniería colaborativa. Trabajar de la mano de arquitectos, desarrolladores y constructores me permite prever retos en etapas tempranas, reduciendo costos de ejecución y optimizando los tiempos de obra.
        </p>
      </div>
      <div class="values-block">
        <h2 class="title-medium" style="margin-bottom: 2rem;">Principios Rectores</h2>
        
        <div class="value-item">
          <h3 class="value-title">Rigor Técnico</h3>
          <p class="value-desc">Cada decimal cuenta. Diseñamos con un estricto apego a reglamentos vigentes y simulación computacional avanzada.</p>
        </div>
        
        <div class="value-item">
          <h3 class="value-title">Sustentabilidad y Costo</h3>
          <p class="value-desc">Optimizamos la cantidad de acero y concreto requerida, reduciendo la huella de carbono y el costo financiero de la estructura.</p>
        </div>
        
        <div class="value-item">
          <h3 class="value-title">Comunicación Clara</h3>
          <p class="value-desc">Entregamos planos ejecutivos detallados e inteligibles, facilitando el trabajo de los oficiales en el sitio de construcción.</p>
        </div>
      </div>
    </section>

    <div class="divider-line"></div>

    <section class="experience-section">
      <h2 class="title-large" style="margin-bottom: 3rem;">Formación & Habilidades</h2>
      <div class="skills-grid">
        <div class="skills-col">
          <h3 class="skills-title">Educación y Credenciales</h3>
          <ul class="skills-list">
            <li><strong>Ingeniería Civil</strong> | Título y Cédula Profesional</li>
            <li><strong>Modelado BIM Estructural</strong> | Certificación Oficial</li>
            <li><strong>Análisis Sísmico Avanzado</strong> | Diplomado Especializado</li>
          </ul>
        </div>
        
        <div class="skills-col">
          <h3 class="skills-title">Herramientas de Diseño</h3>
          <ul class="skills-list">
            <li>ETABS & SAP2000 (Análisis Estructural)</li>
            <li>Revit Structure (Modelado BIM)</li>
            <li>AutoCAD (Detallado Ejecutivo)</li>
            <li>Software de cálculo geotécnico</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.about-hero {
  padding: 80px 0 40px 0;
}

.bio-text {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.values-block {
  padding-left: 40px;
  border-left: 1px solid var(--color-border);
}

.value-item {
  margin-bottom: 2rem;
}

.value-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.value-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.skills-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 10px;
}

.skills-list {
  list-style: none;
}

.skills-list li {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 15px;
}

.skills-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .values-block {
    padding-left: 0;
    border-left: none;
    margin-top: 40px;
  }
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
