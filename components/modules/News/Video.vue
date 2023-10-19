<template>
  <div class="news-video pt-s mb-l">
    <div class="row">
      <div class="col-sm-24 col-sm-offset-0" :class="[{ 'col-20 col-offset-2': !small }, { 'col-14 col-offset-5': small }]">
        <video controls muted loop playsinline loading="lazy" ref="video">
          <source :src="withBase(src)">
        </video>
        <em v-if="caption">{{ caption }}</em>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { withBase } from 'vitepress';
import { useElementVisibility } from '@vueuse/core';

defineProps<{
  src: string,
  caption?: string,
  small?: boolean,
}>();

const video = ref(null);
const videoIsVisible = useElementVisibility(video);

watch(videoIsVisible, (isVisible) => {
  if (isVisible) video.value.play();
  else video.value.pause();
});
</script>
