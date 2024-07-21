<template>
<div class="col-md-4 col-xs-12" style="margin-bottom:30px;">
    <div class="article-item article-item--small">
        <a class="article-item__link" href="vidbuvsja-pershi-krugli-stil-prisvjacheni-20-richnici-derjavnoii-geodezichnoii-referencnoii-sistemi-koordinat-usk-2000"></a>
        <div class="article-item__top">
            <div class="article-item__image">
                <img>
            </div>
            <div class="article-item__tags">
                <span class="article-item__label"></span>
                <span class="article-item__date">{{ data }}</span>
            </div>
        </div>
        <div class="article-item__bottom">
            <h3 class="heading-4">{{ info }}</h3>
        </div>
    </div>
</div>
</template>
<script setup>
defineProps({
    data: String,
    info: String
});
</script>