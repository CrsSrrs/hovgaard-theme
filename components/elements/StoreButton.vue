<template>
  <Button
    :href="store.link"
    target="_blank"
    :class="{ '-thin': iconOnly }"
    :icon="false"
  >
    <Icon class="-inline -size-20" :class="{ 'mr-xxs': !iconOnly }">
      <component :is="getIcon(store.name)"></component>
    </Icon>
    <template v-if="!iconOnly">{{ store.name }}</template>
  </Button>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';

interface Store {
  name: string,
  link: string,
};

withDefaults(defineProps<{
  store: Store,
  iconOnly?: boolean,
}>(), {
  iconOnly: false,
});

const icons = import.meta.glob('@/assets/icons/platforms/*.svg', { eager: true });

function getIcon(icon) {
  return icons[Object.keys(icons).find((el) => el.includes(icon))];
}
</script>

<style scoped lang="scss" src="@/sass/07_elements/store-button.scss"></style>
