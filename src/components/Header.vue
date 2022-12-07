<script setup>
import { ref } from "vue";
import { useMain } from "@/stores/main.js";
import Avatar from "./Avatar.vue";

const store = useMain();

const menu = ref([
  {
    label: "Acceuil",
    link: "/",
  },
  {
    label: "Filleuls",
    link: "/filleuls",
  },
  {
    label: "Parrains",
    link: "/parrains",
  },
]);

const openUrl = () => {
  window.open("https://github.com", "_blank");
};
</script>

<template>
  <div class="Header flex items-center p-4 border-b">
    <h2 class="text-primary-500 lg:text-3xl font-bold mr-6">Mission locale</h2>
    <div class="menu flex items-center grow">
      <RouterLink
        class="p-2 hover:text-blue-500"
        v-for="(item, index) in menu"
        :key="index"
        :to="item.link"
      >
        {{ item.label }}
      </RouterLink>
    </div>
    <Avatar v-if="store.user" :user="store.user" />
  </div>
</template>