<template>
  <section class="stage-text">
    <div class="row">
      <div class="col-12 col-offset-6 col-sm-22 col-sm-offset-1 text-center">
        <h6 v-if="subHeadline" class="h6 theme-color-400">{{ subHeadline }}</h6>
        <h1 class="h1">{{ headline }}</h1>
      </div>
    </div>
    <div class="row" v-if="$slots.default">
      <div class="col-16 col-offset-4 col-sm-22 col-sm-offset-1 text-center">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  subHeadline?: string,
  headline: string,
}>();
</script>

<style scoped lang="scss" src="@/sass/08_modules/stage-text.scss"></style>
