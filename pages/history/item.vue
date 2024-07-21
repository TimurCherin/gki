<template>
    <div class="row">
        <div class="col-md-2 col-md-offset-2">
            <h2 class="heading-2">{{ year }}</h2>
        </div>
        <div class="col-md-6">
            <p>{{ info }}</p>
        </div>
    </div>
</template>
<script setup>
defineProps({
    year: String,
    info: String
});
</script>