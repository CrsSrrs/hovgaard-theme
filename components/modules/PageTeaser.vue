<template>
  <a class="page-teaser" :href="link.src">
    <RatioBox :src="image" class="-small-card">
      <template v-slot:text>
        <div class="_head">
          <slot name="head"></slot>
        </div>
        <div class="_foot">
          <Button :href="link.src" class="-full-width">{{ link.text }}</Button>
        </div>
      </template>
    </RatioBox>
  </a>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import RatioBox from '@/components/elements/RatioBox.vue';

interface ButtonType {
  src: string,
  text: string,
}

defineProps<{
  image: string,
  link: ButtonType,
}>();
</script>

<style scoped lang="scss" src="@/sass/08_modules/page-teaser.scss"></style>
