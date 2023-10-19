<script setup lang="ts">
import { useData } from 'vitepress'

import Page from '@/components/views/Page.vue';
import News from '@/components/views/News.vue';
import NotFound from '@/components/views/NotFound.vue';
import HeaderBar from '@/components/modules/HeaderBar.vue';
import Footer from '@/components/modules/Footer.vue';

const { page, frontmatter } = useData()
</script>

<template>
  <div class="site" :class="[`-theme-${frontmatter.theme || 'purple' }`, { '-news': frontmatter.news }]">
    <HeaderBar></HeaderBar>
    <NotFound v-if="page.isNotFound"></NotFound>
    <News v-else-if="frontmatter.news"></News>
    <Page v-else></Page>
    <Footer></Footer>
  </div>
</template>
