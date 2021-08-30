<template>
  <ul class="profile__services__list">
    <ServicesItem v-for="item in services" :key="item" :item="item"/>
  </ul>
</template>

<script>
import ServicesItem from "./ServicesItem/ServicesItem.vue";
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  components: { ServicesItem },
};
</script>

<style lang="scss" scoped>
</style>