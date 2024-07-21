<template>
    <div class="page-margin--sm">
        <div class="container">
            <div class="page-top">

                <ul class="breadcrumb">
                    <li class="breadcrumb-item ">
                        <a href="/home">Головна</a>
                    </li>
                    <li class="breadcrumb-item ">
                        <span>Історія</span>
                    </li>
                </ul>
                <h1 class="heading-1">
                    Історія
                </h1>
            </div>
            <section class="section about-section">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="heading-2">Передумови</h2>
                        <div class="about-text">Шлях інституту розпочався влітку 1998 року.</div>
                        <div class="about-text">Наказом №78 Головного управління геодезії, картографії та кадастру при
                            Кабінеті Міністрів України від 1 липня 1998 р. Українське аерогеодезичне підприємство було
                            реорганізовано шляхом створення на його базі структурних підрозділів низки державних
                            підприємств.</div>
                        <div class="about-text">Так на базі Науково-виробничого центру 'Геодезкартінформатика'
                            Українського
                            аерогеодезичного підприємства (УкрАГП) 1 серпня 1998 р. було створено Науково-дослідний і
                            виробничий інститут геодезії, картографії та геоінформатики – НДВІ 'Геодезкартінформатика'.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2 class="heading-2">Поява</h2>
                        <div class="about-text">21 лютого 2000 р. Наказом Головного управління геодезії, картографії та
                            кадастру України
                            №21 від 22 лютого 2000 р. НДВІ 'Геодезкартінформатика' з 1 березня 2000 р. було
                            перейменовано
                            у Науково-дослідний інститут геодезії і картографії (НДІГК).</div>
                        <div class="about-text">Основу кадрового потенціалу колективу склали фахівці
                            Інформаційно-обчислювального центру,
                            проєктного бюро, цеху математичної обробки геодезичних вимірів УкрАГП та науковці
                            Науково-дослідного інституту автоматизованих систем у будівництві.</div>
                        <div class="about-text">Цим наказом визначено, що НДІГК є головним підприємством, що виконує
                            науково-дослідні, дослідно-конструкторські і технологічні роботи за напрямами:
                            геодезія, картографія, геоінформаційні системи і технології.</div>
                    </div>
                </div>
            </section>

            <div name="undefined" tag="" widget="dzr1QryjuACCPgeWt51klOWV5Eg-">
                <section class="section">
                    <itemStorage :year="item.year" :info="item.info" v-for="item in item">
                    </itemStorage>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
import item from './data.js';
import itemStorage from './item.vue';
</script>