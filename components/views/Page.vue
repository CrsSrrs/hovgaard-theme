<script setup lang="ts">
import { useData } from 'vitepress';
import StageHero from '@/components/modules/StageHero.vue'

const { frontmatter } = useData();
</script>

<template>
  <StageHero v-if="frontmatter.hero" :image="frontmatter.hero.image" :video="frontmatter.hero.video">
    <h1 v-if="frontmatter.hero.headline">{{ frontmatter.hero.headline }}</h1>
    <img v-if="frontmatter.hero.logo" :src="frontmatter.hero.logo">
  </StageHero>
  <main class="gradient-glow">
    <div class="site-inner">
      <Content />
    </div>
  </main>
</template>
