<script setup>
import Form from "@/components/Form.vue"
const sendFilleul = () => {
  console.log("J'envoi dans la bdd filleul");
}

const type = ref('filleul')

</script>

<template>
  <div>
    <Form :type="type"></Form>
  </div>
</template>
