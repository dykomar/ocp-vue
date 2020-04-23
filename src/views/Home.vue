<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            OCP
          </h1>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col class="mb-4">
          <div class="my-2">
            <v-btn id="register" small color="primary" to="/register"
              >Register a Business Name
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
