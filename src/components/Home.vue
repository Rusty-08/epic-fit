<script setup>
    import { ref } from 'vue'

    let profiles = [
        '/img/image1.svg',
        '/img/image2.svg',
        '/img/image3.svg'
    ];
</script>

<template>
    <div class="tab-pane px-5 mx-5 fade show active" id="home-section" role="tabpanel" aria-labelledby="home" tabindex="0">
        <div class="introduction col-6 d-flex align-items-start justify-content-center flex-column">
            <h1 class="fw-bold mb-0">Unleash your Inner <span>Strength</span></h1>
            <p class="my-3">Achieve your fitness goals, and embrace a healthier you with our state-of-the-art facilities, expert trainers, and a supportive community that's with you every step of the way.</p>
            <button class="btn px-5 mt-3 py-2 fs-6">Join Now</button>
            <div class="current-members mt-5">
                <img v-for="(image, index) in profiles" class="rounded-circle" :key="index" :src="image" alt="" srcset="">
                <span class="fs-8">Johny Sins and 10,000 + other joined the community</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .introduction {
        height: calc(100vh - var(--header-height));
    }
    .introduction h1 {
        font-size: clamp(2rem, 5vw, 4rem);
    }
    .introduction h1>span {
        color: var(--tertiary-color);
    }
    .introduction button,
    .introduction button:active {
        background-color: var(--tertiary-color);
        color: var(--primary-color);
    }
    .introduction button:hover {
        opacity: 0.9;
    }
    .current-members img {
        width: 2rem;
    }
    .current-members img:nth-child(2) {
        transform: translateX(-0.5rem);
    }
    .current-members img:nth-child(3) {
        transform: translateX(-1rem) !important;
    }
    .current-members span {
        color: var(--gray-light-color);
    }
</style>