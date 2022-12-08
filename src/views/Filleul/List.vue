<script setup>
import { ref } from 'vue'
import Item from "@/components/item.vue"
import { supabase } from '../../supabase';

let filleuls = ref([])
const fetchFilleuls = async () => {
  try {
    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('type', 'filleul')
      filleuls.value = users

  } catch (e) {
    console.log(e)
  }

}
fetchFilleuls()
</script>

<template>
  <div>
    <header class="mb-6 flex align-center justify-between">
      <h2>Filleuls</h2>
      <div class="button" @click="$router.push('/filleuls/new')">Nouveau Filleul</div>
    </header>
    <main>
      <div>
        <Item v-for="user in filleuls" :key="user.id" :item="user" />
      </div>
    </main>
  </div>
</template>
