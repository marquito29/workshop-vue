export function useApi() {
  const setUser = (type) => {
    console.log(type)
  }
  return {
    setUser
  }
}