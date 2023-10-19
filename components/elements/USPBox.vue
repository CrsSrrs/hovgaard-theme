<template>
  <div class="col-12 col-sm-24">
    <div class="usp-box">
      <div class="_icon-wrap">
        <Icon class="-inline -size-32"><slot name="icon"></slot></Icon>
      </div>
      <div class="_title">
        <slot name="title"></slot>
      </div>
      <p>
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue';
</script>

<style scoped lang="scss" src="@/sass/07_elements/usp-box.scss"></style>
