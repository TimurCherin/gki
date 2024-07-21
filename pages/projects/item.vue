<template>
    <div class="project-item">
        <a class="project-item__link" href="/project-page/3379946367521654417"></a>
        <div class="project-item__date">
            {{ year }}
        </div>
        <div class="project-item__image">
            <img>
        </div>
        <div class="project-item__text">
            <h3 class="heading-3">
                {{ title }}
            </h3>
            <div class="project-item__teaser">
                {{ code }}
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    year: String,
    code: String,
});
</script>
