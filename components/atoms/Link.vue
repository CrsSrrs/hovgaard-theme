<template>
  <a class="link" :href="href" :target="target">
    <slot></slot>
    <Icon class="-inline -is-right"><ArrowSVG /></Icon>
  </a>
</template>

<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue';
import ArrowSVG from '@/assets/icons/arrow-right.svg';

defineProps<{
  href?: string,
  target?: string,
}>()
</script>

<style scoped lang="scss" src="@/sass/06_atoms/link.scss"></style>
