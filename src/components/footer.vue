<template>
  <footer class="footer">
    <div class="footer__container">
      
      <div class="footer__section">
        <div class="footer__brand">
          <img src="@/assets/img/logo.png" alt="Logo Mamba Team" class="footer__logo">
          <h3 class="footer__title">Mamba Team</h3>
        </div>
        <p class="footer__description">
          Tu equipo de baloncesto de confianza. Pasión, dedicación y trabajo en equipo.
        </p>
      </div>

      <div class="footer__section">
        <h4 class="footer__heading">Enlaces rápidos</h4>
        <ul class="footer__list">
          <li class="footer__item">
            <router-link class="footer__link" to="/">Home</router-link>
          </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/equipo/nacA1Masc">Equipo</router-link>
          </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/jugador">Jugador</router-link>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#" @click.prevent>Contacto</a>
          </li>
        </ul>
      </div>

      <div class="footer__section">
        <h4 class="footer__heading">Síguenos</h4>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="Instagram">
            <span>📷</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="Facebook">
            <span>📘</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="Twitter">
            <span>🐦</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="WhatsApp">
            <span>💬</span>
          </a>
        </div>
      </div>

    </div>

    <div class="footer__bottom">
      <div class="footer__container">
        <p class="footer__copyright">
          &copy; 2015 Mamba Team. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No necesita lógica adicional
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>