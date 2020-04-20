<template>
  <v-card-text>
    <v-form>
      <!-- Title -->
      <v-row>
        <v-col>
          <h1 class="title">
            General Details
          </h1>
        </v-col>
      </v-row>
      <!-- Proposed Name -->
      <v-row>
        <v-col cols="6">
          <v-text-field label="Proposed Name *"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-btn color="primary">
            Validate
          </v-btn>
        </v-col>
      </v-row>
      <!-- Entity Type -->
      <v-row>
        <v-col cols="6">
          <v-select :items="items" label="Entity Type"></v-select>
        </v-col>
      </v-row>
      <!-- Business Activities -->
      <v-row>
        <v-col cols="6">
          <v-text-field label="Business Activities *"></v-text-field>
        </v-col>
      </v-row>
      <!-- Consent Required to use existing name? -->
      <v-row>
        <v-col cols="6">
          <p>Consent Required to use existing name? *</p>
          <v-radio-group v-model="radios" :mandatory="false" row>
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <!-- Consents -->
      <v-row>
        <v-col cols="6">
          <v-file-input label="Consents *"></v-file-input>
        </v-col>
      </v-row>
      <!-- Licensing Authority Approval -->
      <v-row>
        <v-col cols="12">
          <h1 class="title">Licensing Authority Approval</h1>
          <p>
            Please attach evidence of approcal from th following licencing
            authorities:
          </p>
          <ul>
            <li>Test</li>
          </ul>
        </v-col>
        <v-col cols="6">
          <v-file-input label="Letter of Approval *"></v-file-input>
        </v-col>
      </v-row>
      <!-- Important Note -->
      <v-row>
        <p class="body-2 red--text">
          IMPORTANT: Any submitted applications are deemed to have been
          thoroughly reviewed by the applicant.<br /><br />
          It is the responsibility of the applicants to ensure that the business
          name applied are not identical and/or resembles names that are already
          registered under the Business Names Act (Cap. 92), Companies Act (Cap.
          39) or Limited Liability Partnerships Order, 2010. The name will be
          rejected if it is already used by another business or if it infringes
          with any trademark or is obscene or undesirable. <br />
          <br />
          Please be informed that if the Registrar receives a valid complaint
          stating that the name is undesirable, identical to that of any other
          registered business name, or the name of any corporation or limited
          liability partnership or misleading, the Registrar can direct the
          business to change its name, even if the complaint is filed after the
          business has been successfully registered.
        </p>
      </v-row>
    </v-form>
  </v-card-text>
</template>

<script>
export default {
  name: "GeneralDetails",

  data: () => ({
    checkbox: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    radioes: null
  })
};
</script>
