<template>
  <div class="page-margin">
    <div class="container">
      <h1 class="heading-1">Контакти</h1>
      <div class="contact">
        <VsMapContact />
        <div class="contact-block">
          <div class="contact-block__item">
            <div class="contact-block__title">Адреса:</div>
            <div class="contact-block__value">Велика Васильківська, 69</div>
          </div>
          <div class="contact-block__item">
            <div class="contact-block__title">Email:</div>
            <div class="contact-block__value">
              <a href="mailto:info@gki.com.ua">info@gki.com.ua</a>
            </div>
          </div>
          <div class="contact-block__item">
            <div class="contact-block__title">Телефон:</div>
            <div class="contact-block__value">
              <a href="tel:+38(044)2870684">+38(044) 287 06 84</a>
            </div>
          </div>
          <div class="contact-block__item">
            <div class="contact-block__title">Факс:</div>
            <div class="contact-block__value">
              <a href="tel:+38(044)2874252">+38(044) 287 42 52</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VsMapContact from '../../components/contacts/vs-map-contact.vue';

export default {
  components: {
    VsMapContact,
  },
};
</script>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
