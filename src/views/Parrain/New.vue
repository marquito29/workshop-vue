<script setup>
import Form from "@/components/Form.vue"
const sendParrain = () => {
  console.log("J'envoi dans la bdd parrain");
}

const type = ref("parrain")

</script>

<template>
  <div>
    <Form type="type"></Form>
  </div>
</template>


