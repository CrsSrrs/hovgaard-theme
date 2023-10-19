<template>
  <a :href="getUrl()" class="news-teaser" :target="isExternal() ? '_blank' : null" ref="root">
    <RatioBox v-if="data.thumbnail" :src="data.thumbnail" class="-half"></RatioBox>
    <div class="_content">
      <div class="_title" :class="{ '-small': data.thumbnail }">{{ data.title }}</div>
      <div class="_excerpt" v-html="data.excerpt"></div>
    </div>
    <div class="_foot">
      <Link :href="getUrl()" class="link" :target="isExternal() ? '_blank' : null">Read more</Link>
    </div>
  </a>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
import { onMounted, ref } from 'vue';
import type { Post } from '../../../theme-types';

import Link from '@/components/atoms/Link.vue';
import RatioBox from '@/components/elements/RatioBox.vue';

const props = defineProps<{
  data: Post,
}>();
const emit = defineEmits(['set-height']);
const root = ref(null);

function getUrl() {
  return (isExternal()) ? props.data.external : withBase(props.data.url);
}

function isExternal() {
  return props.data.external || /https:\/\/|http:\/\//.test(props.data.url);
}

onMounted(() => {
  emit('set-height', root.value.offsetHeight);
});
</script>

<style scoped lang="scss" src="@/sass/07_elements/news-teaser.scss"></style>
