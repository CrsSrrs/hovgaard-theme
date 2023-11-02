<template>
  <section class="newsletter-subscribe gradient-border">
    <div class="row">
      <div class="col-10 col-sm-24 valign-middle">
        <h5 class="h3">
          <span class="text-gradient">Join our Newsletter</span>
          and stay updated
        </h5>
        <p class="mb-0 mb-sm-s">
          We'll keep you updated on new devlogs and important announcements. You can 1-click unsubscribe anytime ✌️
        </p>
      </div>
      <div class="col-8 col-offset-6 col-sm-24 col-sm-offset-0 valign-middle">
        <div id="ml-form" class="ml-form-embed"
          :data-account="theme.mailerlite.account"
          :data-form="theme.mailerlite.form">
        </div>
      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<style scoped lang="scss" src="@/sass/08_modules/newsletter-subscribe.scss"></style>
