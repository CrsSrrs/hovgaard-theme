<template>
  <section class="team-insight">
    <div class="row">
      <div class="col-24 text-center">
        <h3 class="h2">{{ headline }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="_member col-8 col-sm-12 col-xs-24" v-for="member in team" :key="member.name">
        <div class="_avatar">
          <RatioBox v-if="member.picture" :src="member.picture"></RatioBox>
          <img v-else :src="member.gender === 'female' ? FemaleAvatar : MaleAvatar" loading="lazy">
        </div>
        <div class="_name">{{ member.name }}</div>
        <div class="_position">{{ member.position }}</div>
        <div class="_socials" v-if="member.socials.length >= 0">
          <a v-for="item in member.socials" :key="item.platform" :href="item.link" target="_blank">
            <Icon class="-inline -size-20"><component :is="getIcon(item.platform)" /></Icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue';
import RatioBox from '@/components/elements/RatioBox.vue';

import MaleAvatar from '@/assets/male-avatar.jpg';
import FemaleAvatar from '@/assets/female-avatar.jpg';

interface SocialLink {
  platform: string,
  link: string,
};

interface TeamMember {
  name: string,
  gender: 'male' | 'female',
  picture?: string,
  socials?: Array<SocialLink>,
};

defineProps<{
  headline: string,
  team: Array<TeamMember>,
}>();

const socialIcons = import.meta.glob('@/assets/icons/socials/*.svg', { eager: true });
function getIcon(icon) {
  return socialIcons[Object.keys(socialIcons).find((el) => el.includes(icon))];
}

</script>

<style scoped lang="scss" src="@/sass/08_modules/team-insight.scss"></style>
