<template>
  <v-card-text>
    <v-row>
      <v-col>
        <h1 class="title">
          Important Message
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="body-2">
          Dear Sir / Madam,<br /><br />
          You are about to register a business name (sole-proprietorship or
          partnership) under the Business Names Act, Cap. 92, please take note
          of the following:<br />
          <br />
          a) A business name is required to renew its registration before the
          expiry of the renewal period.<br /><br />
          b) Any individual who runs a business is required to keep and maintain
          records of every transaction carried out in respect of the business
          for a period of at least five years from the date of transaction under
          the Record Keeping (Business) Order, 2015.
        </p>
        <v-checkbox
          id="checkbox"
          v-model="checkbox"
          label="I / We have read the above notice and duly take note of the requirements as stated above. "
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import { EventBus } from "@/main";

export default {
  name: "ImportantInformation",

  data: () => ({
    checkbox: false
  }),

  created() {
    this.checkbox = this.$store.state.checkbox;

    EventBus.$on("save", () => {
      this.$store.commit("setCheckbox", this.checkbox);
    });
  }
};
</script>
