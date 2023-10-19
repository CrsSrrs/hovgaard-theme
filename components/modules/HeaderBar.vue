<template>
  <header class="header-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-6 col-sm-18 valign-middle">
          <Logo />
        </div>
        <div class="col-18 col-sm-6 valign-middle text-right">
          <MainNav v-if="mq.mdPlus"></MainNav>
          <nav v-if="mq.smMinus" class="mobile-toggle">
            <Burger @click="toggleMobileNav()" :active="showNav"></Burger>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <MobileNav v-if="mq.smMinus" :show="showNav"></MobileNav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMq } from 'vue3-mq';
import { useRouter } from 'vitepress';

import Logo from '@/components/atoms/Logo.vue';
import Burger from '@/components/atoms/Burger.vue';
import MainNav from '@/components/elements/MainNav.vue';
import MobileNav from '@/components/elements/MobileNav.vue';

const router = useRouter();
const mq = useMq();
const showNav = ref(false);

function toggleMobileNav() {
  showNav.value = !showNav.value;
}

router.onBeforeRouteChange = () => {
  showNav.value = false;
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/header-bar.scss"></style>
