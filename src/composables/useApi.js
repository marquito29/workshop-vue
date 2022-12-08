import { supabase } from "../supabase"
export function useApi() {
    const setUser = async (user) => {
      
    const { data, error } = await supabase
    .from('users')
    .insert(user)

    console.log(data)
  }
  return {
    setUser
  }
}