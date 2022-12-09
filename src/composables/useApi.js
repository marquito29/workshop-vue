import { supabase } from "../supabase"
export function useApi() {
    const setUser = async (user,table) => {
      
    const { data, error } = await supabase
    .from(table)
    .insert(user)

    console.log(data)
  }
  return {
    setUser
  }
}