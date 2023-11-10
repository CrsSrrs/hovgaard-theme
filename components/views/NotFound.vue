<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
</script>

<template>
  <main class="gradient-glow">
    <div class="site-inner pt-xl">
      <div class="row mt-xxl mb-xl">
        <div class="col-16 col-offset-4 col-sm-24 col-sm-offset-0">
          <h1>404 - Not Found</h1>
          <p class="mb-l">This page does not seem to exist (anymore). Maybe the page was deleted or there was a typo when entering the address. The button below leads back to our home page.</p>
          <Button href="/">Back to Frontpage</Button>
        </div>
      </div>
    </div>
  </main>
</template>
