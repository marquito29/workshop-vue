export function useHelpers() {
  const openUrl = (url) => {
    window.open(url, '_blank')  
  }

  return {
    openUrl
  }
}

export function getPrenomNom(user) {(
  user.first_name +" "+user.last_name
)}