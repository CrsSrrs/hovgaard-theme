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
          v-if="!success"
          ref="form"
          :action="`https://static.mailerlite.com/webforms/submit/${theme.mailerlite.form.split(':')[1]}`"
          :data-code="theme.mailerlite.form"
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
          <Button href="#/" class="-full-width" @click.native.stop="subscribe" :icon="!loading">
            <template v-if="!loading">Subscribe</template>
            <template v-if="loading"><Icon class="-size-24"><LoadingSVG></LoadingSVG></Icon></template>
          </Button>
        </form>
        <div v-if="success">
          <h5 class="h5 mb-xs">Thank you!</h5>
          <p class="mb-0">Please check your inbox for confirmation.</p>
        </div>
        <p v-if="error" class="_error">An error occured. Please try again.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress';
import Button from '@/components/atoms/Button.vue';

import Icon from '@/components/atoms/Icon.vue';
import LoadingSVG from '@/assets/icons/loading.svg';

const { theme } = useData();
const form = ref(null);
const email = ref('');
const loading = ref(false);
const success = ref(false);
const error = ref(false);

async function subscribe() {
  error.value = false;
  loading.value = true;

  if (form.value.reportValidity()) {
    const params = {
      'fields[email]': email.value,
      'ml-submit': '1',
      anticsrf: 'true',
      ajax: '1',
    };

    const response = await fetch(`${form.value.action}?${new URLSearchParams(params).toString()}`)

    if (response.ok) {
      let json = await response.json();
      loading.value = false;

      if (json.success) {
        success.value = true;
      } else {
        error.value = true;
      }
    }
  }
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/newsletter-subscribe.scss"></style>
