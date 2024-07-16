const amount = document.getElementById("amount")

// Manipulando o input amount para receber somente números  
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.replace(hasCharactersRegex, "")
})