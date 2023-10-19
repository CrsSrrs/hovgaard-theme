<template>
  <section class="game-insight">
    <div class="row">
      <div class="col-12 col-sm-24 mb-sm-m">
        <slot></slot>
      </div>
      <div class="col-11 col-offset-1 col-sm-24 col-sm-offset-0">
        <div class="_details">
          <h4 class="h4 mb-xs">Game Details</h4>
          <table>
            <tr>
              <td class="text-uppercase">Release:</td>
              <td>{{ releaseDate }}</td>
            </tr>
            <tr>
              <td class="text-uppercase">Platforms:</td>
              <td>
                <Icon class="-inline -size-20 mr-x1h" v-for="platform in platforms" :key="platform">
                  <component :is="getIcon(platform)"></component>
                </Icon>
              </td>
            </tr>
          </table>
          <h5 class="h5 mb-xs">Buy now</h5>
          <p>Purchase the game on your favourite store</p>
          <StoreButton
            v-for="store in frontmatter.stores"
            :key="store.name"
            :store="store"
            :iconOnly="frontmatter.stores.length >= 3"
            class="mr-xxs"
          ></StoreButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import Icon from '@/components/atoms/Icon.vue';
import StoreButton from '@/components/elements/StoreButton.vue';

interface Store {
  name: string,
  link: string,
};

defineProps<{
  releaseDate: string,
  platforms: Array<string>,
}>();

const { frontmatter } = useData();
const platformIcons = import.meta.glob('@/assets/icons/platforms/*.svg', { eager: true });

function getIcon(icon) {
  return platformIcons[Object.keys(platformIcons).find((el) => el.includes(icon.toLowerCase()))];
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/game-insight.scss"></style>
