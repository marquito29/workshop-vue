<script setup>
import { ref } from "vue";
import Form from "@/components/Form.vue";

const TYPE = "parrain";

const appelALaBaseDeDonneesParrain = (form) => {
  // je récupère le form et j'appelle la BDD
  // LOGIQUE PARRAIN EST ICI AVEC FORM
  console.log(
    "recu sur Parrain/New.vue => fonction appelALaBaseDeDonneesParrain"
  );
  console.log(form);
};
</script>

<template>
  <div>
    <Form @recupereLeForm="appelALaBaseDeDonneesParrain" :type="TYPE"></Form>
  </div>
</template>


