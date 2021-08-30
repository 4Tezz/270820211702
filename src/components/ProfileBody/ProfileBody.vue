<template>
  <div class="profile__body">
    <div class="comments">
      <div class="comments__header">
        <div class="comments__header__filters">
          <h2 class="comments__header__filters-current">
            {{ profile.filter ? "Все отзывы" : "Последние отзывы" }}
          </h2>
          <button
            class="comments__header__filters-all"
            @click="$emit('changeFilter')"
          >
            {{ profile.filter ? "Последние отзывы" : "Все отзывы" }}
          </button>
          <p class="comments__header__likes">{{ profile.likes }}</p>
          <p class="comments__header__count-comments">{{ commentsCount }}</p>
        </div>
      </div>
      <Comments :comments="comments" />
    </div>
    <CommentAdd @addComment="(text) => $emit('addComment', text)" />
  </div>
</template>

<script>
import Comments from "./Comments/Comments.vue";
import CommentAdd from "./CommentAdd/CommentAdd.vue";
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    commentsCount() {
      return this.profile.comments.length;
    },
    comments() {
      if (this.profile.filter) {
        return this.profile.comments;
      }
      return this.profile.comments.slice().sort((a, b) => b.date - a.date);
    },
  },
  components: { Comments, CommentAdd },
};
</script>

<style lang="scss" scoped>
</style>