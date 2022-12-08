<script setup>
import Form from "@/components/Form.vue";
import { useApi } from "../../composables/useApi";
import { useRouter } from "vue-router";

const router = useRouter()
const TYPE = "parrain";
const { setUser } = useApi();

const appelALaBaseDeDonneesParrain = async (form) => {
  const response = await setUser(form)
  router.push('/parrains')
};

</script>

<template>
  <div>
    <Form @recupereLeForm="appelALaBaseDeDonneesParrain" :type="TYPE"></Form>
  </div>
</template>


