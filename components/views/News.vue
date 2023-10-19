<script setup lang="ts">
import { useData } from 'vitepress';
import { usePosts } from '@/composables/usePosts';
import StageNews from '@/components/modules/News/Stage.vue'
import NewsletterSubscribe from '@/components/modules/NewsletterSubscribe.vue';

const { frontmatter } = useData();
const { post } = usePosts();

</script>

<template>
  <StageNews :subHeadline="post.date.string" :headline="post.title" :image="frontmatter.hero"></StageNews>
  <main class="news">
    <div class="site-inner">
      <Content />
    </div>
  </main>
  <section class="news-appendix">
    <div class="site-inner">
      <NewsletterSubscribe listCode="abc" />
    </div>
  </section>
</template>
