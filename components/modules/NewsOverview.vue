<template>
  <section class="news-overview" v-if="posts.length > 0">
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
import { withDefaults, ref, computed, onMounted } from 'vue';
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

const minHeight = 250;
let itemHeight = ref(0);

function checkHeight(value) {
  itemHeight.value = (itemHeight.value > value) ? itemHeight.value : value;
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/news-overview.scss"></style>
