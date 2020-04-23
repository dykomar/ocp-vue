<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Register a Business Name
        </h1>

        <p class="subheading font-weight-regular">
          Please take note that your application will be reviewed during working
          hours from Monday to Thursday & Saturday, 8:00AM - 3:30PM. <br />
          Any applications submitted after working hours will be reviewed and
          processed the next working day.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-4">
        <v-card>
          <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab>
              Important Information
            </v-tab>
            <v-tab>
              General Details
            </v-tab>
            <v-tab>
              Addresses
            </v-tab>
            <v-tab>
              Owners
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <ImportantInformation />
            </v-tab-item>
            <v-tab-item>
              <GeneralDetails />
            </v-tab-item>
            <v-tab-item>
              <Addresses />
            </v-tab-item>
            <v-tab-item>
              <Owners />
            </v-tab-item>
          </v-tabs-items>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn id="cancel" color="primary" to="/">
              Cancel
            </v-btn>
            <v-btn id="save" color="primary" @click="onSave">
              Save and Exit
            </v-btn>
            <v-btn color="primary" @click="tab++">
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { EventBus } from "@/main";

import ImportantInformation from "@/components/corporate_registry_services/ImportantInformation";
import GeneralDetails from "@/components/corporate_registry_services/GeneralDetails";
import Addresses from "@/components/corporate_registry_services/Addresses";
import Owners from "@/components/corporate_registry_services/Owners";
export default {
  name: "CorporateRegistryServices",

  components: {
    ImportantInformation,
    GeneralDetails,
    Addresses,
    Owners
  },

  data() {
    return {
      tab: null
    };
  },

  methods: {
    onSave() {
      EventBus.$emit("save");
      this.$router.push("/");
    }
  }
};
</script>
