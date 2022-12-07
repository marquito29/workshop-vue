<script setup>
import { ref } from "vue";
import Form from "@/components/Form.vue";

const TYPE = ref("filleul");

const appelALaBaseDeDonneesFilleul = (form) => {
  // je récupère le form et j'appelle la BDD
  // LOGIQUE FILLEUL EST ICI AVEC FORM
  console.log(
    "recu sur Filleul/New.vue => fonction appelALaBaseDeDonneesFilleul"
  );
  console.log(form);
};
</script>

<template>
  <div>
    <Form :type="TYPE" @recupereLeForm="appelALaBaseDeDonneesFilleul"></Form>
  </div>
</template>
