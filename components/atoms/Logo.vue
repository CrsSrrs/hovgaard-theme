<template>
  <div class="logo">
    <a :href="withBase('/')" :target="target">
      <img :src="withBase(theme.logo)">
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase, useData } from 'vitepress';

withDefaults(defineProps<{
  href?: string,
  target?: string
}>(), {
  target: '_self',
});

const { theme } = useData();
</script>

<style scoped lang="scss" src="@/sass/06_atoms/logo.scss"></style>
