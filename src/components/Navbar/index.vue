<template>
  <header class="header">
    <nav class="nav container">
      <!-- Links izquierdos -->
      <div class="nav-links">
        <router-link to="/about" class="nav-link">Acerca de</router-link>
        <router-link to="/works" class="nav-link">Trabajos</router-link>
        <router-link to="/contact" class="nav-link">Contacto</router-link>
      </div>

      <!-- Logo central -->
      <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.svg" alt="Ing. Alejandro Patiño" class="logo-img" />
        </router-link>
      </div>

      <!-- Acciones derechas -->
      <div class="nav-actions">
        <router-link to="/contact" class="btn-pill">
          Trabajemos
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  display: flex;
  align-items: center;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 24px;
  flex: 1;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  position: relative;
  padding: 4px 0;
}

.nav-link:hover,
.router-link-active {
  color: var(--color-text);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-text);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.router-link-active.nav-link::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-logo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 80px;
  width: auto;
  display: block;
}

.nav-actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 16px;
  }
  
  .logo-img {
    height: 65px;
  }
  
  .btn-pill {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}

@media (max-width: 580px) {
  .nav-links {
    display: none; /* Simplificado para móviles en landing minimalista */
  }
  .nav-logo {
    justify-content: flex-start;
  }
}
</style>
