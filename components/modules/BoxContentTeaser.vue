<template>
  <div class="box-content-teaser">
    <RatioBox :src="image" class="-fullhd" clickable></RatioBox>
    <div class="_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

defineProps<{
  image: string,
}>()
</script>

<style scoped lang="scss" src="@/sass/08_modules/box-content-teaser.scss"></style>
