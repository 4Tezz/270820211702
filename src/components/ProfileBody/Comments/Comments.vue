<template>
  <ul class="comments__list">
    <CommentsItem
      v-for="comment in comments"
      :key="comment"
      :comment="comment"
    />
  </ul>
</template>

<script>
import CommentsItem from "./CommentsItem/CommentsItem.vue";
export default {
  props: {
    comments: {
      type: Object,
      required: true,
    },
  },
  components: { CommentsItem },
};
</script>

<style lang="scss" scoped>
</style>