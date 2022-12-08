<script setup>
import { ref } from 'vue'
import Item from "@/components/item.vue"
import { supabase } from '../../supabase';

let parrains = ref([])
const fetchParrains = async () => {
  try {
    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('type', 'parrain')
      parrains.value = users
    console.log(parrains.value)
    console.log(users)

  } catch (e) {
    console.log(e)
  }

}
fetchParrains()
</script>

<template>
  <div>
    <header class="mb-6 flex align-center justify-between">
      <h2>Parrains</h2>
      <div class="button" @click="$router.push('/parrains/new')">Nouveau Parrain</div>
    </header>
    <main>
      <div>
        <Item v-for="user in parrains" :key="user.id" :item="user" />
      </div>
    </main>
  </div>
</template>
