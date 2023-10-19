<template>
  <section class="stage-hero">
    <RatioBox
      class="-thin-banner"
      :src="image"
      :videoSrc="video"
      :overlay="true"
      :lazy="false"
      :mode="(video) ? 'video' : 'image'"
    >
      <template v-slot:text>
        <div class="site-inner">
          <div class="row">
            <div class="col-12 col-sm-22">
              <slot></slot>
            </div>
          </div>
        </div>
      </template>
    </RatioBox>
  </section>
</template>

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

defineProps<{
  image: string,
  video?: string,
}>();
</script>

<style scoped lang="scss" src="@/sass/08_modules/stage-hero.scss"></style>
