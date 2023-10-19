<template>
  <section class="content-teaser">
    <div class="row">
      <div v-if="mq.mdPlus && flip" class="col-10 col-sm-24 valign-middle">
        <slot></slot>
      </div>
      <div class="col-13 col-sm-24 col-sm-offset-0 valign-middle mb-sm-x4" :class="[{ 'col-offset-1': flip }]">
        <RatioBox :src="image" class="-fullhd" clickable></RatioBox>
      </div>
      <div v-if="mq.smMinus || !flip" class="col-10 col-offset-1 col-sm-24 col-sm-offset-0 valign-middle">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMq } from 'vue3-mq';
import RatioBox from '@/components/elements/RatioBox.vue';

const mq = useMq();

defineProps<{
  image: string,
  flip?: boolean,
}>()
</script>

<style scoped lang="scss" src="@/sass/08_modules/content-teaser.scss"></style>
