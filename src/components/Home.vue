<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const currentMember = ref('')

    let profiles = [
        { image: '/img/image1.svg', name: 'Jonny Sins' },
        { image: '/img/image2.svg', name: 'Rendon Labrador' },
        { image: '/img/image3.svg', name: 'Mekus Mekus' }
    ]

    let index = 0;
    const displayCurrentMembers = () => {
        currentMember.value = profiles[index].name
        index = (index + 1) % profiles.length
    }

    let timer

    onMounted(() => {
        displayCurrentMembers()
        timer = setInterval(displayCurrentMembers, 3000)
    })

    onBeforeUnmount(() => {
        clearInterval(timer)
    })

    const addScrollAnimation = className => {
        const element = document.querySelector(className)
        if (element) {
            const scrollPosition = window.scrollY
            const elementOffset = element.offsetTop
            if (scrollPosition > elementOffset) {
                element.classList.add('animated')
            }
        }
    }

    const handleScroll = () => {
        addScrollAnimation('.polygon');
    };

</script>

<template>
    <div class="tab-pane px-5 mx-5 fade show active" id="home-section" role="tabpanel" aria-labelledby="home" tabindex="0">
        <div class="container px-0 d-flex">
            <div class="introduction w-50 d-flex align-items-start justify-content-center flex-column">
                <h1 class="fw-bold mb-0">Unleash your Inner <span>Strength</span></h1>
                <p class="my-3 pe-5">Achieve your fitness goals, and embrace a healthier you with our state-of-the-art facilities, expert trainers, and a supportive community that's with you every step of the way.</p>
                <button class="btn px-5 mt-3 py-2 fs-6">Join Now</button>
                <div class="current-members mt-5">
                    <img 
                        v-for="(item, index) in profiles" 
                        class="rounded-circle" 
                        :key="index" 
                        :src="item.image"
                    >
                    <p class="fs-8 d-inline"><span>{{ currentMember }}</span> and 1,000 + other joined the community</p>
                </div>
            </div>
            <div class="d-flex w-50 align-items-center justify-content-center">
                <div class="home-images position-relative d-flex align-items-center justify-content-center">
                    <img src="/img/Polygon1.svg" class="polygon position-absolute" alt="">
                    <img src="/img/dumbell1.svg" class="dumbell-one position-absolute" alt="">
                    <img src="/img/dumbell2.svg" class="dumbell-two position-absolute" alt="">
                    <img src="/img/person.png" class="person" alt="">
                </div>
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
        width: 1.5rem;
        transition: var(--transition-175s);
    }
    .current-members img:nth-child(2) {
        transform: translateX(-0.5rem);
    }
    .current-members img:nth-child(3) {
        transform: translateX(-1rem);
    }
    .current-members p {
        color: var(--gray-light-color) !important;
    }
    .current-members p>span {
        color: var(--gray-color);
    }
    .home-images .polygon {
        width: 25rem;
        animation: rotateFade 2s ease;
    }
    .home-images .person {
        width: 25rem;
        z-index: 10;
    }
    .dumbell-one,
    .dumbell-two {
        width: 10rem;
    }
    .dumbell-one {
        bottom: 0;
        left: -7rem;
    }
    .dumbell-two {
        bottom: 5rem;
        right: -5rem;
    }
    @keyframes rotateFade {
        from {
            opacity: 0;
            width: 0rem;
            transform: rotate(120deg)
        }
        to {
            opacity: 1;
            width: 25rem;
            transform: rotate(0)
        }
    }
</style>