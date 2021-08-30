<template>
  <form class="add-comment" @submit.prevent="addComment">
    <textarea
      type="text"
      v-model="text"
      class="add-comment-control"
      required
    ></textarea>
    <button class="btn-yellow" type="submit">Написать консультанту</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addComment() {
      this.$emit('addComment', this.text)
      this.text = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-yellow {
  background-color: #fdd639;
  border-radius: 23px;
  font-weight: 700;
  font-size: 16px;
  transition: 0.3s;
  padding: 13px 11.5% 11px 11.5%;

  &:hover {
    opacity: 80%;
  }
}
.add-comment {
  display: flex;
  flex-direction: column;
  padding: 28px 21px 34px 21px;
  align-items: center;

  &-control {
    min-height: 58px;
    width: 100%;
    font-size: 15px;
    margin-bottom: 23px;
    padding: 5px 0 0 5px;
    resize: none;
  }
}

@media (max-width: 415px) {
  .add-comment {
    padding: 28px 7px 34px 7px;
  }
}
</style>