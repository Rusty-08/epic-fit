<script setup>
    import { ref, watch, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
    import { faCheck, faCheckDouble, faDumbbell } from '@fortawesome/free-solid-svg-icons'

    const currentMember = ref('')

    let profiles = [
        { image: '/img/image1.svg', name: 'Jonny Sins' },
        { image: '/img/image2.svg', name: 'Rendon Labrador' },
        { image: '/img/image3.svg', name: 'Mekus Insan' }
    ]

    let pricing = [
        { 
            price: 19.99,
            label: 'Basic Membership',
            description: "Our Basic Membership is an excellent option for budget-conscious beginners and those seeking convenience on the go. it's designed to elevate your experience.",
            benifits: [
                'Full access to our gym during regular hours',
                'Group fitness classes (limited)',
                'Use of basic gym equipment',
                'Complimentary fitness assessment'
            ]
        },
        { 
            price: 39.99,
            label: 'Premium Membership',
            description: 'Elevate your fitness journey with our Premium Membership, offering premium equipment, unlimited group fitness classes, and exclusive perks.',
            benifits: [
                '24/7 gym access',
                'Unlimited group fitness classes',
                'Access to premium gym equipment',
                'Personalized fitness plan',
                'Nutritional consultation'
            ]
        },
        { 
            price: 69.99,
            label: 'Family Membership',
            description: "With our Family Membership, you can enjoy quality time while staying healthy as a family. It's a great way to bond and support each other's fitness journeys.",
            benifits: [
                '24/7 gym access for all family members',
                'Unlimited group fitness classes',
                'Access to premium gym equipment',
                'Personalized fitness plan for all member',
                'Nutritional consultations for all member'
            ]
        }
    ]

    let index = 0;
    const displayCurrentMembers = () => {
        currentMember.value = profiles[index].name
        index = (index + 1) % profiles.length
    }

    let timer

    onBeforeUnmount(() => {
        clearInterval(timer)
    })

    onMounted(() => {
        displayCurrentMembers()
        timer = setInterval(displayCurrentMembers, 3000)
    });
    
</script>

<template>
    <div class="tab-pane fade show active" id="home-section" role="tabpanel" aria-labelledby="home" tabindex="0">
        <div class="home-landing container pt-5 px-0 d-flex">
            <div 
                class="introduction animated w-50 d-flex align-items-start justify-content-center flex-column"
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
                >
                    <img src="/img/Polygon1.svg" class="polygon position-absolute" alt="">
                    <img src="/img/dumbell1.svg" class="dumbell-one position-absolute" alt="">
                    <img src="/img/dumbell2.svg" class="dumbell-two position-absolute" alt="">
                    <img src="/img/person.png" class="person" alt="">
                </div>
            </div>               
        </div>
        <div class="pricing py-4 container">
            <div class="pricing-header animated d-flex align-items-center justify-content-center flex-column">
                <span class="fs-7 mb-1">PRICING</span>
                <h3>Membership Options</h3>
            </div>
            <div 
                class="pricing-category animated my-5 d-flex flex-lg-row flex-column align-items-center justify-content-evenly"
            >
                <a  
                    href=""
                    @click.prevent=""
                    v-for="price in pricing"
                    class="pricing-item card position-relative shadow-sm p-4 d-flex justify-content-start align-items-center"
                >
                    <h4 class="price-amount px-3 border-bottom fs-2 fw-semibold d-flex align-items-center gap-1">{{ `$${price.price}` }} <span class="fs-6 fw-normal">/month</span></h4>
                    <h4 class="price-label fw-semibold fs-6">{{ price.label }}</h4>
                    <p class="fs-8 text-center pt-2">{{ price.description }}</p>
                    <span class="benifits text-start w-100 fs-10 fw-semibold mb-1">What's Included:</span>
                    <ul class="w-100 px-2">
                        <li 
                            class="fs-10 mb-1"
                            v-for="benifit in price.benifits"
                        >   
                            <icon :icon="faCheck" class="px-1" />
                            {{ benifit }}
                        </li>
                    </ul>
                    <icon :icon="faDumbbell" class="dumbbell position-absolute" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .home-landing {
        height: 100dvh;
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
        font-family: 'Nunito', sans-serif;
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
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.2);
    }
    .home-images .person {
        width: 25rem;
        z-index: 10;
        animation: fadeLeft 1s ease-in;
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.2);
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
    .pricing-header.show {
        animation-delay: 200ms;
        animation: fadeUp 1s ease-in;
    }
    .pricing-header span {
        color: var(--tertiary-color);
        letter-spacing: 0.5px;
        font-family: 'Nunito', sans-serif;
    }
    .pricing-header h3 {
        font-weight: 600;
        position: relative;
        font-size: clamp(1.3rem, 2vw, 1.7rem) !important;
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
    .pricing-category .pricing-item {
        height: 24rem;
        width: 20rem;
        padding: 2.5rem 1.5rem !important;
        border: none;
        backdrop-filter: blur(10px);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.175);
    }
    .pricing-category.show .pricing-item {
        animation: fadeRight 1.5s ease;
        animation-delay: 100ms;
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);
    }
    .pricing-category.show .pricing-item:nth-child(2) {
        animation-delay: 200ms;
    }
    .pricing-category.show .pricing-item:nth-child(3) {
        animation-delay: 300ms;
    }
    .pricing-item:first-child {
        background-color: rgba(127, 125, 142, 0.1) !important;
    }
    .pricing-item:nth-child(2) {
        background-color: rgba(21, 19, 40, 0.1) !important;
    }
    .pricing-item:nth-child(3) {
        background-color: rgba(255, 159, 62, 0.1) !important;
    }
    .pricing-item p {
        color: var(--secondary-color) !important;
    }
    .pricing-item:first-child .price-label {
        color: var(--basic-color) !important;
        font-family: 'Nunito', sans-serif;
    }
    .pricing-item:nth-child(2) .price-label {
        color: var(--premium-color) !important;
        font-family: 'Nunito', sans-serif;
    }
    .pricing-item:last-child .price-label {
        color: var(--family-color) !important;
        font-family: 'Nunito', sans-serif;
    }
    .price-amount {
        color: var(--secondary-color) !important;
        border-color: var(--gray-light-color) !important;
    }
    .price-amount>span {
        color: var(--gray-color);
        font-family: 'Nunito', sans-serif;
    }
    .benifits {
        color: var(--dark-gray-color);
    }
    .pricing-item li {
        color: var(--dark-gray-color);
        list-style: none;
    }
    .pricing-item li>svg {
        color: var(--tertiary-color);
    }
    .pricing-item:first-child li>svg,
    .pricing-item:first-child:hover .dumbbell {
        color: var(--basic-color) !important;
    }
    .pricing-item:nth-child(2) li>svg,
    .pricing-item:nth-child(2):hover .dumbbell {
        color: var(--premium-color) !important;
    }
    .pricing-item:last-child li>svg,
    .pricing-item:nth-child(3):hover .dumbbell {
        color: var(--family-color) !important;
    }
    .dumbbell {
        height: 12rem;
        top: calc(50% - 6rem);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.175);
    }
    .pricing-item:first-child .dumbbell {
        color: rgba(127, 125, 142, 0.1) !important;
    }
    .pricing-item:nth-child(2) .dumbbell {
        color: rgba(21, 19, 40, 0.1) !important;
    }
    .pricing-item:last-child .dumbbell {
        color: rgba(255, 159, 62, 0.1) !important;
    }
    .pricing-item:hover {
        transform: translateY(-1rem);
    }
    .pricing-item:hover .dumbbell {
        height: 1.3rem;
        left: 0.5rem;
        top: 0.5rem;
        transform: rotate(-45deg);
    }
    .pricing-item:hover::before {
        opacity: 1;
        border-right-width: 5rem;
    }
    .pricing-item::before {
        content: '';
        border: 5rem solid transparent;
        position: absolute;
        border-top-color: var(--primary-color);
        border-left-width: 0;
        border-right-width: 0rem;
        top: -0.1rem;
        left: -0.1rem;
        opacity: 0;
        transition: var(--transition-375s);
    }
    .pricing-item:first-child:hover {
        background-color: var(--basic-color) !important;
    }
    .pricing-item:nth-child(2):hover {
        background-color: var(--premium-color) !important;
    }
    .pricing-item:last-child:hover {
        background-color: var(--family-color) !important;
    }
    .pricing-item:hover :is(h4, span, p, li, li>svg, .price-label) {
        color: var(--primary-color) !important;
    }
    .pricing-item:hover .price-amount {
        border-color: var(--primary-color) !important;
    }
</style>