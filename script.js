const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const text = document.getElementById('text')
const search = document.getElementById('search')
const reset = document.getElementById('reset')

// define more constants and variables here

let inputCha = ""
let clickbtn = false;

btn_toggle.onclick = () => {

  // your code here

  if (clickbtn == false) {
    inputCha = author.innerText
    const a = author.innerText.split(' ')
    let calculation = parseInt(a[0]) + parseInt(length.value)
    author.innerText = calculation
    clickbtn = true
  } else {
    author.innerText = inputCha
    clickbtn = false
  }
}

// more codes for Search and Reset buttons here

let input = false

search.onclick = () => {
  let arr = text.innerText.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= length.value) {
      arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
    }
  }
  const t = arr.join(' ')
  text.innerHTML = t
  input = true
}

color.inputFromSearch = () => {
  if (input == true) {
    let arr = text.innerText.split(' ')

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= length.value) {
      arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
      }
    }
    const t = arr.join(' ')
    text.innerHTML = t
  }
}

let clear = text.innerText

reset.onclick = () => {
  text.innerHTML = clear
}