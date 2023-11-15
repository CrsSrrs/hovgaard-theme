<template>
  <section class="news-overview" v-if="posts.length > 0">
    <ClientOnly>
      <div class="row _switch">
        <div class="col-24 col-xs-18 col-xs-offset-3 text-center">
          <Button
            v-for="{ url, title } in newsSwitch"
            :key="url"
            :href="url"
            :icon="false"
            class="-outline"
            :class="{ '-active': isCurrent(url) }"
            :disabled="isCurrent(url) || undefined"
          >
            {{ title }}
          </Button>
        </div>
      </div>
    </ClientOnly>
    <div class="row">
      <div class="col-8 col-sm-12 col-xs-24" v-for="post of filteredPosts" :key="post.url">
        <NewsTeaser :data="post" :height="(itemHeight > minHeight) ? itemHeight : minHeight" @set-height="checkHeight"></NewsTeaser>
      </div>
    </div>
    <div class="row mt-l" v-if="!maxCount && posts.length > count">
      <div class="col-24 text-center">
        <Button href="#/" @click.prevent="count+=perPage">Load more</Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withDefaults, ref, computed } from 'vue';
import { usePosts } from '@/composables/usePosts';

import Button from '@/components/atoms/Button.vue';
import NewsTeaser from '@/components/elements/NewsTeaser.vue';

const props = withDefaults(defineProps<{
  maxCount?: number | false,
  perPage?: number,
}>(), {
  maxCount: false,
  perPage: 3,
});

const { posts } = usePosts();
const count = ref(props.maxCount || props.perPage);

const filteredPosts = computed(() => {
  return posts.slice(0, count.value);
});

const newsSwitch = [
  {
    url: 'https://www.bigambitionsgame.com/news',
    title: 'Big Ambitions',
  },
  {
    url: 'https://www.startupcompanygame.com/news',
    title: 'Startup Company',
  },
  {
    url: 'https://www.hovgaard.com/news',
    title: 'Hovgaard Games',
  }
];

const minHeight = 250;
let itemHeight = ref(0);

function checkHeight(value) {
  itemHeight.value = (itemHeight.value > value) ? itemHeight.value : value;
}

function isCurrent(url) {
  return url.includes(window.location.host);
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/news-overview.scss"></style>
