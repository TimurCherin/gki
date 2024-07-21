<template>
<div class="article-list__item">
    <a class="article-list__link" href="vidbuvsja-pershi-krugli-stil-prisvjacheni-20-richnici-derjavnoii-geodezichnoii-referencnoii-sistemi-koordinat-usk-2000"></a>
    <div class="article-list__date">
        {{ data }}
    </div>
    <h4 class="heading-4">{{ info }}</h4>
    <div class="article-list__arrow">
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
    data: String,
    info: String,
});
</script>