let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


tabBtn.addEventListener("click", function(){
    // Grab the URL of the current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = tabs[0];
     var activeTabId = activeTab.id; // or do whatever you need

  });
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)


})



function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

      listItems += `
      <li>
     <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
          </a>  
      </li>
      `
    }

    ulEl.innerHTML = listItems  
}



deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
})

