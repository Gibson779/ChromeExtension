
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
     let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {


        listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] target="_blank">Visit Example + "</a></li>"
        console.log(listItems)
        
    }
    ulEl.innerHTML = listItems  
}


