<template>
    <div class="row team">
        <div class="col-md-3">
            <div class="team-item">
                <div class="team-item__image">
                    <img :alt=image>
                </div>
                <div class="team-item__info">
                    <h3 class="heading-3">
                        <span class="team-item__title">{{ name }}</span>
                    </h3>
                    <div class="team-item__position">{{ info }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    image: String,
    name: String,
    info: String,
});
</script>
