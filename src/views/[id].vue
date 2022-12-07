<script setup>
import { useRoute } from "vue-router";
import User from "../components/User.vue";

const user = undefined;

const route = useRoute();
const attraperReponse = (event) => {
  console.log(event);
};

const fetchUser = () => {
  console.log("Fetching");
};
fetchUser();
console.log(user);
</script>

<template>
  <div>
    <User @sayHello="attraperReponse" v-if="user" :user="user" />
    <p v-else>Utilisateur non trouvé</p>
    {{ route.params.id }}
  </div>
</template>
