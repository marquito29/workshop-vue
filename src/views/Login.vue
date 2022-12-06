<script setup></script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                  ></v-text-field>
              </v-form>
            </v-card-text>
            <v-btn>Se connecter</v-btn>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<style scoped>
.v-card{
  background-color: #ffffff;
}
.v-main{
  background-color:#FE9063;
}
button{
    background-color: #27C7D4;
    color:#ffffff;
    margin: 20px;
}
button:hover{
    background-color: #EA5863;
    color:#FE9063;
    transition: all 0.2s ease-in-out;
}
</style>