<script setup>
import { useRouter } from "vue-router";
import HomeCard from "@/components/Home/Card.vue";
import { reactive, ref } from "vue";

const router = useRouter();

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
});

const cards = ref([
  {
    title: "Les 5 derniers parrains ajoutés",
    type: "parrains",
    button: {
      text: "Ajouter un nouveau parrain",
      function: () => {
        router.push("/parrains/new");
      },
    },
  },
  {
    title: "Les 5 derniers filleuls ajoutés",
    type: "filleuls",
    button: {
      text: "Ajouter un nouveau filleul",
      function: () => {
        router.push("/filleuls/new");
      },
    },
  },
]);
</script>

<template>
  <div class="Home">
    <header class="mb-12">
      <h2>Acceuil</h2>
    </header>
    <HomeCard v-for="(item, index) in cards" :key="index" :item="item" />
  </div>
</template>
