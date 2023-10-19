<template>
  <div class="burger-wrap">
    <div class="burger" :class="{ 'is-active': active }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean,
}>();
</script>

<style scoped lang="scss" src="@/sass/06_atoms/burger.scss"></style>
