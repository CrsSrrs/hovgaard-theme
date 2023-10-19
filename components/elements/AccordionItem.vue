<template>
  <div class="accordion-item" ref="item">
    <div class="_trigger" @click.prevent="togglePanel">
      <span class="_icon"></span>
      {{ title }}
    </div>
    <div class="_content" ref="panel">
      <div class="mt-s text-mb-xs">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string,
}>();

const item = ref(null);
const panel = ref(null);

function togglePanel() {
  item.value.classList.toggle('is-active');
  panel.value.style.maxHeight = (!panel.value.style.maxHeight) ? `${panel.value.scrollHeight}px` : null;
}
</script>

<style scoped lang="scss" src="@/sass/07_elements/accordion-item.scss"></style>
