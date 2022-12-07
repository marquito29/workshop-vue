import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMain = defineStore('main', () => {
  const user = ref(null)
  const getCurrentUser = computed(() => (user.value))
  function addUser(_user) {
    user.value = _user
  }

  return { addUser, getCurrentUser, user }
})