export function useHelpers() {
  const openUrl = (url) => {
    window.open(url, '_blank')  
  }

  return {
    openUrl
  }
}