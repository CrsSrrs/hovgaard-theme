<template>
  <nav class="main-nav">
    <li
      class="nav-item"
      v-for="item in theme.nav"
      :key="item.text"
      :class="{ 'is-active': currentPath === withBase(item.link) }"
    >
      <a
        :href="getHref(item.link)"
        :target="item.target"
      >{{ item.text }}</a>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useData, useRouter, withBase } from 'vitepress';

const { theme } = useData();
const router = useRouter();

let currentPath = ref(router.route.path);

router.onAfterRouteChanged = (to) => {
  currentPath.value = to;
}

function getHref(link) {
  return (isExternal(link)) ? link : withBase(link);
}

function isExternal(url) {
  return /https:\/\/|http:\/\//.test(url);
}
</script>

<style scoped lang="scss" src="@/sass/07_elements/main-nav.scss"></style>
