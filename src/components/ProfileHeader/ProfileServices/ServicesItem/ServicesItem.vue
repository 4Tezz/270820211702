<template>
  <li class="profile__services__item d-between">
    <p class="profile__services__item-text">{{ item.text }}</p>
    <span
      class="profile__services__item__state"
      :class="item.points > 10 ? 'green' : 'blue'"
      :style="'width:' + itemProgress"
    ></span>
    <span class="profile__services__item-point"> {{ item.points }} </span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
      itemProgress() {
          return (100 / 15) * this.item.points + '%'
      }
  }
};
</script>

<style lang="scss" scoped>
</style>