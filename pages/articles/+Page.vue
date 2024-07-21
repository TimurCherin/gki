<template>
    <div class="page-margin">
    <div class="container">
        <ul class="breadcrumb">
            <li class="breadcrumb-item ">
                <a href="/home">Головна</a>
            </li>
            <li class="breadcrumb-item ">
                <a href="/articles">Новини</a>
            </li>
        </ul>
        <h1 class="heading-1 text-center">Новини</h1>

        <div class="articles m-t-xl">
<div name="undefined" tag="" widget="9v7Nja39cX19LuYQod79CWA0Apg-">            <div class="row">
                <div class="col-md-12">
                    <div class="article-item article-item--big">
                        <a class="article-item__link" href="vidbuvsja-pershi-krugli-stil-prisvjacheni-20-richnici-derjavnoii-geodezichnoii-referencnoii-sistemi-koordinat-usk-2000"></a>
                        <div class="article-item__top">
                            <div class="article-item__image">

                                <img src="../../assets/images/image.png">
                            </div>
                            <div class="article-item__tags">
                                <span class="article-item__label"></span>
                                <span class="article-item__date">03 березня,
                                    2024</span>
                            </div>
                        </div>
                        <div class="article-item__bottom">
                            <h3 class="heading-3">Відбувся перший круглий стіл присвячений 20 річниці Державної геодезичної референцної системи координат УСК-2000</h3>
                            <div class="article-item__teaser">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
          <div class="row d-flex flex-wrap">
            <itemStorage :data="item.data" :info="item.info" v-for="item in item">
            </itemStorage>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import item from './data.js';
import itemStorage from './item.vue';
</script>