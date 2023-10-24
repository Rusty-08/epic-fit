<script setup>
    import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

    const currentMember = ref('')
    let animated = false

    let profiles = [
        { image: '/img/image1.svg', name: 'Jonny Sins' },
        { image: '/img/image2.svg', name: 'Rendon Labrador' },
        { image: '/img/image3.svg', name: 'Mekus Insan' }
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

    const word = 'Strength'
    const displayedText = ref('')

    onMounted(() => {
        let i = 0
        if(!animated) {
            setTimeout(() => {
                const letterInterval = setInterval(() => {
                    if (i < word.length) {
                        displayedText.value += word[i]
                        i++
                    } else {
                        clearInterval(letterInterval)
                        setTimeout(() => animated = true, 1500)
                    }
                }, 100)
            }, 1000)
        }
    })

    onUnmounted(() => {
      clearInterval(letterInterval)
    });

</script>

<template>
    <div class="tab-pane px-5 mx-5 fade show active" id="home-section" role="tabpanel" aria-labelledby="home" tabindex="0">
        <div class="container px-0 d-flex">
            <div :class="{ 'animated': animated == true }" class="introduction w-50 d-flex align-items-start justify-content-center flex-column">
                <h1 
                    class="fw-bold mb-0"
                >
                    Unleash your Inner 
                    <span 
                        v-for="(char, index) in displayedText" 
                        :key="index"
                        :style="{ animationDelay: index * 0.1 + 's' }"
                        :class="{ 'animated': animated == true }"
                    >
                        {{ char }}
                    </span>
                </h1>
                <p class="my-3 pe-5">Achieve your fitness goals, and embrace a healthier you with our state-of-the-art facilities, expert trainers, and a supportive community that's with you every step of the way.</p>
                <button class="btn px-5 mt-3 py-2 fs-6">Join Now</button>
                <div class="current-members mt-5" :class="{ 'animated': animated == true }">
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
                    <img src="/img/Polygon1.svg" class="polygon position-absolute" :class="{ 'animated': animated == true }" alt="">
                    <img src="/img/dumbell1.svg" class="dumbell-one position-absolute" :class="{ 'animated': animated == true }" alt="">
                    <img src="/img/dumbell2.svg" class="dumbell-two position-absolute" :class="{ 'animated': animated == true }" alt="">
                    <img src="/img/person.png" class="person" :class="{ 'animated': animated == true }" alt="">
                </div>
            </div>               
        </div>
    </div>
</template>

<style scoped>
    .introduction {
        height: calc(100vh - var(--header-height));
        animation: fadeRight 1s ease-in;
    }
    .introduction h1 {
        font-size: clamp(2rem, 5vw, 4rem);
    }
    .introduction h1>span {
        color: var(--tertiary-color);
        animation: waveAnimation 2s ease-in-out;
    }
    .animated {
        animation: none !important;
    }

    .introduction button,
    .introduction button:active {
        background-color: var(--tertiary-color);
        color: var(--primary-color);
        font-weight: 500;
    }
    .introduction button:hover {
        opacity: 0.9;
    }
    .current-members {
        animation: fadeUp 1s ease-in;
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
        animation: rotateFade 1s ease-in;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1.2);
    }
    .home-images .person {
        width: 25rem;
        z-index: 10;
        animation: fadeLeft 1s ease-in;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1.2);
    }
    .dumbell-one,
    .dumbell-two {
        width: 10rem;
    }
    .dumbell-one {
        bottom: 0;
        left: -7rem;
        animation: fadeUp 1s ease-in;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1.2);
    }
    .dumbell-two {
        bottom: 5rem;
        right: -5rem;
        animation: fadeLeft 1s ease-in;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1.2);
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
    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(100%)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes fadeLeft {
        from {
            opacity: 0;
            transform: translateX(100%)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes fadeRight {
        from {
            opacity: 0;
            transform: translateX(-30%)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes waveAnimation {
        0% {
            transform: translateY(20px);
            opacity: 0;
        }
        50% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
</style>