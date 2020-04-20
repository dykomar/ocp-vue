<template>
  <v-card-text>
    <v-form>
      <!-- Title -->
      <v-row>
        <v-col>
          <h1 class="title">
            Address Details
          </h1>
        </v-col>
      </v-row>
      <!-- Details -->
      <v-row>
        <!-- Form -->
        <v-col cols="6">
          <!-- Address Type -->
          <v-row>
            <v-col cols="12">
              <v-select :items="items" label="Address Type"></v-select>
            </v-col>
          </v-row>
          <!-- Address 1 * -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Address 1 *"></v-text-field>
            </v-col>
          </v-row>
          <!-- Address 2 -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Address 2"></v-text-field>
            </v-col>
          </v-row>
          <!-- Address 3 -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Address 3"></v-text-field>
            </v-col>
          </v-row>
          <!-- Postal Code * -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Postal Code *"></v-text-field>
            </v-col>
          </v-row>
          <!-- Mukim * -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Mukim *"></v-text-field>
            </v-col>
          </v-row>
          <!-- Village * -->
          <v-row>
            <v-col cols="12">
              <v-text-field label="Village *"></v-text-field>
            </v-col>
          </v-row>
          <!-- District -->
          <v-row>
            <v-col cols="12">
              <v-select :items="districts" label="District"></v-select>
            </v-col>
          </v-row>
          <!-- Country -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Country"
                readonly
                v-model="country"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Add Address -->
          <v-row>
            <v-col cols="12">
              <v-btn color="primary">
                Add Address
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <!-- Addresses -->
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary">
                Edit
              </v-btn>
              <v-btn text color="primary">
                Remove
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-card-text>
</template>

<script>
export default {
  name: "Addresses",

  data: () => ({
    checkbox: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    districts: ["Brunei Muara", "Turong", "Belait", "Temburong"],
    country: "Brunei Darussalam"
  })
};
</script>
