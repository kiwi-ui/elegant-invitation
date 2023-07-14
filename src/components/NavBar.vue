<template>
  <div class="navbar-transition position-absolute align-items-center translate-middle-y top-50" :style="isNavShown ? 'width: fit-content; transition: 4s' : 'width: 20px; transition: 4s'">
    <div v-if="isNavShown" class="flex-column align-items-center px-3 py-5 px-md-3 gap-4 d-flex">  
      <!-- <a @click="scrollToDiv('top')">
        <i class="fas fa-heart" href="#top" style="color: white"></i>
      </a> -->
      <a @click="scrollToDiv('top')">
        <i class="fa-solid fa-house-chimney" style="color: white"></i>
      </a>
      <a @click="scrollToDiv('date')">
        <i class="fa-solid fa-calendar-check" style="color: white"></i>
      </a>
      <a @click="scrollToDiv('gallery')">
        <i class="fa-solid fa-camera fa-bounce" style="color: white"></i>
      </a>
      <a @click="scrollToDiv('wish')">
        <i class="fa-solid fa-envelope-open-text" style="color: white"></i>
      </a>
    </div>
    <div class="position-absolute translate-middle-x translate-middle-y top-50 text-white end-0" @click="toggleNavbar">
      <i class="fa-solid fa-angle-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      title: 'Navbar Component',
      isNavShown: true,
    };
  },
  methods: {
    toggleNavbar() {
      console.log('halo');
      this.isNavShown = !this.isNavShown;
    },
    scrollToDiv(div: any) {
      const selectedDiv = document.getElementById(div);
      selectedDiv?.scrollIntoView({behavior: 'smooth'});
    }
  },
});
</script>

<style src="../assets/navbar.css"></style>
