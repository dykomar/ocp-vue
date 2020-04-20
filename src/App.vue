<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />OCP
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),

  created() {
    document.title = this.$route.meta.title;
  },

  watch: {
    $route(to) {
      document.title = to.meta.title || "Your Website";
    }
  }
};
</script>
