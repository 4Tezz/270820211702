<template>
  <div class="wrapper">
    <div class="profile">
      <div class="container">
        <ProfileHeader :profile="profile.header" />
        <ProfileBody
          :profile="profile.body"
          @changeFilter="changeFilter"
          @addComment="addComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./components/ProfileHeader/ProfileHeader.vue";
import ProfileBody from "./components/ProfileBody/ProfileBody.vue";
export default {
  data() {
    return {
      profile: {
        header: {
          avatar: "https://silvestroff.com/images/rabota_nu_girls1.jpg",
          name: "Вероника Ростова",
          position: "Менеджер по продажам",
          description:
            " Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны",
          services: [
            { text: "Ручное бронирование", points: 11 },
            { text: "Пакетные туры", points: 3 },
            { text: "Отели", points: 1 },
          ],
        },
        body: {
          filter: false,
          likes: 131,
          comments: [
            {
              name: "Самуил",
              date: 1318464000,
              text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            },
            {
              name: "Лилия Семёновна",
              date: 1318550400,
              text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
            },
            {
              name: "Лилия Семёновна",
              date: 1318550400,
              text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
            },
          ],
        },
      },
    };
  },
  emits: ["changeFilter"],
  methods: {
    changeFilter() {
      this.profile.body.filter = !this.profile.body.filter;
    },
    addComment(text) {
      this.profile.body.comments.push({
        name: "You",
        text,
        date: Math.floor(Date.now() / 1000),
      });
    },
  },
  components: { ProfileHeader, ProfileBody },
};
</script>

<style>
</style>
