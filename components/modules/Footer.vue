<template>
  <footer>
    <div class="_links">
      <div class="site-inner">
        <Logo />
        <nav class="_main">
          <a
            v-for="item in theme.nav"
            :key="item.text"
            :href="withBase(item.link)"
            :target="item.target"
          >
            {{ item.text }}
          </a>
        </nav>
        <SocialsNav></SocialsNav>
      </div>
    </div>
    <div class="_bar">
      <div class="site-inner">
        <div class="row">
          <div class="col-12">
            &copy; {{ currentYear }} HOVGAARD GAMES APS. ALL RIGHTS RESERVED.
          </div>
          <div class="col-12 text-right">
            VAT: DK38582747
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import Logo from '@/components/atoms/Logo.vue';
import SocialsNav from '@/components/elements/SocialsNav.vue';

const { theme } = useData();
const currentYear = new Date().getFullYear();

</script>

<style scoped lang="scss" src="@/sass/08_modules/footer.scss"></style>
