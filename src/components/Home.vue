<script setup>
    import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

    const currentMember = ref('')
    let alreadyAnimated = ref(false)

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

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                entry.target.classList.add('show')
                setTimeout(() => alreadyAnimated.value = true, 1000)
            }
        })
    })

    onMounted(() => {
        const animatedElements = document.querySelectorAll('.animated')
        animatedElements.forEach(el => observer.observe(el))
    });

</script>

<template>
    <div class="tab-pane px-5 mx-5 fade show active" id="home-section" role="tabpanel" aria-labelledby="home" tabindex="0">
        <div class="home-landing container px-0 d-flex">
            <div 
                class="introduction animated w-50 d-flex align-items-start justify-content-center flex-column"
                :class="{ 'animatedOnce show': alreadyAnimated }"
            >
                <h1 class="fw-bold mb-0">Unleash your Inner <span>Strength</span></h1>
                <p class="my-3 pe-5">Achieve your fitness goals, and embrace a healthier you with our state-of-the-art facilities, expert trainers, and a supportive community that's with you every step of the way.</p>
                <button class="btn px-5 mt-3 py-2 fs-6">Join Now</button>
                <div 
                    class="current-members mt-5"
                >
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
                <div 
                    class="home-images animated position-relative d-flex align-items-center justify-content-center"
                    :class="{ 'animatedOnce show': alreadyAnimated }"
                >
                    <img src="/img/Polygon1.svg" class="polygon position-absolute" alt="">
                    <img src="/img/dumbell1.svg" class="dumbell-one position-absolute" alt="">
                    <img src="/img/dumbell2.svg" class="dumbell-two position-absolute" alt="">
                    <img src="/img/person.png" class="person" alt="">
                </div>
            </div>               
        </div>
        <div class="pricing mt-5 py-5 container">
            <div class="pricing-header animated d-flex align-items-center justify-content-center flex-column">
                <span class="fs-7 mb-2">PRICING</span>
                <h3>Membership Category</h3>
            </div>
            <div class="pricing-category d-flex flex-lg-row flex-column gap-2">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .home-landing {
        height: calc(100vh - var(--header-height));
    }
    .introduction {
        animation: fadeRight 1s ease-in;
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
    }
    .home-images .person {
        width: 25rem;
        z-index: 10;
        animation: fadeLeft 1s ease-in;
    }
    .dumbell-one,
    .dumbell-two {
        width: 10rem;
    }
    .dumbell-one {
        bottom: 0;
        left: -7rem;
        animation: fadeUp 1s ease-in;
    }
    .dumbell-two {
        bottom: 5rem;
        right: -5rem;
        animation: fadeLeft 1s ease-in;
    }
    .pricing-header span {
        color: var(--tertiary-color);
        font-weight: 600;
        letter-spacing: 0.5px;
    }
    .pricing-header h3 {
        font-weight: 600;
        position: relative;
    }
    .pricing-header h3::before {
        content: '';
        position: absolute;
        width: 3rem;
        height: 3px;
        border-radius: 2px;
        opacity: 0.7;
        bottom: -1.5rem;
        left: calc(50% - 1.5rem);
        background-color: var(--tertiary-color);
    }
    .animated {
        opacity: 0;
        transition: all 1s ease;
    }
    .show {
        opacity: 1;
    }
    .animatedOnce,
    .animatedOnce img,
    .animatedOnce .current-members {
        animation: none !important;
    }

    /* ANIMATIONS */

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
            transform: translateX(-50%)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
</style>