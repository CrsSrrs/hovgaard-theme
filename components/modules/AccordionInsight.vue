<template>
  <section class="accordion-insight">
    <div class="row mb-m">
      <div class="col-16 col-offset-4 col-sm-24 col-sm-offset-0 text-center">
        <slot name="head"></slot>
      </div>
    </div>
    <div class="row mb-l">
      <div class="col-16 col-offset-4 col-sm-22 col-sm-offset-1">
        <div class="accordion-wrapper">
          <div class="_items">
            <slot name="items"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-24 text-center">
        <slot name="bottom"></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss" src="@/sass/08_modules/accordion-insight.scss"></style>
