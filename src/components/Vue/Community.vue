<script setup>
    import { ref, onMounted } from 'vue'
    import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

    const activeCaption = ref('')
    const activeDesc = ref('')
    
    const gallery = [
        { 
            image: '/img/community-image.svg',
            caption: 'Inclusivity',
            desc: 'We welcome everyone with open arms, regardless of their fitness level, age, or background. We believe fitness is for everyone.'
        },
        { 
            image: '/img/community-image.svg',
            caption: 'Expertise',
            desc: 'Our team of certified trainers and experienced instructors are dedicated to providing the highest quality guidance and support on your fitness journey.'
        },
        { 
            image: '/img/community-image.svg',
            caption: 'Wellness',
            desc: "We're committed to holistic health and wellness, not just physical fitness. We promote a balanced approach to living your best life."
        },
        { 
            image: '/img/community-image.svg',
            caption: 'Community',
            desc: 'Cultivating a supportive environment where fitness enthusiasts connect and thrive together, our vibrant community page fosters shared goals and celebrates collective achievements, promoting wellness as a unified journey.'
        },
    ]

    const setAsActiveCategory = index => {
        for(let i = 0; i < gallery.length; i++) {
            activeCaption.value = gallery[index].caption
            activeDesc.value = gallery[index].desc
        }
    }

    const selectCategory = () => {

    };
    
</script>

<template>
    <div class="tab-pane fade" id="community-section" role="tabpanel" aria-labelledby="community" tabindex="0">
        <div class="community-landing pt-4 d-flex align-items-center justify-content-center">
            <div class="community-desc d-flex align-items-start justify-content-center flex-column w-50">
                <div class="">
                    <h4 class="mb-3 fw-semibold px-5">{{ activeCaption || 'Our Mission and Values' }}</h4>
                    <p class="mb-0 fs-7 px-5">{{ activeDesc || 'At EPICFIT, our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Our core values drive everything we do.'  }}</p>
                </div>
            </div>
            <div class="community-galler position-relative w-50 d-flex align-items-center justify-content-center">
                <button class="next-button btn position-absolute">
                    <icon :icon="faChevronLeft" />
                </button>
                <div class="image-slider gap-3 d-flex position-absolute">
                    <a  
                        href=""
                        v-for="(item, index) in gallery"
                        class="image-catergory position-relative"
                        :class="{ 'active': activeCaption == item.caption}"
                        @click.prevent="setAsActiveCategory(index)"
                    >
                        <img :src="item.image" class="" alt="" draggable="false">
                        <div 
                            class="image-caption d-flex align-items-center justify-content-center w-100 pt-5 pb-3 position-absolute"
                        >
                            <p class="mb-0 fs-10">{{ item.caption.toUpperCase() }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .community-landing {
        height: 100dvh !important;
    }
    .next-button {
        left: 5rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: rgba(127, 125, 142, 0.3);
        color: var(--secondary-color);
        transition: var(--transition-175s);
    }
    .next-button:hover {
        background-color: var(--gray-color);
        color: var(--primary-color);
    }
    .image-slider {
        left: 10rem;
    }
    .image-catergory {
        height: 60vh;
        width: 13rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        transition: var(--transition-175s)
    }
    .image-catergory.active p,
    .image-catergory:hover p {
        color: var(--tertiary-color) !important;
    }
    .image-caption {
        bottom: 0;
        background: linear-gradient(to top, var(--secondary-color), transparent);
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