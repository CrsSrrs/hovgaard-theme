<template>
  <section class="video-embed">
    <div class="row">
      <div class="col-20 col-offset-2 col-sm-24 col-sm-offset-0">
        <RatioBox mode="iframe" class="-fullhd">
          <template v-slot:iframe>
            <iframe
              v-if="source === 'youtube'"
              :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
              frameborder="0"
              loading="lazy"
              allowfullscreen
              modestbranding="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </template>
        </RatioBox>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

withDefaults(defineProps<{
  source: 'youtube',
  videoId: string,
}>(), {
  source: 'youtube',
});
</script>

<style scoped lang="scss" src="@/sass/08_modules/video-embed.scss"></style>
