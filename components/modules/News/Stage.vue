<template>
  <section class="stage-news gradient-glow" :class="{ '-with-image': image }">
    <div class="site-inner">
      <div class="row">
        <div class="col-18 col-offset-3 col-sm-22 col-sm-offset-1 text-center">
          <h6 v-if="subHeadline" class="h6 theme-color-400">{{ subHeadline }}</h6>
          <h1 class="h1">{{ headline }}</h1>
        </div>
      </div>
      <div class="row _image" v-if="image">
        <div class="col-24">
          <RatioBox :src="image" class="-banner"></RatioBox>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

defineProps<{
  subHeadline: string,
  headline: string,
  image?: string,
}>();
</script>

<style scoped lang="scss" src="@/sass/08_modules/stage-news.scss"></style>
