<script setup>
    import { ref, onMounted } from 'vue'
    import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

    const activeCaption = ref('')
    const activeDesc = ref('')
    const activeIndex = ref(-1)
    const activeImage = ref('')

    const containerRef = ref(null)
    
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
        activeImage.value = gallery[activeIndex.value].image
    }

    const selectCategory = () => {
        activeIndex.value = (activeIndex.value + 1) % gallery.length
        setAsActiveCategory(activeIndex.value)
        setTimeout(scrollToActiveItem, 0)
    }

    const scrollToActiveItem = () => {
      if (containerRef.value) {
        const activeItem = containerRef.value.children[activeIndex.value];
        if (activeItem) {
          containerRef.value.scrollTo({
            left: activeItem.offsetLeft - containerRef.value.clientWidth / 4,
            behavior: 'smooth',
          });
        }
      }
    }

    onMounted(() => {
        scrollToActiveItem()
    });
    
</script>

<template>
    <div class="tab-pane px-0 position-relative fade" id="community-section" role="tabpanel" aria-labelledby="community" tabindex="0">
        <div class="community-landing pt-4 d-flex align-items-center justify-content-center">
            <div :class="{ 'selected-category': activeImage !== '' }" class="community-desc p-5 rounded-2 d-flex align-items-start justify-content-start flex-column w-50">
                <h4 class="mb-3 fw-semibold">{{ activeCaption || 'Our Mission and Values' }}</h4>
                <p class="mb-0 fs-7">{{ activeDesc || 'At EPICFIT, our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Our core values drive everything we do.'  }}</p>
            </div>
            <div class="community-galler position-relative w-50 d-flex align-items-center justify-content-center">
                <button 
                    class="next-button btn position-absolute"
                    @click.prevent="selectCategory()"
                >
                    <icon :icon="faChevronLeft" />
                </button>
                <div 
                    class="image-slider d-flex gap-3 position-absolute" 
                    ref="containerRef"
                >
                    <a  
                        href=""
                        v-for="(item, index) in gallery"
                        class="image-catergory position-relative"
                        :class="{ 'active': activeCaption == item.caption}"
                        @click.prevent="() => { setAsActiveCategory(index); scrollToActiveItem(); }"
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
        <img :src="activeImage" class="activeBackground position-absolute" alt="">
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
    .activeBackground {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: blur(5px);
        width: 100vw;
        z-index: -1;
        top: 0;
    }
    .next-button {
        left: 3rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: rgba(127, 125, 142, 0.3);
        color: var(--secondary-color);
        transition: var(--transition-175s);
    }
    .next-button:hover {
        background-color: var(--gray-light-color);
        color: var(--primary-color);
    }
    .image-slider {
        left: 8rem;
        width: 160%;
    }
    .image-slider {
      overflow: hidden;
    }

    .image-slider::-webkit-scrollbar {
      display: none;
    }
    .image-catergory {
        height: 60vh;
        width: 50%;
        background-size: contain;
        background-repeat: no-repeat;
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
    .selected-category {
        background-color: rgba(21, 19, 40, 0.5);
    }
    .selected-category :is(h4, p) {
        color: var(--primary-color) !important;
    }
</style>