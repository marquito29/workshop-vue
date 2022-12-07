<script setup>
import { reactive, ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["recupereLeForm"]);
const props = defineProps({
  type: String,
});

const DOMAINES = ["Agroalimentaire", "Transport", "Menuiserie", "Restauration"];

const VILLES = ["Brest"];

const entries = ref([
  {
    name: "Prénom",
    value: "first_name",
    type: "text",
  },
  {
    name: "Nom",
    value: "last_name",
    type: "text",
  },
  {
    name: "E-mail",
    value: "email",
    type: "text",
  },
  {
    name: "Ville",
    value: "city",
    type: "select",
    items: VILLES,
  },
  {
    name: "Date de naissance",
    value: "postal_code",
    type: "date",
  },
  {
    name: "Domaines",
    value: "domains",
    type: "select",
    items: DOMAINES,
  },
]);

const form = reactive({
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  city: undefined,
  birthdate: undefined,
});

const sendForm = async () => {
  emit("recupereLeForm", form);
};
</script>

<template>
  <div class="Form">
    <header class="mb-4">
      <h2 class="mb-2">Ajouter un nouveau {{ props.type }}</h2>
    </header>
    <div class="flex flex-col w-72 mb-8">
      <div v-for="(item, index) in entries" :key="index" class="mb-2">
        <p class="label">{{ item.name }}</p>
        <select v-if="item.type === 'select'">
          <option v-for="option in item.items" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <input v-else :type="item.type" v-model="form[item.value]" />
      </div>
    </div>
    <div class="button inline-block" @click="sendForm">Ajouter</div>
  </div>
</template>