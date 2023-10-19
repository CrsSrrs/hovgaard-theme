<template>
  <section class="gradient-content-teaser" :class="{ '-flip': flip }">
    <div class="row">
      <div class="col-14 col-sm-24" v-if="!flip">
        <div class="_content gradient-border">
          <slot></slot>
        </div>
      </div>
      <div class="col-12 col-sm-22 col-sm-offset-1 pt-m pt-sm-0" :class="{ 'col-pull-2': !flip }">
        <RatioBox :src="image" class="-fullhd" clickable></RatioBox>
      </div>
      <div class="col-14 col-pull-2 col-sm-24 col-sm-pull-0" v-if="flip">
        <div class="_content gradient-border">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

defineProps<{
  image: string,
  flip?: boolean,
}>()
</script>

<style scoped lang="scss" src="@/sass/08_modules/gradient-content-teaser.scss"></style>
