<template>
  <div class="page-margin">
    <div class="container">
      <h1 class="heading-1">Наукова діяльність і проєкти</h1>
      <div class="row">
        <div class="col-md-3">
        </div>
        <div class="col-md-9">
          <div name="undefined" tag="projects_filters" widget="mV85bOT3YuASiE8WZbjgpwK2Tpk-">
            <div class="project-list m-t-md">
              <itemStorage :title="item.title" :year="item.year" :code="item.code" v-for="item in item">
              </itemStorage>
            </div>
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
