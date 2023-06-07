<template>
    <section class="position-relative">
        <NavBar />

        <div class="bg-home vh-100 bg-danger d-flex flex-column justify-content-center align-items-center">
            <h5 class="title color-primary fw-bold">The Wedding Of</h5>
            <p class="color-primary tracking-wide fw-bold py-2" style="letter-spacing: 0.5rem; font-size: 2rem;">James &
                Humairoh</p>
            <h4 class="text-white">30-02-2090</h4>
        </div>

        <div class="py-5 text-center bg-color-primary">
            <div class="container">
                <p class="fs-3 fw-semibold">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                <p class="fs-5">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi
                    pernikahan putra-putri kami:</p>
            </div>

            <div class="container d-flex flex-row justify-content-center gap-5 my-4">
                <div class="bride" style="box-sizing: border-box;">
                    <img src="../assets/img/bride.jpg" class="rounded-circle my-4" height="200vh" alt="bride">
                    <p class="fs-2 fw-bold mb-0">Humairoh</p>
                    <p>Putri dari Bapak Achmad dan Ibu Rum</p>
                    <button class="bg-dark px-2 py-1 text-white rounded-5">
                        <i class="fa-brands fa-instagram"></i>
                    </button>
                </div>
                <div class="groom" style="box-sizing: border-box;">
                    <img src="../assets/img/groom.jpg" class="rounded-circle my-4" height="200vh" alt="groom">
                    <p class="fs-2 fw-bold mb-0">James Washington</p>
                    <p>Putri dari Bapak Achmad dan Ibu Rum</p>
                    <button class="bg-dark px-2 py-1 text-white rounded-circle">
                        <i class="fa-brands fa-instagram"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="border-box bg-color-secondary d-flex justify-content-center h-100">
            <div class="schedule border-box bg-color-primary h-100 my-5">
                <div class="cover-schedule d-flex align-items-bottom text-white justify-content-end align-items-center text-center flex-column"
                    style="height: 60vh;">
                    <p class="m-0 color-secondary fs-1 fw-semibold">Waktu dan Tempat</p>
                    <p class="m-0 color-secondary fs-2 fw-semibold">Pernikahan</p>
                    <div class="mb-5 mt-2">
                        <p class="m-0">30 Februari 2001</p>
                        <p class="m-0">Hall Unira Dome</p>
                        <p class="m-0">Jalan Dipenogoro, Pamekasan, Jawa Timur</p>
                    </div>
                </div>

                <div class="countdown d-flex align-items-center mt-5 flex-column">
                    <div class="d-flex flex-column align-items-center">
                        <p class="fs-1 fw-semibold">Resepsi</p>

                        <div class="w-50 px-3" style="height: 30%;border-top :0.3rem solid #2b2b2b;">
                            <div class="d-flex flex-row align-items-center gap-3 pt-3">
                                <i class="fa-regular fa-calendar"></i>
                                <p class="m-0">Minggu, 31 Februari 2025</p>
                            </div>
                            <div class="d-flex flex-row align-items-center gap-3">
                                <i class="fa-regular fa-clock"></i>
                                <p class="m-0">10.00 - 13.00 WIB</p>
                            </div>
                            <div class="d-flex flex-row align-items-center gap-3">
                                <i class="fa-solid fa-map-location-dot"></i>
                                <p class="m-0">Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah Abang, Kota
                                    Jakarta Pusat, DKI Jakarta 10220</p>
                            </div>
                            <div class="d-flex justify-content-center m-3">
                                <button class="d-flex flex-row gap-3 align-items-center py-2 px-3 border-0 rounded-2"
                                    style="background-color: #2b2b2b;">
                                    <i class="fa-solid fa-location-dot text-white"></i>
                                    <p class="m-0 text-white">Lihat Peta</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <p class="fs-3 m-0 mt-5">Hitung Mundur</p>
                    <p class="fs-2 m-0 fw-bold">Resepsi</p>

                    <div class="d-flex flex-row justify-content-center gap-3 mb-5 text-white border-box w-50 mt-2"
                        v-if="!isOver">
                        <div class="days text-center" style="background-color: #2b2b2b; min-width: 25%;">
                            <p class="fs-1 m-0">{{ days }}</p>
                            <p>Hari</p>
                        </div>
                        <div class="hours text-center" style="background-color: #2b2b2b; min-width: 25%;">
                            <p class="fs-1 m-0">{{ hours }}</p>
                            <p>Jam</p>
                        </div>
                        <div class="minutes text-center" style="background-color: #2b2b2b; min-width: 25%;">
                            <p class="fs-1 m-0">{{ minutes }}</p>
                            <p>Menit</p>
                        </div>
                        <div class="seconds text-center" style="background-color: #2b2b2b; min-width: 25%;">
                            <p class="fs-1 m-0">{{ seconds }}</p>
                            <p>Menit</p>
                        </div>
                    </div>

                    <div v-else>
                        <p>Acara Sudah Selesai</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="gallery bg-color-primary">
            <div class="container py-5">
                <div class="text-center pb-5 w-50 position-relative" style="transform: translateX(-50%); right: -50%;">
                    <p class="fs-2 fw-bold m-0">Gallery</p>
                    <p class="fs-4 pb-2" style="border-bottom :0.3rem solid #2b2b2b;">Momen terbaik terekam abadi</p>
                </div>

                <div class="row">
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-1.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-2.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-3.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-4.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-5.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative">
                        <img class="w-100" src="../assets/img/g-6.webp" alt:number="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="wish bg-color-secondary vh-100 d-flex align-items-center border-box">
            <div class="container bg-color-primary rounded-4 shadow-lg d-flex flex-column justify-content-center">
                <div class="wish py-5 container">
                    <p class="fs-1 fw-semibold m-0 text-center">Harapan</p>
                    <p class="fs-5 text-center mb-3">Suatu kehormatan untuk kami menerima harapan baik dari saudara/saudari
                    </p>

                    <form class="form-wrapper row py-1">
                        <div class="col-md-6 col-12 justify-content-start mb-md-3">
                            <input class="w-100 p-2 rounded-1 border-0" name="name" type="text" placeholder="Nama" />
                        </div>
                        <div class="col-md-6 col-12">
                            <input class="w-100 p-2 rounded-1 border-0" name="no" type="number"
                                placeholder="Nomor (opsional)" />
                        </div>
                        <div class="col-12">
                            <textarea class="w-100 pb-5 px-3 rounded-1 border-0" name="no" type="number"
                                placeholder="Harapan untuk pengantin" />
                        </div>
                    </form>

                    <div class="pt-4 w-100 d-flex justify-content-end position-relative">
                        <button type="submit" class="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold"
                            style="background-color: #2b2b2b">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <div :class="isModalShown ? 'modal d-flex flex-warp align-items-center' : 'd-none'"
            :style="isModalShown ? 'background-color: rgba(0, 0, 0, 0.5)' : ''" id="staticBackdrop" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog w-100">
                <div class="modal-content bg-color-primary rounded-5">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button @click="showModal" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>

                    <div class="modal-body text-center p-4">
                        <img src="../assets/img/qr-1.webp" class="h-100" alt="qr code">
                        <div class="modal-desc my-2">
                            <p class="fs-3 fw-bold m-0">Juliet Basori</p>
                            <p>{{ bankId }} / Bank Mandiri</p>
                        </div>
                        <div class="d-flex justify-content-center gap-3">
                            <button @click="copyText"
                                class="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold"
                                style="background-color: #2b2b2b">Copy</button>
                            <a href="https://wa.me/082336420166?text=I%20confirm%20that%20I%20have%20sent%20the%20money%20transfer%20for%20the%20wedding%20gift."
                                target="_blank">
                                <button class="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold"
                                    style="background-color: #2b2b2b">Konfirmasi</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div :class="isBouncing ? 'bouncing-btn' : ''"
        class="rounded-full bg-color-primary position-fixed top-50 end-0 me-3 p-2 text-center rounded-circle text-white"
        @click="sendGift" data-bs-toggle="modal" data-bs-target="#giftModal">
        <i class="fa-solid fa-gift p-2 m-0"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import submitForm from './submitForm.ts;'

export default defineComponent({
    data() {
        return {
            initial: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            countdownInterval: 0,
            isOver: false,
            isBouncing: true,
            isModalShown: false,
            bankId: "8786393797239",
            formData: {
                name: '',
                no: '',
                message: '',
            },
        }
    },
    mounted() {
        const targetDate: any = new Date('2029-05-01T00:00:00');

        this.countdownInterval = setInterval(() => {
            const currentDate: any = new Date();
            const timeDifference = targetDate - currentDate;

            this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            if (timeDifference < 0) {
                return this.isOver = true;
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.countdownInterval);
    },
    components: {
        NavBar
    },
    methods: {
        sendGift() {
            this.isBouncing = !this.isBouncing
            this.isModalShown = !this.isModalShown
            setTimeout(() => {
                this.isBouncing = true
            }, 4000);
        },
        showModal() {
            return this.isModalShown = !this.isModalShown
        },
        copyText() {
            navigator.clipboard.writeText(this.bankId)
        },
        handleSubmit(event: any) {
            event.preventDefault();
            submitForm(this.formData);
        },
    }
})
</script>

<style src="../assets/home.css"  scoped></style>
