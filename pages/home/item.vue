<template>
<div class="project-item">
    <a class="project-item__link" :href=link></a>
    <div class="project-item__date">
        {{ year }}
    </div>
    <div class="project-item__text">
        <h3 class="heading-3">
            {{ info }}
        </h3>
    </div>
    <div class="project-item__external">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_510_34)">
                <path d="M8.33331 20H30.8333" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                <path d="M21.6667 30L31.6667 20" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                <path d="M21.6667 10L31.6667 20" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
            </g>
            <defs>
                <clipPath id="clip0_510_34">
                    <rect width="40" height="40" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>

    </div>
</div>
</template>
<script setup>
defineProps({
    link: String,
    year: String,
    info: String,
});
</script>