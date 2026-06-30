<template>
  <div class="privacy-page container">
    <section class="privacy-hero">
      <h1 class="title-large">Política de Privacidad</h1>
      <p class="subtitle" style="margin-top: 1rem;">Última actualización: {{ lastUpdated }}</p>
    </section>

    <div class="divider-line"></div>

    <section class="privacy-content">
      <div class="text-block">
        <h2 class="section-title">1. Recopilación de Información</h2>
        <p>
          En este sitio web, propiedad del Ing. Enrique Alejandro Patiño Hernández, únicamente recopilamos la información que usted nos proporciona de manera voluntaria a través de nuestro formulario de contacto (nombre, correo electrónico, servicio solicitado y descripción de su proyecto). No utilizamos cookies de rastreo de terceros.
        </p>
      </div>

      <div class="text-block">
        <h2 class="section-title">2. Uso de los Datos</h2>
        <p>
          Los datos proporcionados serán utilizados exclusivamente para:
        </p>
        <ul class="bullets">
          <li>Dar respuesta a sus solicitudes de cotización o consultas técnicas.</li>
          <li>Enviar información técnica o comercial relevante en caso de que haya aceptado suscribirse a nuestro boletín.</li>
        </ul>
      </div>

      <div class="text-block">
        <h2 class="section-title">3. Derechos del Usuario</h2>
        <p>
          Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar un correo electrónico a <strong>contacto@enriquepatino.com</strong> solicitando la baja de sus datos.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  computed: {
    lastUpdated() {
      return new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>

<style scoped>
.privacy-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.privacy-hero {
  padding: 80px 0 20px 0;
}

.privacy-content {
  max-width: 800px;
}

.text-block {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.bullets {
  list-style: none;
  margin-top: 1rem;
}

.bullets li {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 15px;
}

.bullets li::before {
  content: "—";
  position: absolute;
  left: 0;
}
</style>
