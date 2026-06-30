<template>
  <footer class="footer">
    <div class="container">
      <div class="divider-line"></div>
      
      <!-- Contacto principal en letras gigantes -->
      <div class="footer-hero-grid">
        <div class="hero-item">
          <a href="mailto:contacto@enriquepatino.com" class="giant-contact-link">
            contacto@enriquepatino.com
          </a>
        </div>
        <div class="hero-item text-right">
          <a href="tel:+528112345678" class="giant-contact-link">
            +52 31 2112 1585
          </a>
        </div>
      </div>
      
      <div class="divider-line" style="margin: 2rem 0;"></div>

      <!-- Detalles informativos -->
      <div class="footer-details-grid">
        <div class="details-col">
          <p class="details-title">Oficina Principal</p>
          <p class="details-text">Colima, Colima</p>
          <p class="details-text">México</p>
        </div>
        
        <div class="details-col">
          <p class="details-title">Horarios de Atención</p>
          <p class="details-text">Lunes a Viernes</p>
          <p class="details-text">9:00 AM - 6:00 PM</p>
        </div>
        
        <div class="details-col text-right">
          <p class="details-title">Conversemos</p>
          <router-link to="/contact" class="work-link">Trabajemos juntos</router-link>
        </div>
      </div>

      <div class="footer-meta-grid">
        <div class="meta-left">
          <p class="copyright">© {{ currentYear }} Ing. Enrique Alejandro Patiño Hernández | Fotos ilustrativas</p>
        </div>
        <div class="meta-right">
          <div class="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener" class="social-link">Behance</a>
          </div>
          <router-link to="/privacy" class="privacy-link">Política de Privacidad</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  padding-bottom: 60px;
  background-color: var(--color-bg);
}

.footer-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 1rem;
}

.giant-contact-link {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3.2vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-text);
  transition: var(--transition-smooth);
}

.giant-contact-link:hover {
  opacity: 0.6;
}

.text-right {
  text-align: right;
}

.footer-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 4rem;
}

.details-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.details-text {
  font-size: 0.95rem;
  color: var(--color-text);
}

.work-link {
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-meta-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.meta-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link, .privacy-link {
  color: var(--color-text-muted);
}

.social-link:hover, .privacy-link:hover {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .footer-hero-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .text-right {
    text-align: left;
  }
  .footer-details-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer-meta-grid {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .meta-right {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}
</style>
