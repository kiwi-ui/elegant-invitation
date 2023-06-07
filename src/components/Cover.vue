<template>
    <section class="text-white">
        <div class="container-cover rounded-5">
            <img src="../assets/img/profile.jpg" alt="pengantin">
            <div>
                <p>UNDANGAN PERNIKAHAN</p>
                <h2 class="fw-bold color-primary">James & Humairoh</h2>
                <p class="mb-0">Kepada yang terhormat</p>
                <p class="mb-1">Bapak/Ibu/Saudara</p>
                <h4 class="mt-2 fw-bold mb-3 color-primary">{{ guestName }}</h4>
                <button class="p-2 px-4 rounded-3 bg-color-primary">
                    <router-link to="/home" tag="button" class="text-white text-decoration-none ">Buka Undangan</router-link>
                </button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

export default defineComponent ({
    computed: {
        guestName() {
            const route = this.$route as RouteLocationNormalizedLoaded;
            return route.params.guestName;            
        }
    }
})
</script>

<style src="../assets/cover.css" scoped></style>
