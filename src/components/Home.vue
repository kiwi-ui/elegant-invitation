<template>
    <section class="position-relative bg-color-secondary">
        <div class="container-fluid position-relative" style="z-index: 100;">
            <div class="position-fixed top-50 start-0 translate-middle-y">
                <NavBar />
            </div>
        </div>

        <div class="bg-toggle position-fixed p-2 text-center rounded-circle text-white end-0 me-3 mt-3">
            <Musictoggle />
        </div>

        <div class="position-fixed w-100 vh-100 d-flex justify-content-center align-items-center" style="background-color: rgb(43, 43, 43, 0.8); z-index: 200;" v-if="isShowingPhoto">
            <button class="trasnlate-middle-y fs-4 trasnlate-middle-x end-0 top-0 position-absolute me-3 mt-3 rounded-circle px-3 pb-1 bg-toggle text-white border-0 fw-bold" @click="toggleShowPhoto" style="z-index: 100;">x</button>
            <img class="position-relative w-50" :src="require(`../assets/img/${imgUrl}.webp`)" alt="prewedding photos">
        </div>
        
        <div id="top" class="bg-home vh-100 d-flex flex-column justify-content-center align-items-center">
            <h3 class="title color-primary fw-bold m-0">The Wedding Of</h3>
            <p class="color-primary fs-1 fw-bold py-2 px-3 m-0" style="letter-spacing: 0.2rem;">James &
                Humairoh</p>
            <h4 class="text-white m-0">30-02-2090</h4>
        </div>

        <div class="py-5 text-center bg-color-primary" id="main">
            <div class="container">
                <div class="">
                    <p class="fs-1 fw-semibold">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <p class="fs-4">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi
                        pernikahan putra-putri kami:</p>
                </div>

                <div class="d-flex flex-row justify-content-around my-4 gap-2">
                    <div class="bride p-xl-4" style="box-sizing: border-box;">
                        <img src="../assets/img/bride.jpg" class="rounded-circle my-4" width="70%" alt="bride">
                        <p class="fs-2 fw-bold mb-0">Humairoh</p>
                        <p class="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button class="bg-dark text-white pt-3 pb-3 px-3 rounded-circle">
                            <i class="fa-brands fa-instagram fa-xl"></i>
                        </button>
                    </div>
                    <div class="groom p-xl-4" style="box-sizing: border-box;">
                        <img src="../assets/img/groom.jpg" class="rounded-circle my-4" width="70%" alt="groom">
                        <p class="fs-2 fw-bold mb-0">James Washington</p>
                        <p class="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button class="bg-dark text-white pt-3 pb-3 px-3 rounded-circle">
                            <i class="fa-brands fa-instagram fa-xl position-relative"></i>
                        </button>
                    </div>
                </div>

                <div>
                    <p class="m-0 fs-4">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div>
            </div>
        </div>

        <div class="border-box bg-color-secondary d-flex justify-content-center h-100 my-4">
            <div id="date" class="schedule border-box bg-color-primary h-100 my-5">
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
                    <div class="d-flex flex-column align-items-center container">
                        <p class="fs-1 fw-semibold">Resepsi</p>

                        <div class="mx-4 mb-4" style="border-top :0.3rem solid #2b2b2b;">
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
                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="d-flex flex-row gap-3 align-items-center py-2 px-3 border-0 rounded-2"
                                style="background-color: #2b2b2b;">
                                <i class="fa-solid fa-location-dot text-white"></i>
                                <p class="m-0 text-white">Lihat Peta</p>
                            </button>
                        </div>
                    </div>

                    <p class="fs-1 m-0 mt-5">Hitung Mundur</p>
                    <p class="fs-2 mb-2 fw-bold">Resepsi</p>

                    <div class="d-flex flex-row mb-5 text-white border-box mt-2 w-100 justify-content-evenly container" v-if="!isOver">
                        <div class="days text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style="background-color: #2b2b2b; width: 20%;">
                            <p class="fs-3 m-0">{{ days }}</p>
                            <p class="fs-5 m-0">Hari</p>
                        </div>
                        <div class="hours text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style="background-color: #2b2b2b; width: 20%;">
                            <p class="fs-3 m-0">{{ hours }}</p>
                            <p class="fs-5 m-0">Jam</p>
                        </div>
                        <div class="minutes text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style="background-color: #2b2b2b; width: 20%;">
                            <p class="fs-3 m-0">{{ minutes }}</p>
                            <p class="fs-5 m-0">Menit</p>
                        </div>
                        <div class="seconds text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style="background-color: #2b2b2b; width: 20%;">
                            <p class="fs-3 m-0">{{ seconds }}</p>
                            <p class="fs-5 m-0">Menit</p>
                        </div>
                    </div>

                    <div v-else>
                        <p>Acara Sudah Selesai</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="gallery bg-color-primary my-4">
            <div id="gallery" class="container py-5">
                <div class="text-center w-75 position-relative" style="transform: translateX(-50%); right: -50%;">
                    <p class="fs-2 fw-bold m-0">Gallery</p>
                    <p class="fs-4 pb-3" style="border-bottom :0.3rem solid #2b2b2b;">Momen terbaik terekam abadi</p>
                </div>  

                <div class="row">
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-1" @click="showPhoto('g-1')">
                        <img class="w-100" src="../assets/img/g-1.webp" alt:number=""  />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-2" @click="showPhoto('g-2')">
                        <img class="w-100" src="../assets/img/g-2.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-3" @click="showPhoto('g-3')">
                        <img class="w-100" src="../assets/img/g-3.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-4" @click="showPhoto('g-4')">
                        <img class="w-100" src="../assets/img/g-4.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-5" @click="showPhoto('g-5')">
                        <img class="w-100" src="../assets/img/g-5.webp" alt:number="" />
                    </div>
                    <div class="gallery-photos col-6 mb-1 p-1 position-relative" title="g-6" @click="showPhoto('g-6')">
                        <img class="w-100" src="../assets/img/g-6.webp" alt:number="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="wish bg-color-secondary vh-100 d-flex align-items-center border-box">
            <div class="container bg-color-primary rounded-4 shadow-lg d-flex flex-column justify-content-center">
                <div id="wish" class="wish py-5 container">
                    <p class="fs-1 fw-semibold m-0 text-center">Harapan</p>
                    <p class="fs-5 text-center mb-3">Suatu kehormatan untuk kami menerima harapan baik dari saudara/saudari</p>

                    <form name="submit-to-google-sheet" id="form" class="form-wrapper row py-1" method="post">
                        <div class="col-md-6 col-12 my-md-3">
                            <input class="w-100 p-3 rounded-1 border-0 name" name="nama" type="text" placeholder="Nama" v-model="formData.name"
                                required />
                            <p class="m-0 text-danger fw-bold ps-1" v-if="isInputEmpty">Harap isikan nama anda</p>
                        </div>
                        <div class="col-md-6 col-12 my-2 my-md-3">
                            <input class="w-100 p-3 rounded-1 border-0" name="no" type="number"
                                placeholder="Nomor ponsel (opsional)" />
                        </div>
                        <div class="col-12">
                            <textarea class="w-100 pb-5 pt-2 px-3 rounded-1 border-0" name="harapan" type="text"
                                placeholder="Harapan untuk pengantin" v-model="formData.harapan" required />
                                <p class="m-0 text-danger fw-bold ps-1" v-if="isInputEmpty">Harap isikan nama harapan anda untuk kepengantin</p>
                        </div>
                    </form>

                    <div class="pt-4 w-100 d-flex justify-content-end position-relative">
                        <button @click="handleSubmit" type="submit"
                            class="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold"
                            :class="isLoading ? 'opacity-50' : ''" style="background-color: #2b2b2b" :disabled="isLoading">
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                                v-if="isLoading"></span>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div :class="isModalShown ? 'modal d-flex flex-warp align-items-center' : 'd-none'"
            :style="isModalShown ? 'background-color: rgba(0, 0, 0, 0.5)' : ''" id="staticBackdrop"
            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
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

    <div :class="isBouncing ? 'bouncing-btn' : ''" class="rounded-full bg-toggle position-fixed bottom-0 end-0 mb-3 me-3 p-2 text-center rounded-circle text-white" @click="sendGift" data-bs-toggle="modal" data-bs-target="#giftModal">
        <i class="fa-solid fa-gift p-2 m-0"></i>
    </div>

    <footer class="border-box bg-footer h-100 position-relative" style="height: 75vh;">
        <div class="container text-white d-flex flex-column text-center gap-3 py-5 h-100 position-relative">
            <p class="fs-1 m-0 fw-bold color-primary">Terimakasih Atas Perhatiannya</p>
            <p class="fs-2 m-0">Keluarga Besar</p>
            <p class="m-0">Bapak Adam & Ibu Hawa</p>
            <p class="m-0">Bapak Idim & Ibu Hiwi</p>
            
            <div class="border-box mt-3">
                <p class="fw-bold">Made with Love</p>

                <div class="d-flex flex-row border-box justify-content-center align-content-center gap-1" style="height: 20px">
                    <img src="../assets/Digition.png" class="rounded-circle d-inline" />
                    <p class="fw-bold">Digition</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './NavBar.vue';
import Musictoggle from './MusicToggle.vue';

export default defineComponent({
    components: {
        NavBar,
        Musictoggle
    },
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
            isInputEmpty: false,
            bankId: "8786393797239",
            formData: {
                name: '',
                harapan: '',
            },
            isLoading: false,
            isShowingPhoto: false, 
            srcPhoto: '',
            imgUrl: ''
        };
    },
    mounted() {
        this.isInputEmpty = false
        const targetDate: any = new Date('2029-05-01T00:00:00');

        this.countdownInterval = setInterval(() => {
            const currentDate: any = new Date();
            const timeDifference: any = targetDate - currentDate;

            this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            if (timeDifference < 0) {
                return (this.isOver = true);
            }
        }, 1000)
    },
    beforeUnmount() {
        clearInterval(this.countdownInterval);
    },
    methods: {
        sendGift() {
            this.isBouncing = !this.isBouncing;
            this.isModalShown = !this.isModalShown;
            setTimeout(() => {
                this.isBouncing = true;
            }, 4000);
        },
        showModal() {
            this.isModalShown = !this.isModalShown;
        },
        copyText() {
            navigator.clipboard.writeText(this.bankId);
        },
        handleSubmit(event: any): any {
            event.preventDefault();
            const url: string = 'https://script.google.com/macros/s/AKfycbzT6RTTlV9DrV1jLDUtStY0pqFGW6_V7fbgeqOcBc8P2ptQtASQTyOtsPctHDTv2GiYbA/exec';
            const form: any = document.getElementById('form');

            if (!this.formData.name || !this.formData.harapan) {
                this.isInputEmpty = !this.isInputEmpty;
                console.log(this.isInputEmpty)
                alert('Harap mengisi nama dan harapan');
                return;
            }

            this.isLoading = true;
            fetch(url, { method: 'POST', body: new FormData(form) })
            .then(() => {
                form.reset();
                alert("Terkirim")
            })
            .catch(() => alert('Terjadi Kesalahan!'));
            this.isLoading = false;
            console.log(this.isLoading)
        },
        showPhoto (photo: any) {
            this.imgUrl = photo
            this.isShowingPhoto = true;
            console.log(this.imgUrl)
        },
        toggleShowPhoto() {
            this.imgUrl = ""
            this.isShowingPhoto = false
        }
    }
})
</script>

<style src="../assets/home.css" scoped></style>
