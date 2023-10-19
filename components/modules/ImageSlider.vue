<template>
  <section class="image-slider">
    <div class="row">
      <swiper-container
        ref="swiperRef"
        :space-between="16"
        :injectStyles="['.swiper { overflow: visible; }']"
        :pagination="true"
        :breakpoints="{
          600: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }"
        @slidechange="onSlideChange"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="image"
          lazy="true"
        >
          <div class="col-24">
            <RatioBox :src="image" class="-fullhd" @click="showFullscreen(index)"></RatioBox>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="row">
      <div class="col-24">
        <div class="_nav">
          <a
            href="#/"
            class="swiper-button-prev"
            :class="{ 'invisible': isBeginning }"
            @click.prevent="prevSlide()"
          >
            <Icon class="-inline -size-20 -rotate-180"><ArrowSVG /></Icon>
          </a>
          <a
            href="#/"
            class="swiper-button-next"
            :class="{ 'invisible': isEnd }"
            @click.prevent="nextSlide()"
          >
            <Icon class="-inline -size-20"><ArrowSVG /></Icon>
          </a>
        </div>
      </div>
    </div>
    <div class="_fullscreen-wrapper">
      <RatioBox v-for="(image, index) in images" :key="`full-${image}`" :src="image" clickable lazy ref="fullscreenImages"></RatioBox>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from 'swiper/element/bundle';
import Icon from '@/components/atoms/Icon.vue';
import RatioBox from '@/components/elements/RatioBox.vue';

import ArrowSVG from '@/assets/icons/arrow-right.svg';

const props = defineProps<{
  images: Array<string>,
}>();

register();

const swiperRef = ref(null);
const fullscreenImages = ref([]);
let isEnd = ref(false);
let isBeginning = ref(true);

function prevSlide() {
  swiperRef.value.swiper.slidePrev();
}

function nextSlide() {
  swiperRef.value.swiper.slideNext();
}

function onSlideChange() {
  isEnd.value = swiperRef.value.swiper.isEnd;
  isBeginning.value = swiperRef.value.swiper.isBeginning;
}

function showFullscreen(index) {
  fullscreenImages.value[index].toggleFullscreen();
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/image-slider.scss"></style>
