<script setup>
import Form from "@/components/Filleul/Form.vue";
import { useApi } from "../../composables/useApi";
import { useRouter } from "vue-router";

const router = useRouter();
const TABLE = "filleuls";
const { setUser } = useApi();

const appelALaBaseDeDonneesFilleul = async (form) => {
  const response = await setUser(form,TABLE)
  console.log("OK filleul ajoutés")
  router.push('/filleuls')

};
</script>

<template>
  <div>
    <Form @recupereLeForm="appelALaBaseDeDonneesFilleul"></Form>
  </div>
</template>
