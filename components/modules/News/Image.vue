<template>
  <div class="news-image pt-s mb-l">
    <div class="row">
      <div class="col-sm-24 col-sm-offset-0" :class="[{ 'col-20 col-offset-2': !small }, { 'col-14 col-offset-5': small }]">
        <figure>
          <a :href="src" target="_blank">
            <img :src="src" loading="lazy" :alt="alt" />
          </a>
          <figcaption v-if="caption">{{ caption }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string,
  alt?: string,
  caption?: string,
  small?: boolean,
}>();
</script>
