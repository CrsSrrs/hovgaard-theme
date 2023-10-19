<template>
  <div class="ratio-box">
    <template v-if="mode !== 'iframe'">
      <div
        class="content"
        :class="[
          { '-clickable': clickable },
          { '-fullscreen': showFullscreen }
        ]"
        @click="toggleFullscreen()"
      >
        <img
          v-if="mode === 'image'"
          :src="withBase(src)"
          :loading="(lazy) ? 'lazy' : 'eager'"
        >
        <video
          v-if="mode === 'video'"
          muted
          loop
          playsinline
          autoplay
          ref="videoRef"
          :poster="withBase(src || '')"
        >
          <source :src="withBase(videoSrc || '')" type="video/mp4">
        </video>
      </div>
      <div class="overlay" v-if="overlay"></div>
      <div class="_text">
        <slot name="text"></slot>
      </div>
    </template>
    <template v-if="mode === 'iframe'">
      <div class="content">
        <slot name="iframe"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { withBase } from 'vitepress';
import { useElementVisibility } from '@vueuse/core';

const props = withDefaults(defineProps<{
  src?: string,
  overlay?: boolean,
  mode?: 'image' | 'video' | 'iframe',
  lazy?: boolean,
  videoSrc?: string,
  clickable?: boolean,
}>(), {
  overlay: false,
  mode: 'image',
  lazy: true,
  clickable: false,
});

const showFullscreen = ref(false);

if (props.mode === 'video') {
  const videoRef = ref(null);
  const videoIsVisible = useElementVisibility(videoRef);

  watch(videoIsVisible, (isVisible) => {
    if (isVisible) videoRef.value.play();
    else videoRef.value.pause();
  });
}

const toggleFullscreen = () => {
  if (props.clickable) {
    showFullscreen.value = !showFullscreen.value;
  }
}

defineExpose({
  toggleFullscreen,
});
</script>

<style scoped lang="scss" src="@/sass/07_elements/ratio-box.scss"></style>
