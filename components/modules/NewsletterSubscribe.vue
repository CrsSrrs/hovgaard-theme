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
        <form
          ref="form"
          :action="`https://static.mailerlite.com/webforms/submit/${theme.subscribeListCode}`"
          :data-code="theme.subscribeListCode"
          method="post"
          target="_blank"
        >
          <input
            type="email"
            placeholder="Your email address"
            name="fields[email]"
            required
            autocomplete="email"
            v-model="email"
            aria-invalid="false"
          >
          <Button class="-full-width" @click.native.stop="subscribe">Subscribe</Button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress';
import Button from '@/components/atoms/Button.vue';

const { theme } = useData();
const form = ref(null);
const email = ref('');

function subscribe() {
  if (form.value.reportValidity()) {
    form.value.submit();
  }
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/newsletter-subscribe.scss"></style>
