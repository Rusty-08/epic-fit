<script setup>
    import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
    import { ref, onMounted } from 'vue'

    let navlinks = [
        'Home',
        'About Us',
        'Community',
        'Contact Us'
    ]

    const convertToLink = e => {
        let link = e.toLowerCase().split(' ')
        if(link.length > 1) return link.join('-')
        return link
    };

</script>

<template>
    <nav class="navbar fixed-top">
        <div class="container-fluid px-0 d-flex align-items-center justify-content-between">
            <a class="logo fs-5" href="">EPIC<span>FIT</span></a>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li 
                    class="nav-item" 
                    role="presentation"
                    v-for="(link, index) in navlinks"
                    :key="index"
                >
                    <button 
                        class="nav-link fs-8" 
                        :class="{ 'active': link == 'Home' }"
                        :id="convertToLink(link)" 
                        data-bs-toggle="pill" 
                        :data-bs-target="`#${convertToLink(link)}-section`" 
                        type="button" 
                        role="tab" 
                        :aria-controls="`${convertToLink(link)}-section`" 
                        :aria-selected="link == 'Home' ? true : false"
                        @click.prevent=""
                    >
                        {{ link }}
                    </button>
                </li>
            </ul>
            <button class="user btn">
                <icon :icon="faUserSecret" />
            </button>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        background-color: var(--primary-color);
        height: var(--header-height);
        padding: 0 8%;
        transition: var(--transition-175s);
        overflow: hidden;
    }
    .navbar-scrolled {
        height: 0;
    }
    .navbar .logo {
        color: var(--dark-color);
        font-weight: 700;
        letter-spacing: 3px;
    }
    .navbar .logo>span {
        color: var(--tertiary-color);
    }
    .navbar .nav-link { 
        color: var(--gray-color);
        transition: var(--transition-175s);
    }
    .navbar .nav-link:hover {
        color: var(--tertiary-color);
        opacity: 0.5;
    }
    .navbar .nav-link.active,
    .navbar .nav-link.active:hover {
        opacity: 1;
        color: var(--tertiary-color);
        background-color: transparent;
    }
    .user {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 1px solid var(--gray-light-color);
        color: var(--gray-color);
        transition: var(--transition-175s);
    }
    .user:hover {
        border-color: var(--gray-color);;
        color: var(--secondary-color);
    }
</style>