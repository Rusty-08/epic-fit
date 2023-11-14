<script setup>
    import { useTitle } from '@vueuse/core'
    import { ref, onMounted, computed, onUnmounted, onBeforeUnmount } from 'vue'
    import { faArrowRight, faArrowsRotate, faChevronLeft, faChevronRight, faRotate } from '@fortawesome/free-solid-svg-icons'

    useTitle('Community | EPICFIT')

    const activeCaption = ref('')
    const activeDesc = ref('')
    const activeIndex = ref(-1)
    const scrollAmount = ref(0)

    let autoSlide
    
    const gallery = ref([
        { 
            image: '/img/community-image1.svg',
            caption: 'Inclusivity',
            desc: 'We welcome everyone with open arms, regardless of their fitness level, age, or background. We believe fitness is for everyone.'
        },
        { 
            image: '/img/community-image2.svg',
            caption: 'Expertise',
            desc: 'Our team of certified trainers and experienced instructors are dedicated to providing the highest quality guidance and support on your fitness journey.'
        },
        { 
            image: '/img/community-image3.svg',
            caption: 'Wellness',
            desc: "We're committed to holistic health and wellness, not just physical fitness. We promote a balanced approach to living your best life."
        },
        { 
            image: '/img/community-image3.svg',
            caption: 'Community',
            desc: 'Cultivating a supportive environment where fitness enthusiasts connect and thrive together, our vibrant community page fosters shared goals and celebrates collective achievements, promoting wellness as a unified journey.'
        },
    ])

    const setAsActiveCategory = () => {
        activeIndex.value++

        if (activeIndex.value > 0) {
            activeIndex.value = 0
            const firstItem = gallery.value.shift()
            gallery.value = [...gallery.value, firstItem]
        }

        activeCaption.value = gallery.value[activeIndex.value].caption
        activeDesc.value = gallery.value[activeIndex.value].desc
    }

    const slide = () => {
        clearInterval(autoSlide)
        autoSlide = setInterval(() => {
            setAsActiveCategory()
        }, 10000)
    }

    const selectOnClick = () => {
        setAsActiveCategory()
        clearInterval(autoSlide)
        setTimeout(slide, 5000)
    }

    const selectOnImageClick = index => {
        if(index > 0) {
            setAsActiveCategory()
        }
        clearInterval(autoSlide)
        setTimeout(slide, 5000)
    }

    onMounted(() => {
        setTimeout(slide, 5000)
    });
    
</script>

<template>
    <section id="community-section">
        <div class="community-landing pt-4 d-flex align-items-center justify-content-center">
            <div :class="{ 'initial': activeCaption == '' }" class="h-25 pt-2 rounded-2 d-flex align-items-start justify-content-start flex-column w-50">
                <transition name="h-fade">
                    <h4 class="caption mb-3 fw-semibold" :key="activeCaption">{{ activeCaption || 'Our Mission and Values' }}</h4>
                </transition>
                <transition name="p-fade">
                    <p class="desc mb-3 fs-7" :key="activeDesc">{{ activeDesc || 'At EPICFIT, our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Our core values drive everything we do.' }}</p>
                </transition>
                <transition name="l-fade">
                    <a  v-show="activeCaption !== ''"
                        href=""
                        class="fs-7 fw-light learn-more" 
                        :key="activeDesc" 
                        @click.prevent=""
                    >
                        Learn more
                        <icon class="fs-10 mx-1" :icon="faChevronRight" />
                    </a>
                </transition>
            </div>
            <div class="gallery-wrapper position-relative w-50 d-flex align-items-center justify-content-center">
                <button 
                    class="next-button btn position-absolute"
                    @click.prevent="selectOnClick"
                >
                    <icon v-if="activeIndex !== 3" :icon="faChevronLeft" class="fs-6" />
                    <icon v-else :icon="faArrowsRotate" class="fs-6" />
                </button>
                <div class="image-slider d-flex gap-2 position-absolute" >
                    <a  
                        v-for="(item, index) in gallery"
                        href=""
                        class="image-catergory shadow-sm position-relative"
                        :class="{ 'active': activeCaption == item.caption}"
                        :key="index"
                        @click.prevent="selectOnImageClick(index)"
                    >
                        <img :key="item.caption" :src="item.image" class="" alt="" draggable="false">
                        <div class="image-caption d-flex align-items-center justify-content-center w-100 pt-5 pb-3 px-0 position-absolute">
                            <p :key="item.caption" class="mb-0 fs-9 text-center">{{ item.caption.toUpperCase() }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #community-section {
        overflow: hidden;
    }
    .community-landing {
        height: 100dvh !important;
    }
    .initial .caption {
        animation-delay: 0.5s;
        animation: fadeUp 0.7s ease;
    }
    .initial .desc {
        animation: fadeUp 0.8s ease;
    }
    .initial .learn-more {
        animation: fadeUp 1s ease;
    }
    .learn-more,
    .learn-more svg {
        color: var(--tertiary-color);
        transition: var(--transition-175s);
    }
    .learn-more:hover {
        opacity: 0.8;
    }
    .learn-more:hover svg {
        margin-left: 0.5rem !important;
    }
    .h-fade-enter-active {
        animation: fadeUp 0.7s ease;
    }
    .p-fade-enter-active {
        animation: fadeUp 0.8s ease;
    }
    .l-fade-enter-active {
        animation: fadeUp 1s ease;
    }
    .gallery-wrapper {
        animation: fadeLeft 1s ease;
    }
    .next-button {
        left: 3rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: rgba(127, 125, 142, 0.1);
        color: var(--tertiary-color);
        transition: var(--transition-175s);
    }
    .next-button:hover,
    .next-button:active {
        background-color: rgba(127, 125, 142, 0.2) !important;
        color: var(--tertiary-color) !important;
        border-color: transparent !important;
    }
    .image-slider {
        left: 8rem;
    }
    .image-slider {
        overflow: hidden;
    }
    .image-catergory {
        height: 70vh;
        width: 25vw;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-decoration: none !important;
        overflow: hidden !important;
        transition: var(--transition-375s);
    }
    .image-catergory img {
        height: 100%;
        overflow: hidden;
        transition: var(--transition-275s);
    }
    .image-catergory.active img {
        animation: scale 1s ease;
        transform: scale(1.05);
    }
    .image-catergory:last-child::before {
        width: 0;
    }
    .image-catergory.active p,
    .image-catergory:hover p {
        color: var(--tertiary-color) !important;
    }
    .image-catergory:hover .image-caption {
        padding-bottom: 1.5rem !important;
    }
    .image-catergory:active img {
        transform: scale(1.04);
    }
    .image-caption {
        bottom: 0;
        transition: var(--transition-275s);
        background: linear-gradient(to top, var(--secondary-color), transparent);
    }
    .image-catergory:last-child .image-caption {
        right: 0;
    }
    .image-caption p {
        color: var(--primary-color) !important;
        font-weight: 500;
        letter-spacing: 0.5px;
        opacity: 0;
    }
    .image-catergory.active .image-caption p {
        animation: fadeUp 0.8s ease;
        opacity: 1;
    }
</style>