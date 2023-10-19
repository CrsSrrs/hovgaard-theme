<template>
  <section class="stats-insights">
    <div class="row">
      <div class="col-8 col-sm-12 col-xs-24" v-for="item in stats" :key="item.unit">
        <div class="stat-box">
          <div class="_value">{{ item.value }}</div>
          <div class="_unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Stat {
  value: string,
  unit: string,
};

defineProps<{
  stats: Array<Stat>,
}>();
</script>

<style scoped lang="scss" src="@/sass/08_modules/stats-insights.scss"></style>
