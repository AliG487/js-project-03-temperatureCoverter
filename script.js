let fahren = document.querySelector("#fahrenheit")
let celsius = document.querySelector("#celsius")

let tempF
let tempC

fahren.addEventListener("input", (e) => {
  tempF = e.target.value
  if (tempF) {
    celsius.value = (5 / 9) * (tempF - 32)
  } else {
    celsius.value = ""
  }
})
celsius.addEventListener("input", (e) => {
  tempC = e.target.value
  //   console.log(tempC)
  if (tempC) {
    fahren.value = (9 / 5) * tempC + 32
  } else {
    fahren.value = ""
  }
})
