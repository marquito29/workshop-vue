<script setup>
import { computed } from "vue"
import { defineEmits } from "vue";

const emit = defineEmits(["sayHello"]);

const sayHello = () => {
  emit("sayHello", "hello");
}

const props = defineProps({
    user: Object
})
const user = props.user

const getFullName = computed(() => {
  const { first_name, last_name } = user;
  if (!first_name || !last_name) return;
  return `${first_name} ${last_name}`; // Marc Piatkowski
});

</script>

<template>
  <div>
    <h1>{{ getFullName }}</h1>
    <h3 class="text-capitalize">{{ user.type }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Ville: {{ user.city }}</p>
    <p>Date de naissance: {{ user.birthdate }}</p>
    <p>Domaine de compétences: {{ user.domain }}</p>
    <v-btn @click="sayHello">Dire bonjour</v-btn>
  </div>
</template>
