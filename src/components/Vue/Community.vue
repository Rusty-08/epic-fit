<script setup>
    import { ref, onMounted } from 'vue'
    import { faArrowsRotate, faChevronLeft, faRotate } from '@fortawesome/free-solid-svg-icons'

    const activeCaption = ref('')
    const activeDesc = ref('')
    const activeIndex = ref(-1)

    const scrollAmount = ref(0)
    
    const gallery = [
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
    ]

    const setAsActiveCategory = (index) => {
        activeIndex.value = index
        activeCaption.value = gallery[activeIndex.value].caption
        activeDesc.value = gallery[activeIndex.value].desc
    }

    const selectCategory = index => {
        activeIndex.value = index
        setAsActiveCategory(
            (activeIndex.value + 1) % gallery.length
        )
        scrollAmount.value = -100 * activeIndex.value

        console.log(4 % gallery.length)
    }

    const selectOnClick = () => {
        selectCategory(activeIndex.value)
    };
    
</script>

<template>
    <div class="tab-pane px-0 position-relative fade" id="community-section" role="tabpanel" aria-labelledby="community" tabindex="0">
        <div class="community-landing pt-4 d-flex align-items-center justify-content-center">
            <div class="community-desc p-5 mt-5 h-50 rounded-2 d-flex align-items-start justify-content-start flex-column w-50">
                <h4 class="mb-3 fw-semibold">{{ activeCaption || 'Our Mission and Values' }}</h4>
                <p class="mb-0 fs-7">{{ activeDesc || 'At EPICFIT, our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Our core values drive everything we do.'  }}</p>
            </div>
            <div class="community-galler position-relative w-50 d-flex align-items-center justify-content-center">
                <button 
                    class="next-button btn position-absolute"
                    @click.prevent="selectOnClick()"
                >
                    <icon v-if="activeIndex !== 3" :icon="faChevronLeft" class="fs-6" />
                    <icon v-else :icon="faArrowsRotate" class="fs-6" />
                </button>
                <div class="image-slider d-flex position-absolute" >
                    <a  
                        href=""
                        v-for="(item, index) in gallery"
                        class="image-catergory position-relative"
                        :style="{ transform: `translateX(${scrollAmount}%)` }"
                        :class="{ 'active': activeCaption == item.caption}"
                        @click.prevent="selectCategory(index - 1)"
                        :key="index"
                    >
                        <img :src="item.image" class="" alt="" draggable="false">
                        <div 
                            class="image-caption d-flex align-items-center justify-content-center w-100 pt-5 pb-3 px-0 position-absolute"
                        >
                            <p class="mb-0 fs-10 text-center">{{ item.caption.toUpperCase() }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #community-section {
        overflow: hidden;
    }
    .community-landing {
        height: 100dvh !important;
        padding-left: 8% !important;
        padding-right: 8% !important;
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
        background-color: rgba(127, 125, 142, 0.2);
        color: var(--tertiary-color);
        border-color: transparent;
    }
    .image-slider {
        left: 8rem;
    }
    .image-slider {
        overflow: hidden;
        width: 70vw;
    }
    .image-catergory {
        height: 60vh;
        width: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-decoration: none !important;
        border: none;
        overflow: hidden !important;
        transition: var(--transition-375s)
    }
    .image-catergory img {
        height: 100%;
        width: auto;
        overflow: hidden;
    }
    .image-catergory::before {
        content: '';
        position: absolute;
        width: 0.25rem;
        height: 100%;
        background-color: var(--primary-color);
        right: 0;
    }
    .image-catergory:last-child::before {
        width: 0;
    }
    .image-catergory.active p,
    .image-catergory:hover p {
        color: var(--tertiary-color) !important;
    }
    .image-caption {
        bottom: 0;
        right: 0.25rem;
        background: linear-gradient(to top, var(--secondary-color), transparent);
    }
    .image-catergory:last-child .image-caption {
        right: 0;
    }
    .image-caption p {
        color: var(--primary-color) !important;
        font-weight: 500;
        letter-spacing: 0.5px;
    }
    .image-catergory img {
        height: 100%;
    }
</style>