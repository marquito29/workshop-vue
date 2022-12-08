<script setup>
import Login from "@/views/Login.vue";
import Header from "@/components/Header.vue";
import { useMain } from "@/stores/main";
import { onMounted, ref } from 'vue'
import { supabase } from './supabase'

const store = useMain();

onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
    
    })

  supabase.auth.onAuthStateChange((_, _session) => {
      store.addUser(_session.user)
    })
})

</script>

<template>
  <div class="App">
    <Header v-if="store.user" />
    <main>
      <Login v-if="!store.user" />
      <div v-else class="container mx-auto py-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>