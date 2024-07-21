<template>
<Header></Header>
    <main id="page-content">
      <slot />
  </main>
  <Footer></Footer>
</template>

<script setup>
import './css/index.css';
import Header from '../components/header/app-header.vue';
import Footer from '../components/footer/app-footer.vue';
</script>

<style>

</style>
