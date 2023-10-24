<script setup>
    import { faUser } from '@fortawesome/free-solid-svg-icons'
    import { ref } from 'vue'

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
    <nav class="navbar">
        <div class="container-fluid d-flex align-items-center justify-content-between px-5 mx-5">
            <a class="logo fs-5" href="">EPIC<span>FIT</span></a>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li 
                    class="nav-item" 
                    role="presentation"
                    v-for="(link, index) in navlinks"
                    :key="index"
                >
                    <button 
                        class="nav-link fs-7" 
                        :class="{ 'active': link == 'Home' }"
                        :id="convertToLink(link)" 
                        data-bs-toggle="pill" 
                        :data-bs-target="`#${convertToLink(link)}-section`" 
                        type="button" 
                        role="tab" 
                        :aria-controls="`${convertToLink(link)}-section`" 
                        :aria-selected="link == 'Home' ? true : false"
                    >
                        {{ link }}
                    </button>
                </li>
            </ul>
            <icon :icon="faUser" class="user" />
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        background-color: var(--primary-color);
        height: var(--header-height);
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
        color: var(--secondary-color);
    }
    .navbar .nav-link.active,
    .navbar .nav-link.active:hover {
        color: var(--tertiary-color);
        background-color: transparent;
    }
    .user {
        padding: 0.7rem 0.8rem !important;
        border-radius: 50%;
        border: 1px solid var(--tertiary-color);
        color: var(--tertiary-color);
    }
</style>