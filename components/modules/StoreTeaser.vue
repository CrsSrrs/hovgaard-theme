<template>
  <section class="store-teaser">
    <div class="row">
      <div class="col-16 col-offset-4 col-sm-24 col-sm-offset-0">
        <div class="_wrapper">
          <h3 class="h3">
            <span class="text-gradient">Buy the game</span>
            on your favorite store
          </h3>
          <StoreButton
            v-for="store in frontmatter.stores"
            :key="store.name"
            :store="store"
          ></StoreButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import StoreButton from '@/components/elements/StoreButton.vue';

const { frontmatter } = useData();
</script>

<style scoped lang="scss" src="@/sass/08_modules/store-teaser.scss"></style>
