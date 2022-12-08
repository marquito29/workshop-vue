<script setup>
import Form from "@/components/Form.vue";
import { useApi } from "../../composables/useApi";
import { useRouter } from "vue-router";

const router = useRouter();
const TYPE = "filleul";
const { setUser } = useApi();

const appelALaBaseDeDonneesFilleul = async (form) => {
  const response = await setUser(form)
  console.log("OK filleul ajoutés")
  router.push('/filleuls')

};
</script>

<template>
  <div>
    <Form :type="TYPE" @recupereLeForm="appelALaBaseDeDonneesFilleul"></Form>
  </div>
</template>
