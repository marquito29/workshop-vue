<script setup></script>

<template>
  <v-form v-model="valid">
    <v-card>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Prénom"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Nom"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="city"
            :rules="cityRule"
            label="Ville"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="birthdate"
            :rules="birthdateRule"
            label="Date de naissance"
            required
          ></v-text-field>
        </v-col>
        <v-select
        label="Domaine de compétences"
        :items="['Agroalimentaire','Transport','Menuiserie','Restauration']"
        ></v-select>
      </v-row>
      <v-btn @click="valider">Enregistrer</v-btn>
    </v-container>
    </v-card>

  </v-form>
</template>

<style scoped>
.v-form{
    background-color: #ffffff;
}
button{
    background-color: #27C7D4;
    color:#ffffff;
}
button:hover{
    background-color: #EA5863;
    color:#FE9063;
    transition: all 0.2s ease-in-out;
}
</style>