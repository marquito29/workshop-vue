<script setup>
//import { useCounterStore } from "@/stores/main";

//const counterStore = useCounterStore();

import { ref } from "vue"
const menu = ref([
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Filleuls",
        link: "/filleuls",
    },
    {
        label: "Parrains",
        link: "/parrains",
    }
])

const openUrl = () => {
    window.open("https://github.com", "_blank")
}

</script>

<template>
  <div>
    <!--{{ counterStore.count }}-->
    <RouterLink class="menu" v-for="item,index in menu" :key="index" :to="item.link">
        {{ item.label }}
    </RouterLink>
    <!--<p @click="openUrl">lien vers Guillaume</p>-->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
a {
  font-family: 'Red Hat Display', sans-serif;
  color: #27C7D4;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
}

a:hover {
  text-decoration: none;
  color: #FE9063;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #EA586363;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}
</style>