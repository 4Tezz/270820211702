<template>
  <header class="profile__header">
    <div class="profile__avatar">
      <img :src="profile.avatar" alt="avatar" />
    </div>
    <div class="profile__about">
      <h2 class="profile__name">{{ profile.name }}</h2>
      <p class="profile__position">{{ profile.position }}</p>
      <p class="profile__description">
        {{ profile.description }}
      </p>
      <div class="profile__services">
        <p class="profile__services__description">Услуг</p>
        <ProfileServices :services="profile.services" />
        <div class="profile__services__score d-between">
          <h3 class="profile__services__score-title">Всего</h3>
          <span class="profile__services__score-point">
            {{ allPoints }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ProfileServices from "./ProfileServices/ProfileServices.vue";
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    allPoints() {
      return this.profile.services.reduce(
        (points, el) => (points += el.points),
        0
      );
    },
  },
  components: { ProfileServices },
};
</script>

<style scoped lang='scss'>
</style>