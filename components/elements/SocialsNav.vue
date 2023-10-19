<template>
  <nav class="socials-nav">
    <a
      v-for="item in theme.socials"
      :key="item.alt"
      :href="item.link"
      target="_blank"
    >
      <Icon class="-inline -size-24"><component :is="getIcon(item.icon)" /></Icon>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import Icon from '@/components/atoms/Icon.vue';

const { theme } = useData();
const socialIcons = import.meta.glob('@/assets/icons/socials/*.svg', { eager: true });

function getIcon(icon) {
  return socialIcons[Object.keys(socialIcons).find((el) => el.includes(icon))];
}
</script>

<style scoped lang="scss" src="@/sass/07_elements/socials-nav.scss"></style>
