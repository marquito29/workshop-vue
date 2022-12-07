<script setup>
import Login from "@/views/Login.vue"
import Header from "@/components/Header.vue"

import { ref } from "vue"

const isLoggedIn = ref(true)

// quand le composant se monte,
// je récupère mon route.params.id
// et je fetch depuis la base de données, l'utilisateur par son id


// props: passer de la donnée d'un parent à un enfant

// events: passer de la donnée d'un enfant à un parent

// Pinia a un cycle de vie
// Ce cycle de vie est compatible avec celui de Vue

</script>

<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn" app><Header class="text-center"></Header></v-app-bar>
    <v-main>
      <v-container>
        <Login v-if="!isLoggedIn"></Login>
        <div v-else>
        <RouterView></RouterView>
      </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main{
  background-color: #EA5863;
}
</style>