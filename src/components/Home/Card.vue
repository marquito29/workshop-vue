<script setup>
import { ref } from "vue"

const props = defineProps({
  item: Object,
});



const nom_parrain = ref(props.item.parrain_id.last_name);
const prenom_parrain = ref(props.item.parrain_id.first_name);
const domain_parrain = ref(props.item.parrain_id.domain);
const nom_filleul = ref(props.item.filleul_id.last_name);
const prenom_filleul = ref(props.item.filleul_id.first_name);

console.log(props.item);

</script>

<template>
  <div class="mb-8">
    <h3 class="mb-4">Parrainage en cours</h3>
    <div class="card mb-4">
      <p v-if="!item" class="mb-2">
        Aucun parrainage en cours
      </p>
      <p v-else class="mb-2">
        {{prenom_parrain}} {{nom_parrain}} parraine {{prenom_filleul}} {{nom_filleul}} - {{domain_parrain}}
      </p>
      <!-- <div v-if="buttonText" class="button" @click="buttonFunction">
        {{ buttonText }}
      </div> -->
    </div>
  </div>
</template>

<style lang='scss'></style>