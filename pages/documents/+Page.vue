<template>
    <div class="page-margin">
        <div class="container">
            <h1 class="heading-1">Нормативні документи</h1>
            <div class="row m-r-xl">
                <div class="col-md-9">
                    <div class="project-list m-t-md">
                        <itemStorage :status="item.status" :link="item.link" :linkName="item.linkName" :data="item.data"
                            :title="item.title" v-for="item in item">
                        </itemStorage>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import item from './data.js';
import itemStorage from './item.vue';
</script>