<template>
    <div class="page-margin">
        <div class="container">
            <div class="page-top">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item ">
                        <a href="/home">Головна</a>
                    </li>
                    <li class="breadcrumb-item ">
                        <span>Керівництво</span>
                    </li>
                </ul>
                <h1 class="heading-1">
                    Керівництво
                </h1>
            </div>
            <div name="undefined" tag="" widget="LrNR1MX4kK36rwcnCtmDrrHptQI-">
                <section class="section">
                    <h2 class="heading-2">Директорат</h2>
                    <itemStorage :name="item.name" :info="item.info" :image="item.image" v-for="item in der">
                    </itemStorage>
                </section>
            </div>
            <div name=" undefined" tag="" widget="7h6zRnMO2vu1Yoz8O2Gge1-2CGo-">
                <section class="section">
                    <h2 class="heading-2">Керівництво відділів</h2>
                    <itemStorage :name="item.name" :info="item.info" :image="item.image" v-for="item in ker">
                    </itemStorage>
                </section>
            </div>
            <div name="undefined" tag="" widget="T5Ue3HrfcoIvMT50t0N2FZiH4FE-">
                <section class="section">
                    <h2 class="heading-2">Адміністративний персонал</h2>
                    <itemStorage :name="item.name" :info="item.info" :image="item.image" v-for="item in admin">
                    </itemStorage>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
import der from './der.js';
import ker from './ker.js';
import admin from './admin.js';
import itemStorage from './item.vue';
</script>