console.log("hello")

let rowNumber = 0
let total = 0

let items = document.querySelector("#item")
let price = document.querySelector("#price")
let submitbBtn = document.querySelector("#submit-btn")
let tableBody = document.querySelector("#table-body")
let totalAmount= document.querySelector("#total")

items.addEventListener("keyup", function(e){
 
})

submitbBtn.addEventListener("click", function(){
    console.log(items.value)
    console.log("working")
  let newRow = document.createElement("tr")
  newRow.setAttribute("id","table-row");
  tableBody.appendChild(newRow)
let newRowHead = document.createElement("th")
let newItem = document.createElement("td")
let newPrice = document.createElement("td")
newItem.textContent = items.value
newPrice.textContent = price.value
rowNumber += 1
total += Number(price.value)

console.log(total)
totalAmount.textContent = `Total Amount: ${total}`
newRowHead.textContent = rowNumber
newRow.append(newRowHead)
newRow.append(newItem)
newRow.append(newPrice)
})