<template>
    <i @click="togglePlayback" :class="isPlaying ? 'fa-solid fa-circle-pause' : 'fa-solid fa-circle-play'" class="fa-xl d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative" style="color: white;"></i>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      isPlaying: false,
      audio: new Audio(require('@/assets/music/ctmeoy.mp3')),
    };
  },
  methods: {
    togglePlayback() {
      if (this.isPlaying) {
        this.pauseMusic();
      } else {
        this.playMusic();
      }
    },
    playMusic() {
      this.audio.play();
      this.isPlaying = true;
    },
    pauseMusic() {
      this.audio.pause();
      this.isPlaying = false;
    },
  },
  mounted() {
    this.audio.addEventListener('canplaythrough', () => {
    this.playMusic();
    this.isPlaying = true;
  });

  // Start loading the audio file
  this.audio.load();
  }
});
</script>
