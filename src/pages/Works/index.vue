<template>
  <div class="works-page container">
    <section class="works-hero">
      <h1 class="title-giant">Proyectos & Obras</h1>
      <p class="subtitle">Una selección de proyectos de cálculo estructural, supervisión de obra e infraestructura vial desarrollados bajo rigurosos estándares técnicos.</p>
    </section>

    <div class="divider-line"></div>

    <!-- Rejilla de Proyectos -->
    <div class="works-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image-wrapper">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-overlay">
            <span class="project-year">{{ project.year }}</span>
          </div>
        </div>
        <div class="project-info">
          <span class="project-category">{{ project.category }}</span>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Puente Viaducto Concres',
          category: 'Ingeniería de Puentes / Diseño Estructural',
          year: '2025',
          description: 'Diseño estructural y cálculo sísmico de viaducto de concreto reforzado de 120 metros de luz libre. Optimización del armado de acero en trabes de cajón pretensadas.',
          image: new URL('@/assets/projects/bridge.jpg', import.meta.url).href
        },
        {
          id: 2,
          title: 'Estructura Torre Cresta',
          category: 'Edificación en Altura / Diseño de Acero',
          year: '2024',
          description: 'Modelado y diseño de marco rígido de acero con contraventeos concéntricos para torre corporativa de 24 niveles. Análisis dinámico paso a paso.',
          image: new URL('@/assets/projects/building.jpg', import.meta.url).href
        },
        {
          id: 3,
          title: 'Paso a Desnivel Valle Alto',
          category: 'Infraestructura Urbana / Dirección de Obra',
          year: '2025',
          description: 'Supervisión técnica de cimentaciones profundas (pilotes a 18 metros) y muros de contención mecánicamente estabilizados para paso inferior vehicular.',
          image: new URL('@/assets/projects/infrastructure.jpg', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.works-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.works-hero {
  padding: 80px 0 40px 0;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 40px;
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-card:nth-child(even) {
  margin-top: 40px; /* Desfase asimétrico elegante */
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background-color: #f5f5f5;
  border: 1px solid var(--color-border);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-card:hover .project-image {
  transform: scale(1.03);
  filter: grayscale(0%); /* Suave aparición de color en hover */
}

.project-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--color-text);
  color: var(--color-bg);
  padding: 4px 10px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
}

.project-info {
  margin-top: 1.5rem;
}

.project-category {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .project-card:nth-child(even) {
    margin-top: 0;
  }
}
</style>
