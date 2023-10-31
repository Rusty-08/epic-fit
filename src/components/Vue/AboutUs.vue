<script setup>

</script>

<template>
    <div class="tab-pane fade" id="about-us-section" role="tabpanel" aria-labelledby="about-us" tabindex="0">
        <div class="about-landing position-relative gap-5 pt-5 d-flex align-items-center justify-content-start flex-column">
            <div class="about-header animated w-100 pt-5 d-flex align-items-center justify-content-center flex-column">
                <p class="fs-6 mb-1">Welcome</p>
                <p class="fs-6 mb-1">to</p>
                <h1 class="">EPIC<span class="">FIT</span></h1>
            </div>
            <div class="about-desc animated mt-3 d-flex align-items-start justify-content-between">
                <p class="fs-9 w-25">We are more than just a fitness facility. We are a community of individuals committed to improving our physical and mental well-being. Our mission is to provide a welcoming and motivating environment where people of all fitness levels can pursue their health and fitness goals.</p>
                <p class="fs-9 w-25">At EPICFIT, we believe in a holistic approach to fitness. We focus on holistic wellness, emphasizing balance and sustainable lifestyle changes. This approach is what sets us apart and has helped our members achieve remarkable results.</p>    
            </div>
            <img src="/img/about-image.png" class="animated position-absolute" alt="">
        </div>
        <div class="our-story position-relative mt-5 d-flex py-2 align-items-center justify-content-center">
            <div class="w-50 position-relative d-flex align-items-center justify-content-center">
                <img src="/img/person.png" class="" alt="">
                <img src="/img/Polygon1.svg" class="position-absolute" alt="">
            </div>
            <div class="more-info pe-5 w-50 d-flex py-5 align-items-start flex-column justify-content-center">
                <h4 class="fw-semibold mb-3">Want to Get to Know Us Better?</h4>
                <span class="fw-semibold fs-6 my-2">Our Story</span>
                <p class="fs-8 pe-5">At EPICFIT, we have a story that's deeply rooted in our passion for fitness and a commitment to making a positive impact on people's lives. Founded by Gol D. Roger in 2010, our journey began with a simple but powerful belief - that a healthier and happier life is within reach for everyone. We started as a small fitness center with a big dream: to create a welcoming, inclusive, and motivating space for our community. Over the years, we've grown and evolved, but our core values have remained the same. Today, we're proud to be a vibrant and thriving fitness hub where individuals of all backgrounds, fitness levels, and ages come together to achieve their health and wellness goals.</p>
            </div>
            <svg class="position-absolute top-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151328" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,122.7C672,128,768,128,864,112C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <svg class="position-absolute bottom-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151328" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,122.7C672,128,768,128,864,112C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    </div>
</template>

<style scoped>
    #about-us-section {
        padding: 0 !important;
        margin: 0 !important;
    }
    .about-landing {
        height: 100dvh;
        padding-left: 8% !important;
        padding-right: 8% !important;
    }
    .about-header {
        animation: fadeDown 1s ease;
    }
    .about-header p {
        color: var(--gray-color) !important;
    }
    .about-header h1 {
        font-size: 4rem;
        font-weight: 900;
        letter-spacing: 1.5rem;
        padding-left: 1.5rem;
    }
    .about-header h1>span {
        color: var(--tertiary-color);
    }
    .about-desc p:first-child {
        animation: fadeRight 1s ease;
    }
    .about-desc p:last-child {
        animation: fadeLeft 1s ease;
    }
    .about-landing img {
        bottom: -4.5rem;
        height: 80%;
        animation: fadeUp 1s ease;
    }
    .our-story {
        background-color: var(--secondary-color);
        margin-top: 7rem !important;
    }
    .our-story img {
        width: 20rem;
    }
    .our-story img:first-child {
        z-index: 5;
    }
    .more-info h4,
    .more-info span {
        color: var(--primary-color) !important;
        z-index: 5;
    }
    .more-info p {
        color: var(--gray-light-color) !important;
    }
    .top-wave {
       top: -40%;
       left: 0;
       right: 0;
    }
    .bottom-wave {
        bottom: -60%;
        left: 0;
        right: 0;
    }
</style>