<script setup>
import { useRoute } from "vue-router"
import User from "../components/User.vue"
import { useCounterStore } from "../stores/main";

const counterStore = useCounterStore();
const user = undefined

console.log(counterStore.count)
const route = useRoute()
const attraperReponse = (event) => {
  console.log(event)
}

const fetchUser = () => {
    console.log("Fetching")
}
fetchUser()
console.log(user)
</script>

<template>
  <div>
    <User @sayHello="attraperReponse" v-if="user" :user="user" />
    <p v-else>Utilisateur non trouvé</p>
    {{ counterStore.doubleCount }}
    <v-btn @click="counterStore.increment">increase</v-btn>
    {{ route.params.id }}
  </div>
</template>
