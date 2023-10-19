<template>
  <div class="mobile-nav-overlay" :class="{ 'is-active': show }"></div>
  <div class="mobile-nav-panel" :class="{ 'is-active': show }">
    <MainNav></MainNav>
  </div>
</template>

<script setup lang="ts">
import MainNav from '@/components/elements/MainNav.vue';

defineProps<{
  show: boolean,
}>();
</script>

<style scoped lang="scss" src="@/sass/07_elements/mobile-nav.scss"></style>
