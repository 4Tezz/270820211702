<template>
  <li class="comments__comment">
    <div class="comments__comment box">
      <h3 class="comments__comment__name">{{ comment.name }}</h3>
      <span class="comments__comment__date">
        {{ converterUnix(comment.date) }}
      </span>
    </div>
    <p class="comments__comment__text">
      {{ comment.text }}
    </p>
  </li>
</template>

<script>
import { converterUnix } from "./../../../../utils/converter";
export default {
  props: ["comment"],
  methods: {
    converterUnix
  },
};
</script>

<style lang="scss" scoped>
</style>