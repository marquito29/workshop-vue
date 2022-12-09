<script setup>
import Form from "@/components/Parrain/Form.vue";
import { useApi } from "../../composables/useApi";
import { useRouter } from "vue-router";

const router = useRouter()
const TABLE = "parrains";
const { setUser } = useApi();

const appelALaBaseDeDonneesParrain = async (form) => {
  const response = await setUser(form,TABLE);
  router.push('/parrains')
};

</script>

<template>
  <div>
    <Form @recupereLeForm="appelALaBaseDeDonneesParrain"></Form>
  </div>
</template>


