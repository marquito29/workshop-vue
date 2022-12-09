<script setup>
import { useRouter } from "vue-router";
import HomeCard from "@/components/Home/Card.vue";
import { reactive, ref } from "vue";
import { supabase } from '../supabase';

const router = useRouter();

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
});


let relations = ref([])

const fetchRelations = async () => {
  try {
    let { data: relationsData, error } = await supabase
      .from('relations')
      .select('*,parrain_id(*),filleul_id(*)')
    relations.value = relationsData
  } catch (e) {
    console.log(e)
  }

}
fetchRelations()

const cards = ref([
  {
    title: "Les actions parrainage en cours",
    type: "parrains",
    button: {
      text: "Ajouter un nouveau parrain",
      function: () => {
        router.push("/parrains/new");
      },
    },
  }
]);
</script>

<template>
  <div class="Home">
    <header class="mb-12">
      <h2>Acceuil</h2>
    </header>
    <HomeCard v-for="(item, index) in relations" :key="index" :item="item" />
  </div>
</template>
