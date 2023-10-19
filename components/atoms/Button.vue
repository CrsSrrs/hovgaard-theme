<template>
  <a class="button" :href="href" :target="target">
    <slot></slot>
    <Icon v-if="icon" class="-inline -is-right"><ArrowSVG /></Icon>
  </a>
</template>

<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue';
import ArrowSVG from '@/assets/icons/arrow-right.svg';

withDefaults(defineProps<{
  href?: string,
  target?: string,
  icon?: boolean,
}>(), {
  icon: true,
});
</script>

<style scoped lang="scss" src="@/sass/06_atoms/button.scss"></style>
